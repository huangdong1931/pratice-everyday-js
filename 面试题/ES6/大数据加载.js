// 需要大量执行的任务
const task = (el, text, call) => {
  let ele = document.createElement(el);
  ele.innerText = text;
  ele.id = el;
  document.body.appendChild(ele);
};

// 创建按钮
const createBtn = task('button', '添加10000条元素');
// 监听按钮
let btn = document.getElementById('button');
btn.addEventListener('click', () => {
  chulk(task)
  // loop(task)
});

// 循环处理
const loop = (task) => {
  let i = 0
  while (i <= 700000) {
    task('div', i)
    i++
  }
}

// 分片处理
const chulk = (task) => {
  let i = 0;
  function _run() {
    requestIdleCallback((idle => {
      while(idle.timeRemaining() > 0 && i <= 750000) {
        task('div', i)
        i++
      }
      _run();
    }));
  };
  _run();
};


