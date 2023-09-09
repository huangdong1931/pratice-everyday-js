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
let t1 = { a: 4 }
let h1 = {
  get(target, prop, receiver) {
    return `拦截${prop}`
  }
}
let p1 = new Proxy(t1, h1)

/**
 * 当handler为set方法时：方法用于设置属性值操作的捕获器
 * @param target 目标对象
 * @param property 将被设置的属性名或 Symbol
 * @param target 新属性值
 * @param receiver 最初被调用的对象。通常是 proxy 本身，但 handler 的 set 方法也有可能在原型链上，或以其他方式被间接地调用（因此不一定是 proxy 本身）
 * @return set() 方法应当返回一个布尔值 返回 true 代表属性设置成功 在严格模式下，如果 set() 方法返回 false，那么会抛出一个 TypeError 异常
 */
let t2 = {}
let h2 = {
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
let p2 = new Proxy(t2, h2)

/**
 * 当handler.apply() 方法用于拦截函数的调用
 * @param target 目标对象（函数）
 * @param thisArg 被调用时的上下文对象
 * @param argumentsList 被调用时的参数数组
 * @return apply 方法可以返回任何值
 */

let t3 = (a, b) => a + b
let h3 = {
  apply: function(target, thisArg, argList) {
    return target(argList[0], argList[1]) * 10
  }
}
let p3 = new Proxy(t3, h3)

/**
 * 当handler.has() 方法可以看作是针对 in 操作的钩子
 * @param target 目标对象（函数）
 * @param prop 需要检查是否存在的属性
 * @return has 方法返回一个 boolean 属性的值
 */

let t4 = {
  name: 'zs',
  age: 18
}
let h4 = {
  has(target, key) {
    return key in target
  }
}
let p4 = new Proxy(t4, h4)