
/**
 * 
 * @param {*} e 输入框 event 值
 * @param {*} pointNum 保留几位小数
 * @param {*} type 校验类型
 * @param {*} max 最大输入值
 * @param {*} min 最小输入值
 * @returns 
 */

const format = {
  '+': /^[1-9][0-9]*$/, // 正整数
  '-': /^\-[0-9]*$/, // 负整数
  '>': /^(\d+)(\.\d+)?$/, // 大于等于0的数
  '*': /^(-)?(\d+(\.?(\d+)?))?$/ // 所有数字
}

let value = '';

const controlInput = (e, pointNum = 0, max = null, min = null, type = '*') => {
  let v = e.target.value;
  if (format[type].test(v)) {
    value = v;
    // pointNum 小数位处理
    v = pointNumFn(pointNum, v);
    // 最大值处理 max
    v = maxFn(max, v);
    // 最小值处理 max
    v = minFn(min, v);
  } else if (!v) {
    value = '';
    v = value;
  } else {
    v = value;
  }
  return v;
};

const pointNumFn = (pointNum, v) => {
  if (pointNum && value.split('.')[1]) {
    if (value.split('.')[1].length > pointNum) {
      v = value.split('.')[0] + '.' + value.split('.')[1].slice(0, pointNum);
      value = v;
    }
  }
  return v;
};

const maxFn = (max, v) => {
  if (!max) return v;
  if (v > max) {
    value = max;
    return max;
  }
  return v;
};

const minFn = (min, v) => {
  if (!min) return v;
  if (v < min) {
    value = min;
    return min;
  }
  return v;
};
