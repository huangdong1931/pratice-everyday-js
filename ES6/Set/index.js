let arr1 = [1, 2, 4, 5];
let arr2 = [1, 3, 5, 7];
let set1 = new Set(arr1);
let set2 = new Set(arr2);

// 获取交集
console.log(new Set([...set1].filter(c => set2.has(c))));
// 获取差集
console.log(new Set([...set1].filter(c => !set2.has(c))));
// 获取并集
console.log(new Set([...set1, ...set2]));

// 让异步函数按指定顺序执行
let fn1 = () => {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve(1);
      }, 300)
    } catch (e) {
      reject(e)
    }
  })
};
let fn2 = () => {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve(2);
      }, 200)
    } catch (e) {
      reject(e)
    }
  })
};
let fn3 = () => {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve(3);
      }, 100)
    } catch (e) {
      reject(e)
    }
  })
};
let set3 = new Set();
set3.add(fn1).add(fn2).add(fn3)
const run = async () => {
  for (let item of [...set3]) {
    console.log(await item());
  }
}
run();







