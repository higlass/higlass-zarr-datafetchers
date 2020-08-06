function parseChromsizesRows(data) {
    const cumValues = [];
    const chromLengths = {};
    const chrPositions = {};
  
    let totalLength = 0;
  
    for (let i = 0; i < data.length; i++) {
      const length = Number(data[i][1]);
      totalLength += length;
  
      const newValue = {
        id: i,
        chr: data[i][0],
        pos: totalLength - length,
      };
  
      cumValues.push(newValue);
      chrPositions[newValue.chr] = newValue;
      chromLengths[data[i][0]] = length;
    }
  
    return {
      cumPositions: cumValues,
      chrPositions,
      totalLength,
      chromLengths,
    };
}

/**
 *
 * @param {number[]} chromSizes An array of the lengths of the chromosomes [1000,...]
 * @param {number} startPos The starting genomic position
 * @param {number} endPos The ending genomic position
 */
export function abs2genomic(absToChr, chromSizes, absStartPos, absEndPos) {
    const chromInfo = parseChromsizesRows(chromSizes);
    const [chrStart, chrStartPos] = absToChr(absStartPos, chromInfo);
    const [chrEnd, chrEndPos] = absToChr(absEndPos, chromInfo);
    return [
      { chr: chrStart, pos: chrStartPos },
      { chr: chrEnd, pos: chrEndPos },
    ];
}
  
/**
 * Using the [genomicStart, genomicEnd] range, get an array of "chromosome chunks",
 * where each chunk range starts and ends with the same chromosome.
 * Start a new chromosome chunk at each chromosome boundary.
 * @param {array} chromSizes Array of [chrName, chrLen] tuples.
 * @param {object} genomicStart A genomic position object returned from abs2genomic { chr, pos }.
 * @param {object} genomicEnd A genomic position object returned from abs2genomic { chr, pos }.
 * @param {number} binSize The resolution / bin size.
 * @param {number} tileSize The tile size (probably 256).
 * @returns {array} Returns array of [chrName, zStart, zEnd] tuples.
 */
export function genomicRangeToChromosomeChunks(
    chromSizes,
    genomicStart,
    genomicEnd,
    binSize,
    tileSize,
  ) {
    const { chr: chrStart, pos: chrStartPos } = genomicStart;
    const { chr: chrEnd, pos: chrEndPos } = genomicEnd;
  
    const chrChunks = [];
    if (chrStart === chrEnd) {
      // This tile does _not_ cross a chromosome boundary.
      const chrName = chrStart;
      const zStart = Math.floor(chrStartPos / binSize);
      const zEnd = Math.min(zStart + tileSize, Math.ceil(chrEndPos / binSize));
  
      chrChunks.push([chrName, zStart, zEnd]);
    } else {
      // This tile does cross a chromosome boundary.
      let zRemaining = tileSize;
      const chrStartIndex = chromSizes.findIndex(
        ([chrName]) => chrName === chrStart,
      );
      const chrEndIndex = chromSizes.findIndex(([chrName]) => chrName === chrEnd);
  
      // Create a separate chunk for each chromosome that lies within the range.
      for (let chrIndex = chrStartIndex; chrIndex <= chrEndIndex; chrIndex++) {
        let chrChunkStart;
        let chrChunkEnd;
  
        const [currChrName, currChrLen] = chromSizes[chrIndex];
  
        if (chrIndex < chrEndIndex) {
          // If the current chromosome is before the end chromosome, then we want the chunk to end at the end of the current chromosome.
          if (chrIndex === chrStartIndex) {
            // If this is the start chromosome, we may want to start at somewhere past 0.
            chrChunkStart = chrStartPos;
          } else {
            // If this is not the start chromosome, then it is somewhere in the middle, and we want to start at 0.
            chrChunkStart = 0;
          }
          chrChunkEnd = currChrLen;
        } else {
          // The current chromosome is the end chromosome, so we may want the chunk to end before the end of the chromosome.
          chrChunkStart = 0;
          chrChunkEnd = chrEndPos;
        }
  
        const zStart = Math.floor(chrChunkStart / binSize);
        const zEnd = Math.min(
          zStart + zRemaining,
          Math.ceil(chrChunkEnd / binSize),
        );
  
        chrChunks.push([currChrName, zStart, zEnd]);
        zRemaining -= zEnd - zStart;
      }
    }
    return chrChunks;
}
  
export function multivecChunksToTileDenseArray(chunks, tileShape) {
    // Allocate a Float32Array for the tile (with length num_samples * tile_size).
    const fullTileLength = tileShape[0] * tileShape[1];
    const fullTileArray = new Float32Array(fullTileLength);
  
    // Fill in the data for each sample.
    let offset = 0;
    const numSamples = tileShape[0];
    for (let sampleI = 0; sampleI < numSamples; sampleI++) {
      for (const chunk of chunks) {
        const chunkData = chunk.data[sampleI];
        fullTileArray.set(chunkData, offset);
        offset += chunkData.length;
      }
    }
    return fullTileArray;
}