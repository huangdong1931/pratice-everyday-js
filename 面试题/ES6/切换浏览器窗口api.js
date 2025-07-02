document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    console.log('失活');
  } else {
    console.log('可见');
  }
})