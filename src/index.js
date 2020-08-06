
import React from 'react';
import ReactDOM from 'react-dom';
import Demo from './Demo.js';

import ZarrMultivecDataFetcher from './ZarrMultivecDataFetcher.js';

import './index.scss';

window.higlassDataFetchersByType = {
    'zarr-multivec': {
        dataFetcher: ZarrMultivecDataFetcher
    }
};

ReactDOM.render(<Demo />, document.getElementById('root'));