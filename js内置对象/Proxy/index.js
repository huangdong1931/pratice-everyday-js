// target：要使用 Proxy 包装的目标对象（可以是任何类型的对象，包括原生数组，函数，甚至另一个代理）。
// handler：一个通常以函数作为属性的对象，各属性中的函数分别定义了在执行各种操作时代理 p 的行为。
// eg: let proxy = new Proxy(target, handler)


/**
 * 当handler为get方法时：方法用于拦截对象的读取属性操作
 * target：目标对象
 * property：被获取的属性名
 * receiver：Proxy 或者继承 Proxy 的对象
 * @return get 方法可以返回任何值
 */
let proxy = new Proxy({a: 4}, {
  get: (target, prop, receiver) => {
    console.log('get:', target, receiver)
    return `拦截${prop}`
  }
})
console.log('proxy:', proxy)