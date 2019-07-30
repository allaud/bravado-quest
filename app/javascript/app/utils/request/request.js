import { getMetaEnv } from '../meta';
import { dropEmptyKeys } from '../core/object';

const defaultHeaders = () => ({
  'X-CSRF-Token': getMetaEnv('csrf-token'),
  'X-Requested-With': 'XMLHttpRequest',
  Accept: 'application/json',
  'Content-Type': 'application/json; charset=utf-8',
});

const buildParams = ({ headers = {}, ...rest }, method) => ({
  method,
  headers: dropEmptyKeys({
    ...defaultHeaders(),
    ...headers,
  }),
  credentials: 'same-origin',
  ...rest,
});

const haltForbidden = response => {
  if (response.status === 403) throw Error(response.statusText);
  return response;
};

export default (url, params = {}, method = 'GET') => {
  return fetch(url, buildParams(params, method))
    .then(haltForbidden)
    .then(response => response.json())
    .catch(error => {
      try {
        console.error(error); // eslint-disable-line no-console
      } catch (err) {
        console.error('Error has malformed data'); // eslint-disable-line no-console
      }
      throw error;
    });
};
