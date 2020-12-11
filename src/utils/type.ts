export const isPlainObject = (obj: any) => {
  return Object.prototype.toString.call(obj) === '[object Object]';
};

export const dataType = (obj: any) => {
  if (obj === null) return 'Null';
  if (obj === undefined) return 'Undefined';
  return Object.prototype.toString.call(obj).slice(8, -1);
};
export const dropWhileNull = (obj: any) => {
  const param: any = {};
  if (obj === null || obj === undefined || obj === '') return param;
  for (const key in obj) {
    if (dataType(obj[key]) === 'Object') {
      param[key] = dropWhileNull(obj[key]);
    } else if (obj[key] !== null && obj[key] !== undefined && obj[key] !== '') {
      param[key] = obj[key];
    }
  }
  return param;
};
