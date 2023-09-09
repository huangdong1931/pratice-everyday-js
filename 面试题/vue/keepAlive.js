// keep-alive原理
/**
 * keep-alive本身是一个抽象组件
 * 
 * created阶段 定义了 cached 和 keys 分别存需要缓存的组件 和 组件的名称
 * 
 * render阶段，会将keep-alive包裹的第一个元素的vnode实例
 * 如果不在缓存名单中直接返回vnode，否则从缓存中获取vnode，并且将vnode的keepAlive属性设为true
 * 讲该组件在缓存keys中的顺序放到最后，缓存keys如果超过最大值max则依次从keys的第一个元素移除，采用
 * 了 LRU 缓存淘汰算法
 * 
 * 在mounted阶段 实时监听 include 和 exclude 值，将 不在 include 中的组件全部从缓存对象中移除
 * 
 * 如果keep-alive组件被销毁则直接清空缓存中的所有组件
 * 
 * 由于第一次进来不是从缓存中获取，所以会触发created mounted 钩子，后续都不会触发需要注意
 * keep-alive 会暴露 activated deactivated两个钩子
 */