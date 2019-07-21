/**
 * 使用IntersectionObserver 判断图片是否进入可视区域
 * Simple:
 * const lazyimg = Array.from(document.querySelectorAll('img[data-imgsrc]'))
 * const ob = getObServer()
 * lazyimg.forEach( img => {
 *   ob.observe(img)
 * })
 */
function getObServer() {
  return new IntersectionObserver( ioes => {
    ioes.forEach( ioe => {
      // target:
      // 当前正在观察的元素
      const elem = ioe.target
      // intersectionRatio: (返回值介于0-1之间)
      // 当前正在观察的元素有多少部分是可见的
      const interRatio = ioe.intersectionRatio
      // intersectionRatio 大于0 则表示元素可见
      if(interRatio>0&&interRatio<=1) {
        // 将img 元素中的src 替换为img 元素dataset 中的imgsrc
        elem.src = elem.dataset.imgsrc
        // onload 或者onerror 时停止监视对象
        elem.onload = elem.onerror = () => ob.unobserve(elem)
      }
    })
  })
}