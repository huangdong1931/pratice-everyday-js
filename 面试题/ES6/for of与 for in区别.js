
/**
 * for in 与 for of区别？
 * 1. for in 是以任意顺序迭代一个除 Symbol 以外的可枚举属性的对象，for of 是迭代 一个可迭代对象
 * 2. for in 遍历对象是键、数组是索引，for of 遍历可迭代对象是迭代器 Symbol.iterator 的值，数组是每一项的值
 * 3. for in 可以遍历到对象上可枚举的原型链属性 for of 不会对原型链进行遍历
 * 4. hasOwnProperty 可以消除 for in 遍历对象可枚举原型链属性的副作用
 */
// 1. 创建一个普通对象
let obj = { a: 1, b: 2, c: 3 };

// for in 循环
// for (let key1 in obj) {
//   console.log('key1:', key1)
// }
// for of 循环 报错
// for (let item1 of obj) {
//   console.log('item1:', item1);
// }
// 结论：for in 是以任意顺序迭代一个对象除 Symbol 以外的可枚举属性，for of 是迭代 一个可迭代对象

// 2. 为 obj 创建一个迭代器属性成为可迭代对象
obj.__proto__[Symbol.iterator] = function* () {
  yield 1;
  yield 2;
  yield 3;
}

// for (let key2 of obj) {
//   console.log('key2:', key2);
// }

// for (let item2 of obj) {
//   console.log('item2:', item2);
// }
// 结论：for in 遍历对象是键、数组是索引，for of 遍历可迭代对象是迭代器 Symbol.iterator 的值，数组是每一项的值

// 3. 为 obj 原型添加属性
obj.__proto__.d = 4;
obj.__proto__.fn = () => {};

// for (let key3 in obj) {
//   console.log('key3:', key3);
// }

// for (let item3 of obj) {
//   console.log('item3:', item3);
// }
// 结论：for in 可以遍历到对象上可枚举的原型链属性 for of 不会对原型链进行遍历

// 拓展 hasOwnProperty 可以消除 for in 遍历对象可枚举原型链属性的副作用
for (let key4 in obj) {
  if (obj.hasOwnProperty(key4)) {
    console.log('key4:', key4);
  } else {
    console.log('可枚举原型链属性', key4);
  }
}
