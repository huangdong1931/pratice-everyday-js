var o = (function() {
  var obj = {
    a: 1,
    b: 2
  }
  return {
    get: function(k) {
      return obj[k]
    }
  }
})()
// 如何在不修改以上代码的情况下更改obj

// 通过采用 Object.defineProperty 来修改整个Object的原型链来解决
Object.defineProperty(Object.prototype, 'c', {
  get: function() {
    return this
  }
})
console.log("o:", o.get('c'))
var aa = o.get('c')
aa.a = 'xxxxxx'
aa.b = '111111'
console.log("o:", o.get('c'))
// 如果防止原型链来破坏这种行为呢？
// 1、通过将内部对象的原型清空 obj.setPropertyOf(obj.prototype, null)
// 2、通过在return结构中的返回做一层判断 如果对象存在该属性则返回，不存在则返回 undefined