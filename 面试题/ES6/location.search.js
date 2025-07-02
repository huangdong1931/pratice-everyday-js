/**
 * location.search 用于获取url中的?后面部分的查询字符串包含？
 * https://www.baidu.com/?name=123
 * location.search // ?name=123
 * 
 * 注意：前端路由 url 包含两种形式
 * hash、history
 * 其中 hash # 后面的部分被称之为锚点 不会被服务器解析 并且 location.search 只能匹配 # 前面部分的查询字符串 后面的无法匹配到
 * 而 history 中正常匹配
 */