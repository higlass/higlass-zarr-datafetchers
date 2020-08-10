import React from 'react';
import ReactDOM from 'react-dom';
import register from 'higlass-register';
import { ZarrMultivecDataFetcher } from '../index';

import Demo from './Demo';
import './index.scss';

register({ dataFetcher: ZarrMultivecDataFetcher, config: ZarrMultivecDataFetcher.config }, { pluginType: 'dataFetcher' });

ReactDOM.render(<Demo />, document.getElementById('root'));