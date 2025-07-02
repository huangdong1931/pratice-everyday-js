## 1. Node.js与JavaScript有什么不同？

## 2. Node.js的适用场景是什么？

## 3. 在什么情况下使用Node.js？

Node.js适用于处理高并发、I/O密集型、少量业务逻辑的场景

## 4. EventEmitter的工作原理是什么？

## 5. Node.js是单线程的，那么它是如何处理I/O操作的呢？

Node.js是单线程的，但是它使用了事件驱动和非阻塞I/O模型来处理I/O操作。这意味着Node.js可以在等待I/O操作（如读取文件、网络请求等）完成的同时执行其他任务。

Node.js使用libuv库来处理I/O操作。当发起一个I/O请求时，Node.js会立即返回，并开始执行其他代码，而不会等待I/O操作完成。当I/O操作完成时，libuv会发出一个事件，Node.js会回调相应的函数来处理结果。

这种事件驱动和非阻塞I/O模型使得Node.js能够处理大量并发I/O请求，而不需要为每个请求创建单独的线程，从而提高了性能和效率。

## 6. 什么是Node.js中的Stream，并且它在处理流式数据时有什么优势？

## 7. 如何在Node.js中处理错误和异常？

在Node.js中，您可以使用回调函数、事件、Promise和async/await等机制来处理错误和异常。
回调函数：在Node.js中使用回调函数时，第一个参数通常被用于错误处理。如果没有错误，这个参数会被设为null，否则它会包含错误信息。
事件：许多Node.js的内置模块（如net、http等）都会在出错时发出'error'事件。您可以监听这个事件来处理错误。
Promise：Promise有一个.catch()方法，可以用来处理可能在Promise链中出现的错误。
async/await：使用async/await时，可以使用try/catch结构来处理错误。

统一捕获错误、进行处理
在 Node.js 中，可以使用全局的 process.on 方法来统一捕获错误并进行处理。
可以使用 uncaughtException 事件和 unhandledRejection 事件来捕获未捕获的异常和未处理的 Promise 拒绝。
<script>
  // 捕获未捕获的异常  
  process.on('uncaughtException', (err) => {  
    console.error('Caught exception:', err);  
    // 在这里可以进行一些处理，例如记录日志、发送通知等  
  });
  
  // 捕获未处理的 Promise 拒绝  
  process.on('unhandledRejection', (reason, promise) => {  
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);  
    // 在这里可以进行一些处理，例如记录日志、发送通知等  
  });
</script>
当进程遇到未捕获的异常或未处理的 Promise 拒绝时，会触发相应的事件处理程序。在处理程序中，可以对错误进行统一处理，例如记录日志、发送通知等。
process.on 方法来统一捕获错误并不是一种最佳实践
在开发中，应该尽可能地避免使用全局错误处理，而是应该在每个可能抛出错误的代码块中使用 try...catch 语句来捕获并处理错误。全局错误处理只应该作为最后的防线，用来处理那些无法预料的错误。

## 8. 如何在Node.js中进行进程间通信（IPC）？

## 9. 如何在Node.js中创建和使用自定义模块？

## 10. Node.js中的Promise和Callback有什么区别，为什么应该使用Promise？

Callback是Node.js中较早的异步处理方式，它的基本思想是将一个函数作为参数传递给另一个函数，这个被传递的函数就是所谓的回调函数
Callback的主要问题是可能会导致“回调地狱”（callback hell），当有大量的异步操作时，代码会变得难以理解和维护。
Promise是ES6引入的一种新的异步处理方式，它使用了更现代的JavaScript的异步编程风格。
Promise的主要优点是它可以链式调用，并且可以使用async/await语法，使得异步代码看起来像同步代码一样易读易懂。

虽然Callback是Node.js中较早的异步处理方式，但Promise提供了更好的错误处理、更好的代码结构和支持async/await等优点，所以在大多数情况下，应该优先选择使用Promise。

## 11. Node.js如何进行测试和调试？

## 12. 在生产环境下，如何优化和增强Node.js应用的性能？

