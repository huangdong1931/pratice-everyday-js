// vue 中的内置组件有哪些？
/**
 * vue中有5个内置组件分别是：component transition transition-group keep-alive slot
 * 其中 transition 和 keep-alive 不会额外渲染dom元素，也不会出现在组件层级中
 * component 和 slot 都是作为组件模板被渲染的组件替换
 * transition-group 会额外渲染dom元素，默认渲染成span标签，可通过tag属性来指定渲染的元素
 * 
 * keep-alive 只能作用在一个直属元素身上，如果是多个元素只会渲染第一个元素,
 * 被keep-alive包裹的组件切换时会触发两个钩子函数，activated 和 deactivated
 * 
 * transition 和 transition-group 区别
 * transition 不会渲染真实dom元素 transition-group会渲染真实dom元素，默认span 可以通过tag属性指定渲染的标签
 * transition 不需要指定key元素，transition-group必须指定key元素，否则动画不生效
 */
