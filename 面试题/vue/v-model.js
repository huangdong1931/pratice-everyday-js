/**
 * v-model原理
 * 
 * 它提供了一种简洁的方式来实现双向数据绑定，本质上它是一个语法糖，结合了 v-bind 和 v-on 两个指令的功能
 * 
 * 实现一个自定义v-model组件思路：v-model绑定其他的表单类型：textarea、checkbox、radio、select等属性
 * 父组件通过v-model绑定一个变量
 * 子组件 props 中定义一个 value 接收父组件传递的值
 * 子组件模板中通过v-bind绑定props中的value属性然后通过v-on指令监听value值的变化，并将变化的值传递给父组件，最后完成数据视图的更新
 * 
 * 单向数据流：总结起来其实也就8个字：数据向下，事件向上
 * 
 */