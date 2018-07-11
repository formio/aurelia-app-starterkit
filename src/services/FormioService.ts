import config from '../config';
import {Formio} from 'formiojs';

Formio.setProjectUrl(config.projectUrl);
Formio.setBaseUrl(config.apiUrl);

export default Formio;
