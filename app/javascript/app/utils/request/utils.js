import { isObject } from '../core/object';

export const toQueryString = (params = {}) =>
  Object.keys(params)
    .map(k => {
      if (Array.isArray(params[k])) {
        return params[k]
          .map(val => `${encodeURIComponent(k)}[]=${encodeURIComponent(val)}`)
          .join('&');
      }
      const value = isObject(params[k]) ? JSON.stringify(params[k]) : params[k];
      return `${encodeURIComponent(k)}=${encodeURIComponent(value)}`;
    })
    .join('&');

export const resolvePathArgs = (path, args) => {
  const shouldHaveReplacements = path.includes(':');
  let replacements;
  let data;
  let options;

  if (shouldHaveReplacements) {
    [replacements, data, options = { raw: false }] = args;
    if (!replacements) {
      throw new Error(`Please provide attributes for path: ${path}`);
    }
  } else {
    [data, options = { raw: false }] = args;
  }

  return { shouldHaveReplacements, data, options, replacements };
};

export const makePath = (path, { replacements, params }) => {
  let newPath = String(path);

  if (replacements) {
    if (!isObject(replacements)) {
      throw new Error(
        `Replacements need to be object, ${typeof replacements} provided for ${path}`,
      );
    }

    Object.keys(replacements).forEach(name => {
      if (newPath.includes(`:${name}`)) {
        newPath = newPath.replace(new RegExp(`:${name}`, 'g'), replacements[name]);
      } else {
        throw new Error(`Can't find :${name} in ${path}`);
      }
    });

    if (newPath.includes(':')) {
      throw new Error(`Not all replacements were provided: ${path}`);
    }
  }

  const query = params ? `?${toQueryString(params)}` : '';

  return `${newPath}${query}`;
};
