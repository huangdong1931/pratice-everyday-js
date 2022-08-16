// target：要使用 Proxy 包装的目标对象（可以是任何类型的对象，包括原生数组，函数，甚至另一个代理）。
// handler：一个通常以函数作为属性的对象，各属性中的函数分别定义了在执行各种操作时代理 p 的行为。
// eg: let proxy = new Proxy(target, handler)


/**
 * 当handler为get方法时：方法用于拦截对象的读取属性操作
 * @param target：目标对象
 * @param property：被获取的属性名
 * @param receiver：Proxy 或者继承 Proxy 的对象
 * @return get 方法可以返回任何值
 */
let proxy = new Proxy({a: 4}, {
  get: (target, prop, receiver) => {
    console.log('get:', target, receiver)
    return `拦截${prop}`
  }
})
console.log('proxy:', proxy)

/**
 * 当handler为set方法时：方法用于设置属性值操作的捕获器
 * @param target 目标对象
 * @param property 将被设置的属性名或 Symbol
 * @param target 新属性值
 * @param receiver 最初被调用的对象。通常是 proxy 本身，但 handler 的 set 方法也有可能在原型链上，或以其他方式被间接地调用（因此不一定是 proxy 本身）
 * @return set() 方法应当返回一个布尔值 返回 true 代表属性设置成功 在严格模式下，如果 set() 方法返回 false，那么会抛出一个 TypeError 异常
 */

let valid = {
  set: function(obj, prop, value) {
    if (prop === 'age') {
      // 如果不是整数则抛出异常
      if (!Number.isInteger(value)) {
        throw new Error('年龄必须为整数')
      }
    }
    obj[prop] = value
  }
}
let proxy1 = new Proxy({}, valid)


let HTTP = {
  GET: (url, params) => {
    return fetch(url).then(response => response.json())
  },
  POST: (url, params) => {}
}

console.log(HTTP.GET('./text.json'))

/**
 * 当handler.apply() 方法用于拦截函数的调用
 * @param target 目标对象（函数）
 * @param thisArg 被调用时的上下文对象
 * @param argumentsList 被调用时的参数数组
 * @return apply 方法可以返回任何值
 */

let sum = (a, b) => a + b
let handler = {
  apply: function(target, thisArg, argList) {
    return target(argList[0], argList[1]) * 10
  }
}
let proxy2 = new Proxy(sum, handler)

// 思考：apply是否可用于实现重复请求？
let fn = (...arg) => {
  return setTimeout(() => {
    return arg
  }, 2000)
}
let handlerFn = {
  apply: function(t, ctx, argList) {
    // 这里为什么会返回 1,2,3
    console.log('apply:', t(...argList))
    console.log('apply:', t(...argList))
    console.log('apply:', t(...argList))
    return t(...argList)
  }
}
let proxy3 = new Proxy(fn, handlerFn)

console.log('value:', proxy3(999, 8888))