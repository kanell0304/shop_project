import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const SignupStep2 = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [zipcode, setZipcode] = useState();
  const [address, setAddress] = useState();
  const [detailAddress, setDetailAddress] = useState();
  const [error, setError] = useState();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !zipcode || !address || !detailAddress) {
      setError("필수 항목을 모두 입력해주세요!");
      return;
    }

    setError();
    navigate("/SignupComplete");
  }

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
              <label>우편번호</label>
              <input
                type="text"
                value={zipcode}
                onChange={(e) => setZipcode(e.target.value)}
                placeholder="우편번호"
              />
            </div>

            <div>
              <label>주소</label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="주소"
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

            {/* 에러 메시지 코드 입력해야함*/}

            <button type="submit">확인</button>
          </form>
        </div>
      </main>

      <Footer/>
    </>
  )
};

export default SignupStep2;
