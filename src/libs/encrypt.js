import md5 from 'blueimp-md5';
export default function encrypt(v){
  return md5(v)
}