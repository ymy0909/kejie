/**
 *
 * 用于与active端交互的
 * @param {any} callback
 * @returns
 */
export const initBridge = callback => {
  let isiOS = /(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent) && /(mk)/i.test(navigator.userAgent)
  let isAndroid = /(Android)/i.test(navigator.userAgent) && /(mk)/i.test(navigator.userAgent)
  console.log(isiOS, 'isiOS')
  /* eslint no-undef: 0 */
  if (isiOS || isAndroid) {
    if (window.WebViewJavascriptBridge) {
      return callback(WebViewJavascriptBridge)
    }
    if (window.WVJBCallbacks) {
      return window.WVJBCallbacks.push(callback)
    }
    window.WVJBCallbacks = [callback]
    var WVJBIframe = document.createElement('iframe')
    WVJBIframe.style.display = 'none'
    WVJBIframe.src = 'wvjbscheme://__BRIDGE_LOADED__'
    document.documentElement.appendChild(WVJBIframe)
    setTimeout(function () {
      document.documentElement.removeChild(WVJBIframe)
    }, 0)
  } else {
    callback()
  }
}
