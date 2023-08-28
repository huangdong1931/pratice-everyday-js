let arr = [1, 3, 5, 7]
let arr1 = [
  {
    id: 1,
    value: 'set1'
  },
  {
    id: 2,
    value: 'set2'
  }
]
let set = new Set(arr)
console.log('set:', set.__proto__)
// 总结：Map构造函数接收一个二维数组并且是键值对的数组作为初始值 而 Set构造函数可以接受一个数组（或者具有 iterable 接口的其他数据结构）作为参数，用来初始化

// 思考Q：什么样子的数据结构具备 iterable 接口？ A：该数据结构的原型上是否存在 Symbol(Symbol.iterator) 这个属性

// Set 不具备访问的属性 而 Map具备访问的属性，Set 添加成员是通过add方法 而 Map是通过set方法，其他的属性方法和Map类似
set.add(9)






