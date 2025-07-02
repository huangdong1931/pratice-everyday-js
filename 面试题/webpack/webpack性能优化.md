## webpack性能优化

### 1. 如何分析打包后的资源情况那些需要优化
1》speed-measure-webpack-plugin 对 loader、plugin 打包分析
2》webpack 内置的 stats 对 打包的资源分析
3》webpack-bundle-analyze 对资源进行可视化分析

### 2. 对打包的速度和资源进行优化

1. 资源压缩（html、css、js、图片等）、tree shaking、Gzip
2. 代码分离 将首页无关的依赖进行分离到不同的bundle中，之后我们可以按需加载，或者并行加载这些文件，控制资源加载优先级，提供代码的加载性能
代码分离主要有三种方案实现：
一、配置多入口：手动进行分离，缺点是存在交叉引入模块的情况，该模块会重复打包，可以通过配置共享来解决 
entry 中 为每一个入口配置 dependOn：“share” 然后在 entry 中配置 shared：【“axios”】
二、防止重复：
1》EntryDependenciesPlugin插件可以用于跟踪和记录模块的依赖关系，避免重复打包相同的模块
2》SplitChunksPlugin插件可以将公共的代码分离出来，生成单独的bundle文件，避免重复打包相同的代码
两者都是通过 optimize 属性进行配置
3. 动态导入
1》通过es模块的 import() 
2》提供webpack内置的 require.ensure()



