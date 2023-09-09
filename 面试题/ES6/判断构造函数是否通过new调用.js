// es5中如何判断一个构造函数是否是通过 new 关键字来调用的 ？

// 1 通过 设置 一个模式 'use strict', this指向为 undefined 这样子为构造函数设置属性方法 会直接报错
function Test1(name) {
  'use strict';
  this.name = name;
};
let fn1 = Test2();
console.log(fn1);

// 2 通过 new.target 属性来 判断
function Test2(name) {
  if (new.target !== Test2) return new Error('请用 new 关键字来调用');
  this.name = name;
}
let fn2 = Test2();
console.log(fn2);

// 3 通过 instance of 判断 this 指向 是否指向当前构造函数实例
function Test3(name) {
  if (!(this instanceof Test3)) return new Error('请用 new 关键字来调用');
  this.name = name;
};
let fn3 = Test3();
console.log(fn3);