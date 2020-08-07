import { HTTPStore, openArray, slice } from 'zarr';

const ZarrHorizontalChromosomeLabelsTrack = function ZarrHorizontalChromosomeLabelsTrack(HGC, ...args) {

  if (!new.target) {
        throw new Error(
          'Uncaught TypeError: Class constructor cannot be invoked without "new"',
        );
    }

    const { HorizontalChromosomeLabels } = HGC.tracks;


    class ZarrHorizontalChromosomeLabelsTrackClass extends HorizontalChromosomeLabels {
        constructor(context, options) {
            super(context, options);

            console.log("ZarrHorizontalChromosomeLabelsTrackClass");

            const { dataConfig } = context;
        
            if (dataConfig.url) {
              this.store = new HTTPStore(dataConfig.url);

            }
        }

    } // end class
    return new ZarrHorizontalChromosomeLabelsTrackClass(...args);
} // end function wrapper


ZarrHorizontalChromosomeLabelsTrack.config = {
    type: 'zarr-horizontal-chromosome-labels',
};

export default ZarrHorizontalChromosomeLabelsTrack;
