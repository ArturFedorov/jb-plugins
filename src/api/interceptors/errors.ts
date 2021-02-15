import axios from 'axios';
import errorResponseHandler from './errorResponseHandler';

axios.interceptors.response.use((response) => response, errorResponseHandler);
