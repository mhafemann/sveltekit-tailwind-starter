export const isString = (a: any) => typeof a === 'string';
export const isArray = (a: any) => Array.isArray(a);
export const isFunction = (a: any) => typeof a === 'function';
export const isInteger = (a: any) => Number.isInteger(a);
export const isRegExp = (a: any) => a instanceof RegExp;
