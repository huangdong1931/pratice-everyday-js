let obj = {
  a: 1,
  b: 2
}
obj.__proto__.c = 3;
obj.__proto__.d = function fn() {};
for (let key in obj) {
  if (obj.hasOwnProperty(key)) {
    console.log('key:', key);
  }
}
console.log(obj);

// for in 可以循环到可迭代对象 原型链上 可枚举的 属性和方法 for of不会循环可迭代对象上的原型链
// 可以通过 hasOwnProperty 来消除这一副作用 hasOwnProperty 表示对象自有属性（不包含继承的属性）是否具有指定的属性 返回布尔值
