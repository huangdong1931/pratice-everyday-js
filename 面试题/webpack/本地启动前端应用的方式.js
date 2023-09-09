// 本地启动前端应用的方式有哪些？

// 方法一、利用child_process.exec()
var c = require('child_process');
// 使用默认浏览器打开
c.exec('start http://www.baidu.com');
// 使用指定浏览器打开
c.exec('start firefox http://www.baidu.com');


// 方法二、利用open模块
var open = require('open');
// 使用默认浏览器打开
open('http://www.baidu.com');
// 使用指定浏览器打开
open('http://www.baidu.com', 'firefox');


// 方法三、利用opn模块
const opn = require('opn');
// 使用默认浏览器打开
opn('http://www.baidu.com');
// 使用指定浏览器打开
opn('http://www.baidu.com', {app: 'firefox'});