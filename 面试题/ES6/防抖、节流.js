// debounce
const debounce = (func, await) => {
  let timer;
  return function() {
    const context = this;
    const args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(context, args)
    }, await)
  }
};
const handler = () => {
  console.log('debounce');
};
const debounceFn = debounce(handler, 500);


// throttle
const throttle = (func, limit) => {
  let inThrottle;
  return function() {
    const context = this;
    const args = arguments;
    if (!throttle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  }
};

// 防抖、节流函数通常情况是用计时器来实现，但是不局限于用计时器来实现，也可以用日期对象来判断时间戳来实现

const fn = (func, await) => {
  let timer;
  return function () {
    const context = this;
    const args = arguments;
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      func.apply(context, args)
    }, await);
  }
}

const th = (func, limit) => {
  let inthrottle;
  return function() {
    const context = this;
    const args = arguments;
    if (!inthrottle) {
      func.apply(context, args);
      inthrottle = true;
      setTimeout(() => {
        inthrottle = false;
      }, limit)
    }
  }
};