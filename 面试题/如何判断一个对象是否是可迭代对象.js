// 如何测试一个对象是否是可迭代对象 ？
let str = 'asdasd';
if (typeof str[Symbol.iterator] === 'function') {
  console.log('字符串可迭代');
} else {
  console.log('字符串不可迭代');
}

let num = 123123;
if (typeof num[Symbol.iterator] === 'function') {
  console.log('数字可迭代');
} else {
  console.log('数字不可迭代');
}