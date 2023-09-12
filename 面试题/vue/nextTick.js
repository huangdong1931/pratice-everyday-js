/**
 * nextTick()原理
 * 
 * 作用：在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM。
 * 它会判断当前环境支持api的情况，执行顺序依次是 promise > MutationObserver > setImmediate > setTimeout
 */


// if (typeof Promise !== 'undefined' && isNative(Promise)) {
//   const p = Promise.resolve()
//   timerFunc = () => {
//     p.then(flushCallbacks)
//     if (isIOS) setTimeout(noop)
//   }
//   isUsingMicroTask = true
// } else if (!isIE && typeof MutationObserver !== 'undefined' && (
//   isNative(MutationObserver) || MutationObserver.toString() === '[object MutationObserverConstructor]'
// )) {
//   let counter = 1
//   const observer = new MutationObserver(flushCallbacks)
//   const textNode = document.createTextNode(String(counter))
//   observer.observe(textNode, {
//     characterData: true
//   })
//   timerFunc = () => {
//     counter = (counter + 1) % 2
//     textNode.data = String(counter)
//   }
//   isUsingMicroTask = true
// } else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
//   timerFunc = () => {
//     setImmediate(flushCallbacks)
//   }
// } else {
//   timerFunc = () => {
//     setTimeout(flushCallbacks, 0)
//   }
// }