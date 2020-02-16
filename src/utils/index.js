/**
 * @param {Function} func
 * @param {number} wait
 * @param {boolean} immediate
 * @return {*}
 */
/**
 * @module index
 * @author: ymy
 * @description:
 * @since: 创建时间  2019-12-14 17:47:54
 */
export function _debounce (fn, delay) {
  delay = delay || 300
  let timer
  return function () {
    const ctx = this
    const args = arguments
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      timer = null
      fn.apply(ctx, args)
    }, delay)
  }
}
