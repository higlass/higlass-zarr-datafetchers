
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