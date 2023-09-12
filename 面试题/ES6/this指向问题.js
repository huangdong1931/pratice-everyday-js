/**
 * this 指向问题
 * 1. 严格模式下 "use strict" function 函数内部this指向为 undefined
 * 2. 非严格模式下 function 函数内部this指向 全局对象
 * 3. 箭头函数 this 在定义时就指定了非使用时所以不会受到call、apply、bind影响，永远是跟随父级的this的
 */

// 代码一
// "use strict"
// function fn1() {
//   console.log('this', this);
// }
// const obj1 = {
//   a: 1,
//   b: 2
// }
// fn1.call() // undefined

// 代码二
// function fn2() {
//   console.log('this', this);
// }
// const obj2 = {
//   a: 1,
//   b: 2
// }
// fn2.call() // window

// 代码三
// function fn3() {
//   console.log('this', this);
// }
// const obj3 = {
//   a: 1,
//   b: 2
// }
// fn3.call(obj3)

// 代码四
// "use strict"
// const fn4 = () => {
//   console.log('this', this);
// };
// const obj4 = {
//   a: 1,
//   b: 2
// }
// fn4.call(obj4)

// 代码五
// const fn5 = () => {
//   console.log('this', this);
// };
// const obj5 = {
//   a: 1,
//   b: 2
// }
// fn4.call(obj5)

// 代码六
// const obj6 = {}
// const fn6 = () => {
//   console.log(this);
// }
// const fn7 = fn6.bind(obj6);
// fn7();

// 代码七
// function fn8() {
//   console.log(this);
// }
// const fn9 = fn8.bind(obj6);
// fn9();


