import axios from "axios";
// const API_SERVER_HOST = import.meta.VITE_API_SERVER_HOST;
// const rest_api_key = import.meta.VITE_REST_API_KEY;
const API_SERVER_HOST = 'http://localhost:5173';
const rest_api_key = '4300aa615419540cfb71ca27b1f2edd8';
const redirect_uri =`${API_SERVER_HOST}/member/kakao` // 인증처리 경로
const auth_code_path = `https://kauth.kakao.com/oauth/authorize`; // 인가 코드를 받기 위한 경로
const access_token_url = `https://kauth.kakao.com/oauth/token`; // 토큰 추가

export const getKakaoLoginLink = ()=>{
    const kakaoURL = `${auth_code_path}?client_id=${rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`
    return kakaoURL;
}

export const getAccessToken = async(authCode) => {
    const header = {
        headers : {
            "Content-Type" : "application/x-www-form-urlencoded"
        }
    }
    const params = {
        grant_type : "authorization_code",
        client_id : rest_api_key,
        redirect_uri : redirect_uri,
        code : authCode
    }
    const res = await axios.post(access_token_url);
    const accessToken = res.data.access_token;
    return accessToken;
}

export const getMemberWithAccessToken = async(accessToken) => {
    const res = await axios.get(`${API_SERVER_HOST}/api/member/kakao?accessToken=${accessToken}`)
    console.log(res.data);
    return res.data;
}