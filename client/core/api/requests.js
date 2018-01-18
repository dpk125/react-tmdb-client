import axios from 'axios';
import { baseURL } from './endpoints';
import { config } from './config';

export const request = (method, url) => {
  return axios({
    method,
    baseURL,
    url,
    params: {
      'api_key': config.API_KEY
    },
    responseType: 'json',
  })
    .then(response => ({ response }))
    .catch(error => ({ error }));
};

export const get = (url) => request('GET', url);
