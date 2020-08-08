import React from 'react';
import ReactDOM from 'react-dom';
import Demo from './Demo';
import register from 'higlass-register';

import ZarrMultivecDataFetcher from './ZarrMultivecDataFetcher';
import ZarrChromsizesDataFetcher from './ZarrChromsizesDataFetcher';
import ZarrHorizontalChromosomeLabelsTrack from './ZarrHorizontalChromosomeLabelsTrack';

import './index.scss';

register({ dataFetcher: ZarrMultivecDataFetcher, config: ZarrMultivecDataFetcher.config }, { pluginType: 'dataFetcher' });
register({ dataFetcher: ZarrChromsizesDataFetcher, config: ZarrChromsizesDataFetcher.config }, { pluginType: 'dataFetcher' });
register({ track: ZarrHorizontalChromosomeLabelsTrack, config: ZarrHorizontalChromosomeLabelsTrack.config }, { pluginType: 'track' });

console.log(window.higlassTracksByType);

ReactDOM.render(<Demo />, document.getElementById('root'));