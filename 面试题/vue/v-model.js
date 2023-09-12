/**
 * v-model原理
 * v-model绑定其他的表单类型：textarea、checkbox、radio、select等属性
 * v-model 本质上是一个语法糖，其等价于在一个元素上通过v-bind:valaue="value" v-on:input=(e) => { e.target.value }
 * 单向数据流：总结起来其实也就8个字：数据向下，事件向上
 */