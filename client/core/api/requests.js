import axios from 'axios';
import { baseURL } from './endpoints';
import { config } from './config';

export const request = (method, url, parameters) => {
  const params = Object.assign({}, parameters, { 'api_key': config.API_KEY });

  return axios({
    method,
    baseURL,
    url,
    params,
    responseType: 'json',
  })
    .then(response => ({ response }))
    .catch(error => ({ error }));
};

export const get = (url, params) => request('GET', url, params);
