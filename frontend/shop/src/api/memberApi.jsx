import axios from "axios";
import jwtAxios from "../util/jwtUtil";

const API_SERVER_HOST = import.meta.env.VITE_API_SERVER_HOST;
const host = `${API_SERVER_HOST}/api/member`;
console.log(host)
/** 로그인 */
export const loginPost = async (loginParam) => {
    console.log(loginParam);
  
    const res = await axios.post(`${host}/login`, {
        email: loginParam.email,
        password: loginParam.pw
      });

    return res.data;
  };


/**회원 정보 수정 */
export const modifyMember = async(member) => {
    // const res = await jwtAxios.put(`${host}/modify`, member);
    // return res.data;
  }
  