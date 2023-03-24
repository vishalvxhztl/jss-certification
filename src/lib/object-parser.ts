import { set } from 'lodash';

interface IObjectKeys {
  [key: string]: string | number;
}

export const expandObj = (obj: any) => {
  const expanded = {};

  for (const [key, value] of Object.entries(obj)) {
    set(expanded, key, value);
  }

  return expanded;
};

export const flattenObj = (obj: any, parent?: string) => {
  const flattened = {} as IObjectKeys;

  Object.keys(obj).forEach((key) => {
    const computedKey: string = `${parent ? parent + '.' : ''}${key}`;
    const value = obj[key];

    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      Object.assign(flattened, flattenObj(value, computedKey));
    } else {
      flattened[computedKey] = value;
    }
  });

  return flattened;
};
