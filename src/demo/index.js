import React from 'react';
import ReactDOM from 'react-dom';

import { ZarrMultivecDataFetcher } from '../index';

import Demo from './Demo';
import './index.scss';

// Coming soon: higlass register
window.higlassDataFetchersByType = {
    [ZarrMultivecDataFetcher.config.type]: {
        dataFetcher: ZarrMultivecDataFetcher,
    }
}

ReactDOM.render(<Demo />, document.getElementById('root'));