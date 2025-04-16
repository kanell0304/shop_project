import axios from "axios";
import jwtAxios from "../util/jwtUtil";

// const API_SERVER_HOST = import.meta.VITE_API_SERVER_HOST;
const API_SERVER_HOST = 'http://localhost:5173';

const host = `${API_SERVER_HOST}/api/member`;

/**로그인 */
export const loginPost = async(loginParam) =>{
    const header = {headers: {"Content-Type" : "x-www-urlencoded"}};
    const from = new FormDataEvent();
    from.append('username', loginParam.email);
    from.append('password', loginParam.pw);

    const res = await axios.post(`${host}/login`, form, header)

    return res.data;
}


/**회원 정보 수정 */
export const modifyMember = async(member) => {
    // const res = await jwtAxios.put(`${host}/modify`, member);
    // return res.data;
  }
  