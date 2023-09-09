/**
 * router-view
 */

// 1. <router-view> 组件是一个 functional 组件，渲染路径匹配到的视图组件。
// 2. <router-view> 渲染的组件还可以内嵌自己的 <router-view>，根据嵌套路径，渲染嵌套组件。
// 3. 在 vue.use(vueRouter) 的时候，全局注册的