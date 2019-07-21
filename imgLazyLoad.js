/**
 * 使用IntersectionObserver 判断图片是否进入可视区域
 * 进入可视区域, 从dataset 中拿到对应的imgsrc 替换原有的src
 * Simple:
 * const lazyimg = Array.from(document.querySelectorAll('img[data-imgsrc]'))
 * const ob = getgetObServer()
 * lazyimg.forEach( img => {
 *   ob.observe(img)
 * })
 */
function getObServer() {
  const obServer = new IntersectionObserver( ioes => {
    ioes.forEach( ioe => {
      const elem = ioe.target
      const interRatio = ioe.intersectionRatio
      if(interRatio>0&&interRatio<1) {
        elem.src = elem.dataset.imgsrc
        elem.onload = elem.onerror = () => ob.unobserve(elem)
      }
    })
  })
  return obServer
}