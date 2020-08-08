
const ZarrHorizontalChromosomeLabelsTrack = function ZarrHorizontalChromosomeLabelsTrack(HGC, ...args) {

  if (!new.target) {
        throw new Error(
          'Uncaught TypeError: Class constructor cannot be invoked without "new"',
        );
    }

    const { HorizontalChromosomeLabels } = HGC.tracks;
    const { SearchField } = HGC.chromosomes;


    class ZarrHorizontalChromosomeLabelsTrackClass extends HorizontalChromosomeLabels {
        constructor(context, options) {
            super(context, options);

            console.log("ZarrHorizontalChromosomeLabelsTrackClass");

            const { dataConfig } = context;
            console.log(dataConfig);

            // TODO
            
            this.chromInfo = undefined;
            this.searchField = new SearchField(this.chromInfo);
            /*this.rerender(options, true);
            this.draw();
            this.animate();*/
        }

    } // end class
    return new ZarrHorizontalChromosomeLabelsTrackClass(...args);
} // end function wrapper


ZarrHorizontalChromosomeLabelsTrack.config = {
    type: 'zarr-horizontal-chromosome-labels',
};

export default ZarrHorizontalChromosomeLabelsTrack;