缓存：在应用程序中使用缓存可以极大地提高性能。可以使用内存缓存（如Redis）或硬盘缓存（如Memcached）来存储经常使用的数据，以减少数据库查询的次数。
集群：使用Node.js集群模块可以将应用程序部署到多个CPU核心上，以提高应用程序的性能和并发能力。
负载均衡：使用负载均衡器可以将请求分发到多个服务器实例上，以提高应用程序的可扩展性和性能。
优化数据库访问：数据库查询通常是应用程序中最耗时的操作之一。可以通过使用索引、缓存查询结果、批量操作等方式来优化数据库访问。
压缩响应数据：使用Gzip等压缩算法对响应数据进行压缩，以减少传输的数据量，提高应用程序的性能。
代码优化：对代码进行优化可以提高应用程序的性能。例如，减少不必要的全局变量的使用、避免阻塞操作、使用异步编程等。

## 13. Node.js在哪些方面比其他服务器端JavaScript运行环境（例如，浏览器）更优秀？

## 14. 如果Node.js被广泛使用，为什么它没有被更广泛地用于web前端开发？

## 15. Node.js对于构建大型、复杂的应用程序有何优势和局限？

优势：
异步和非阻塞I/O模型：Node.js使用事件驱动和非阻塞I/O模型，可以处理大量并发连接，而无需为每个连接创建一个新的线程或进程。这种模型使Node.js在处理高并发请求时表现出色。
单线程架构：Node.js的单线程架构使其在多核系统上可以非常高效地使用资源，而且没有线程同步和通信的开销。
JavaScript无处不在：Node.js使用JavaScript，这意味着开发人员可以在客户端和服务器端使用同一种语言，简化代码复用和开发流程。
丰富的包生态系统：Node.js有一个丰富的包生态系统npm，你可以找到大量的库和框架来快速开发应用。

局限：
CPU密集型任务：由于Node.js是单线程的，因此在处理CPU密集型任务时可能会受到限制。尽管有像Worker Threads这样的解决方案，但是它们并不能完全解决这个问题。
内存使用：由于Node.js使用V8引擎，这可能会导致较高的内存使用。尽管V8引擎在内存管理上做了很多优化，但是在处理大型、复杂的应用程序时，这可能仍然是一个问题。

## 16. Node.js如何处理数据库操作？

Node.js处理数据库操作主要通过使用第三方模块来实现，这些模块提供了与各种数据库交互的API

## 17. Node.js中的哪些库或框架可以帮助开发人员更好地处理和操作HTTP请求和响应？

## 18. 如何优化Node.js应用的启动时间？

## 19. express 中有哪些中间件？

# 中间件分类
中间件一定有next方法且必须放在最后，没有next方法则是路由，中间件一般在路由之前进行注册
1. 应用级中间件：绑定到 app 实例上的中间件叫应用级的中间件
<script>
  const express = require('express');
  const app = express();
  app.use((req, res, next) => { next() });
  app.get((req, res, next) => { next() });
  app.post((req, res, next) => { next() });
</script>
2. 路由级中间件 绑定到 express.Router() 实例上的中间件叫路由级的中间件
<script>
  const express = require('express');
  const router = express.Router();
  router.use((req, res, next) => { next() });
</script>
3. 错误级中间件
作用：捕获整个项目中发生的异常错误，防止项目异常崩溃
错误中间件必须包含四个参数且顺序为(err, req, res, next)
错误级别的中间件注册在路由之后，出现错误则会被捕获执行，用来捕获项目异常，防止崩溃
<script>
  app.get('/', (req, res) => {
    throw new Error('服务异常');
    res.send('hello');
  })

  app.use((err, req, res, next) => {
    console.log('error:', err.message);
    res.send('服务器异常', err.message)
  })
</script>
4. 内置中间件
<script>
  // 静态资源托管 可以很方便的创建一个静态资源服务器 访问多个静态资源目录则多次调用 express.static() 即可
  express.static('public');
  // 添加前缀
  app.use('/pubilc',  express.static('public'))
  // 解析JSON格式请求体数据
  express.json();
  // 解析url-encoded格式请求体数据
  express.urlencoded();

  // usage
  // 配置解析 application/json 格式数据的中间件，默认情况下，如果不配置此中间件则 req.body 等于 undefined
  app.use(express.json());
  // 配置解析 application/x-www-form-urlencoded 格式数据的内置中间件
  app.use(express.urlencoded({ extended: false }));
</script>
5. 第三方中间件