/**
 * 数据双向绑定原理
 * 
 * 1. 数据双向绑定原理是通过：数据劫持 + 观察者模式（发布者、订阅者模式）来实现
 * 
 * 2. 在new Vue初始化的的过程中，通过 observer 函数递归遍历所有数据，然后通过 Object.defineProperty() 为每个属性创建 getter 和 setter 函数
 * getter函数用于依赖收集，setter函数用于触发数据更新和通知视图改变
 * 
 * 除了计算属性是在beforeMount之后mount之前完成的，其他的依赖是在beforeCreate之后created之前完成
 * 
 * 当通过vm.$set动态添加响应式数据时，会触发 defineReactive 函数，对新属性进行劫持完成依赖收集和数据、视图更新操作
 */
