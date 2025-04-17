// AppInit.jsx
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../slices/loginSlice'
import { getCookie } from '../util/cookieUtil'

const AppInit = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const member = getCookie("member");
    if (member) {
      try {
        const parsed = JSON.parse(member);
        dispatch(login(parsed)); // 로그인 상태 복원
      } catch (e) {
        console.warn("❌ 쿠키 파싱 오류:", e);
      }
    }
  }, []);

  return null; // 아무것도 렌더링하지 않음
}

export default AppInit;
