const isNull = (v) => v === null;
const isUndefined = (v) => v === undefined;
const error = (msg) => { throw new Error(msg) };

const calc = (a, b) => {
  if (isNull(a) || isNull(b)) error('参数值为null')
  if (isUndefined(a) || isUndefined(b)) error('参数值为undefined')
  if (isNaN(+a) || isNaN(+b)) error('参数值不是数字或字符串')
}

calc(null, undefined)