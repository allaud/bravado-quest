export const dropEmptyKeys = obj =>
  Object.keys(obj)
    .filter(k => obj[k] !== null && obj[k] !== undefined)
    .reduce(
      (newObj, k) =>
        isObject(obj[k])
          ? Object.assign(newObj, { [k]: dropEmptyKeys(obj[k]) })
          : Object.assign(newObj, { [k]: obj[k] }),
      {},
    );

export const isObject = obj => typeof obj === 'object';
