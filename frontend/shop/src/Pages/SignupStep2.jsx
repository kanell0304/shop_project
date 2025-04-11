import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const SignupStep2 = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");
  const [detailAddress, setDetailAddress] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const isValidPassword = (pw) => {
    return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&]).{6,}$/.test(pw);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !password || !phone || !zipcode || !address || !detailAddress) {
      setError("필수 항목을 모두 입력해주세요!");
      return;
    }

    if (!isValidPassword(password)) {
      setError("비밀번호는 최소 6자 이상, 영문/숫자/특수문자를 포함해야 합니다.");
      return;
    }

    setError("");
    navigate("/signup/complete"); 
  };

  return (
    <>
      <Header/>

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
              <p style={{ color: "red", fontSize: "0.9em" }}>
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
            <button type="button" onClick={handleFindAddress}>
                  주소찾기
            </button>
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
              <p style={{ color: "red", marginTop: "12px" }}>{error}</p>
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
