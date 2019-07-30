import { makePath, resolvePathArgs } from './utils';
import request from './request';

// checks for substitutions, returns new url + request data + additional options passed
const resolveOptions = (path, useQueryParams, ...args) => {
  const { replacements, data, options, shouldHaveReplacements } = resolvePathArgs(path, args);
  const url = makePath(path, {
    replacements: shouldHaveReplacements && replacements,
    params: useQueryParams ? data : null,
  });

  return { url, data, options };
};

// request method factory
const buildMethod = (method, useQueryParams = false) => path => (...args) => {
  const {
    url,
    data,
    options: { raw, ...restOptions },
  } = resolveOptions(path, useQueryParams, ...args);
  const body = raw ? data : JSON.stringify(data);
  const params = useQueryParams ? restOptions : { body, ...restOptions };
  return request(url, params, method);
};

export const get = buildMethod('GET', true);
export const post = buildMethod('POST');
export const put = buildMethod('PUT');
export const patch = buildMethod('PATCH');
export const destroy = buildMethod('DELETE');
