let map = new Map()
console.log('map:', map.__proto__)

// 将list转换为map
let list = [
  {
    id: 1,
    value: 'map1'
  },
  {
    id: 2,
    value: 'map2'
  },
  {
    id: 3,
    value: 'map3'
  },
  {
    id: 4,
    value: 'map4'
  },
  {
    id: 5,
    value: 'map5'
  },
  {
    id: 3,
    value: 'map3'
  }
]
for (let key of list) {
  map.set(key.id, key)
}

// 将map转化为list
let c_list = [...map.values()]

// 获取map所有的健
let k_list = [...map.keys()]
// 总结：对象有唯一主键区分，Map可用于数组对象去重，由于Map的健是唯一性，相同的健将不会参与后续插入动作

// 判断数组中的主键，map是否有一个存在
console.log([1, 2, 3].some(it => map.has(it)))

// 判断数组中的主键，map是否全部存在
console.log([1, 2, 3].every(it => map.has(it)))
// 总结：在做某些list主键判断或者是去重操作的时候，采用Map会事半功倍

console.log(map.size)
console.log(map.has(1))

// 清空list
map.clear()
let e_list = [...map.values()]
