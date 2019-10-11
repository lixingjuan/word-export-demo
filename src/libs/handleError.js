import { message } from 'antd';
import debounce from './debounce';
/*function _handleCookieExpired(){
    auth.signout(() => {
      console.log('登出！')
    })
}*/

// const handleCookieExpired = debounce(_handleCookieExpired, 500);

export default function handleError(e){
  if (e.code && e.code === 1003) {
    // handleCookieExpired()
    throw e;
  }
  throw e;
}