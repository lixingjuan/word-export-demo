export function getCookie(name) {
  var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
  return (arr = document.cookie.match(reg)) ? unescape(arr[2]) : null;
}

export function setCookie(name, cookie, expired = false) {
  var Days = 30;
  var exp = new Date();
  Days = Days * (expired ? -1 : 1);
  exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
  document.cookie = name + "=" + cookie + ";expires=" /*+ exp.toGMTString()*/ + ';path=/';
}


export function delCookie(name) {
  setCookie(name, '', true)
}