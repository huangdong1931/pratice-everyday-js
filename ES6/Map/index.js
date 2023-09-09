let map1 = new Map();
let list = [{ id: 1, value: 'map1' }, { id: 2, value: 'map2' }];
for (let key of list) {
  map1.set(key.id, key)
}

// 1. Map 采用0值相等，+0 和 -0、NaN 和 NaN 是相等的，Map 的set方法返回的是一个Map 可以链式调用
let map2 = new Map();
map2.set(+0, 0).set(-0, 0).set(NaN, NaN).set(NaN, NaN)
console.log('map2:', map2);

// 2. 利用 Map 键的唯一性特性 可以轻松对对象相同属性（某些需要去重的场景下）进行去重
let obj = { a: 1, a: 1, b: 2, c: 3 };
let map3 = new Map();
for (let key in obj) {
  map3.set(key, obj[key]);
}
console.log('map3:', map3);

// 3. Map 获取键数组 值数组
let map4 = new Map();
for (let key of list) {
  map4.set(key.id, key)
}
console.log('map4:', [...map4.keys()]);
console.log('map4:', [...map4.values()]);

// 4. Map 性能高
// 规范要求 map 实现“平均访问时间与集合中的元素数量呈次线性关系”。
// 因此，它可以在内部表示为哈希表（使用 O(1) 查找）、搜索树（使用 O(log(N)) 查找）或任何其他数据结构，只要复杂度小于 O(N)。


