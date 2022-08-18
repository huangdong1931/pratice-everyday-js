/**
 * Refelct 是一个内置对象 该内置对象上挂载了一些静态方法
 * 总结：类似一个全局的js对象 该对象上有一些静态方法 一般情况下是对对象做一些操作使用 
 * 虽然可以通过其他的形式直接实现这些内部的方法 
 * 但以前的实现多数情况是命令式的编程实现
 * 为了方便函数式编程 使用Refelct会让代码结构更加易懂和清晰
 */

let obj = {
  name: 'zs',
  age: '18'
}
/**
 * Reflect.has(target, propertyKey)
 * @param target 目标对象
 * @param propertyKey 属性名，需要检查目标对象是否存在此属性
 * @return 一个 Boolean 类型的对象指示是否存在此属性
 * 作用：类似 in 操作符 用于检查一个对象是否拥有某个属性
 */
console.log(Reflect.has(obj, 'name'))
console.log(Reflect.has(obj, 'fn'))

/**
 * Reflect.get(target, propertyKey)
 * @param target 需要取值的目标对象
 * @param propertyKey 需要获取的值的键值
 * @param receiver 如果target对象中指定了getter，receiver则为getter调用时的this值
 * @return 属性的值
 * 作用：方法允许你从一个对象中取属性值。就如同属性访问器 语法，但却是通过函数调用来实现
 */
console.log(Reflect.get(obj, 'name'))
console.log(Reflect.get(obj, 'age'))
console.log(Reflect.get(obj, 'fn'))

/**
 * Reflect.set(target, propertyKey, value, receiver)
 * @param target 设置属性的目标对象
 * @param propertyKey 设置的属性的名称
 * @param value 设置的值
 * @param receiver 如果遇到 setter，receiver则为setter调用时的this值
 * @return 返回一个 Boolean 值表明是否成功设置属性
 * 作用：在一个对象上设置一个属性
 */
 Reflect.set(obj, 'sex', '男')
console.log('obj:', obj, Reflect.set(obj, 'sex', '男'))