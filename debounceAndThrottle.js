/**
 * 防抖
 * 在每次触发时设定定时器，若在定时器期间内再次触发，则重新计时
 * @param {Function} fn 要执行的函数
 * @param {Number} delay 延时
 * @return {Function} 防抖后的函数
 * Sample:
 * function search() {}
 * input.onkeyup = debounce(search, 500)
 */
function debounce(fn, delay = 500) {
  // 设定一个计时器
  let timer = null
  return function() {
      // 如果计时器存在 (不为null 或 undefined)
      if(timer) {
          // 清除计时器
          clearTimeout(timer)
          // 重新设定计时任务
          timer = setTimeout(fn, delay)
      } else {
          // 设定计时任务
          timer = setTimeout(fn, delay)
      }
  }
}

/**
 * 节流
 * 设定一个触发间隔，若多次触发，则间隔时间内的触发不会触发函数
 * @param {Function} fn 要执行的函数
 * @param {Number} delay 执行间隔
 * @return {Function} 节流后的函数
 * Sample:
 * function observerImg() {}
 * window.onscroll = throttle(observerImg, 500)
 */
function throttle(fn, delay = 500) {
  // 设定一个标识, 标记函数是否有效
  let valid = true
  return function() {
      // 如果有效
      if(valid) {
        // 将函数设为无效
        valid = false
        // 执行动作
        fn()
        // 一定时间后将函数恢复为有效
        setTimeout(() => {
            valid = true
        }, delay)
      }
  }
}