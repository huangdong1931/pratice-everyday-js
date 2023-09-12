/**
 * 为什么vue要用proxy取代defineproperty？
 * proxy 对整个对象做了一层拦截，而vue2是遍历对象上的每一个键 在通过Object.property 去劫持
 * proxy 和 Object.property 表现一致 只能对浅层对象做拦截，
 * 如果要深度拦截则需要通过get方法去递归 调用proxy，
 * 由于proxy是对整个对象做拦截，而不是一个一个去遍历所以vue3采用了proxy来优化双向数据绑定
 */