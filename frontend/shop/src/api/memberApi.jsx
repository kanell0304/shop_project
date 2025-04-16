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

/** 회원 가입 */
export const memberRegister = async (registerParam) => {
  console.log('🚀 회원가입 요청 데이터:', registerParam);

  try {
    const res = await axios.post(`${host}/register`, registerParam, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    console.log('✅ 회원가입 성공:', res.data);
    return res.data;
  } catch (error) {
    console.error('❌ 회원가입 실패:', error.response?.data || error.message);
    throw error; // 호출한 쪽에서 에러 핸들링 가능하도록
  }
};


/** 회원 이메일로 검색 */
export const memberEmailSearch = async (email) => {
  console.log('조회하려는 이메일:', email);
  try {
    const res = await axios.get(`${host}/get/${encodeURIComponent(email)}`);
    return false; // 이미 있음 → 사용 불가
  } catch (error) {
    if (error.response && error.response.status === 404) {
      console.log("✅ 해당 이메일은 DB에 없음");
      return true; // 없음 → 사용 가능
    } else {
      throw error;
    }
  }
};

/** 회원 정보 수정 */
export const modifyMember = async(member) => {
    // const res = await jwtAxios.put(`${host}/modify`, member);
    // return res.data;
  }
  