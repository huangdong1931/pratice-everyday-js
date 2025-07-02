/**
 * 为什么分模块，如何分模块，公共文件处理
 * 
 * 在实际项目开发中，如果项目不是很庞大是没有必要进行分包的，但是当我们的项目很庞大，模块很多的时候，如果还是全部打包到一个bundle中
 * 在开发中我们修改的是某个模块的东西，不依赖其他模块但是打包的时候却将整个项目打包，构建时间会变长，所以此时就需要分包了
 * 
 * 1. 配置多入口
 * webpack配置中 entry 中配置多个入口，相应的将html-webpack-plugin 进行多次配置，并且需要配置 chunks 属性, 它可以指定的html文件载入需要的 bundle
 * 公共文件处理：多个入口对公共模块引入
 *  
 * 2. 动态导入模块（ES + 魔法注释）
 */

    // posts模块
    export default () => {
      const posts = document.createElement('div')
      posts.className = 'posts'
      posts.innerHTML = '<h2>Posts</h2>'
      return posts
    }

    // optimization: {
    //   splitChunks: {
    //       chunks: 'all',
    //       name: 'common'
    //   }
    // }

    // 动态导入模块 ES
    const render = () => {
      const hash = window.location.hash || '#posts'
      const mainElement = document.querySelector('.main')
      mainElement.innerHTML = ''
    
      if (hash === '#posts') {
        import(/* webpackChunkName: 'components' */'./posts/posts').then(({ default: posts }) => {
          mainElement.appendChild(posts())
        })
      } else if (hash === '#album') {
        import(/* webpackChunkName: 'components' */'./album/album').then(({ default: album }) => {
          mainElement.appendChild(album())
        })
      }
    }

    render()