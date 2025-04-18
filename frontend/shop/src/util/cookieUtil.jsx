import { Cookies } from "react-cookie";

const cookies = new Cookies();

/**쿠키세팅 */
// export const setCookie = (name, value, days) =>{
//     const expires = new Date();
//     expires.setUTCDate(expires.getUTCDate() + days ); // 보관기한
//     return cookies.set(name, value, {path:'/', expires:expires});
// }


export const setCookie = (name, value, days) => {
    const expires = new Date();
    expires.setUTCDate(expires.getUTCDate() + days);
  
    // value가 객체일 경우 문자열로 변환
    const cookieValue = typeof value === 'object' ? JSON.stringify(value) : value;
  
    return cookies.set(name, cookieValue, { path: '/', expires });
  };

/**쿠기 가져오기 */
export const getCookie = (name) => {
    return cookies.get(name)
}

/**쿠키 삭제 */
export const removeCookie = (name , path="/") => {
    cookies.remove(name, {path} )
}