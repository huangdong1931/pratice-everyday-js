// 1. 隐式转换
// const obj = {
//   toString() {
//     console.log('toString 被调用了');
//     return 2
//   }
// }
// console.log(obj + 'abc');

// 2. 柯里化
// --- 前 -----
// const fn = (...args) => {
//   return args.reduce((a, c) => a + c, 0)
// }
// console.log(fn(1, 2, 3, 4, 5));


// --- 后 -----
// const fn = (a) => {
//   return fn1 = (b) => {
//     return fn2 = (c) => {
//       return fn3 = (d) => {
//         return fn4 = (e) => {
//           return a + b + c + d + e
//         }
//       }
//     }
//   }
// }
// console.log(fn(1)(2)(3)(4)(5));

// 3. 
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args)
    } else {
      return function(...args2) {
        return curried.apply(this, args.concat(args2))
      }
    }
  }
}

function sum(a, b, c, d) {
  return a + b + c + d
}
const curriedSum = curry(sum)

console.log(curriedSum(1)(2)(3)(4));








 



