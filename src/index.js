import React from 'react';
import ReactDOM from 'react-dom';
import Demo from './Demo';
import register from 'higlass-register';

import ZarrMultivecDataFetcher from './ZarrMultivecDataFetcher';
import ZarrChromsizesDataFetcher from './ZarrChromsizesDataFetcher';
import ZarrHorizontalChromosomeLabelsTrack from './ZarrHorizontalChromosomeLabelsTrack';

import './index.scss';

register({ pluginType: 'dataFetcher', dataFetcher: ZarrMultivecDataFetcher, config: ZarrMultivecDataFetcher.config });
register({ pluginType: 'dataFetcher', dataFetcher: ZarrChromsizesDataFetcher, config: ZarrChromsizesDataFetcher.config });
register({ pluginType: 'track', track: ZarrHorizontalChromosomeLabelsTrack, config: ZarrHorizontalChromosomeLabelsTrack.config });


ReactDOM.render(<Demo />, document.getElementById('root'));