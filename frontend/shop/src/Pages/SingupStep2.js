import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const SignupStep2 = () => {
  const [name, setName] = useState(); // 이름
  const [email, setEmail] = useState(); // 이메일
  const [password, setPassword] = useState(); // 비밀번호
  const [phone, setPhone] = useState(); // 연락처
  const [zipcode, setZipcode] = useState(); // 우편번호
  const [address, setAddress] = useState(); // 기본주소
  const [detailAddress, setDetailAddress] = useState(); // 상세주소
  const [error, setError] = useState(); // 에러 메시지

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !password || !phone || !zipcode || !address || !detailAddress) {
      setError("필수 항목을 모두 입력해주세요!");
      return;
    }

    setError(); // 에러 메시지 초기화
    navigate("/SignupComplete");
  };

  return (
    <>
      <Header />

      <main>
        <div className="signup-box">
          <h1>회원가입 <span>(2/2)</span></h1>

          <form onSubmit={handleSubmit}>
            <div>
              <label>이름</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="이름을 입력해주세요"
              />
            </div>

            <div>
              <label>이메일</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="이메일을 입력해주세요"
              />
            </div>

            <div>
              <label>비밀번호</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="비밀번호를 입력해주세요"
              />
              <p style={{ color: "red"}}>
                * 비밀번호는 최소 6자 이상, 영문, 숫자, 특수문자를 포함해야 합니다.
              </p>
            </div>

            <div>
              <label>연락처</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="연락처를 입력해주세요"
              />
            </div>

            <div>
              <label>우편번호</label>
              <input
                type="text"
                value={zipcode}
                onChange={(e) => setZipcode(e.target.value)}
                placeholder="우편번호"
              />
            </div>

            <div>
              <label>기본주소</label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="기본 주소"
              />
            </div>

            <div>
              <label>상세 주소</label>
              <input
                type="text"
                value={detailAddress}
                onChange={(e) => setDetailAddress(e.target.value)}
                placeholder="상세 주소"
              />
            </div>

            {error && (
              <p style={{ color: "red", margin: "8px" }}>{error}</p>
            )}

            <button type="submit">확인</button>
          </form>
        </div>
      </main>

      <Footer/>
    </>
  )
}
export default SignupStep2;
