import React, { useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import MyPageSidebar from "../Components/MyPageSidebar";

const Profile = () => {
  const [formData, setFormData] = useState({
    email: "aaa@naver.com",
    password: "",
    name: "홍길동",
    phoneNum: "",
    zip_code: "",
    address: "",
    detailAddress: "",
    SNSAgree: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleWithDraw = () => {
    console.log("회원 탈퇴 요청");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("제출된 데이터:", formData);
  }

  return (
    <>
      <Header/>

      <div style={{ display: "flex" }}>
        <MyPageSidebar/>

        <div>
          <h2>개인정보</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>아이디(이메일)</label>
              <input type="email" name="email" value={formData.email} readOnly />
            </div>

            <div>
              <label>비밀번호</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="비밀번호를 입력해주세요."
              />
            </div>

            <div>
              <label>이름</label>
              <input type="text" name="name" value={formData.name} readOnly />
            </div>

            <div>
              <label>연락처</label>
              <input
                type="text"
                name="phoneNum"
                value={formData.phoneNum}
                onChange={handleChange}
                placeholder="010-0000-0000"
              />
            </div>

            <div>
              <label>주소</label>
              <div>
                <input
                  type="text"
                  name="zip_code"
                  value={formData.zip_code}
                  onChange={handleChange}
                  placeholder="우편번호"
                />
                <button type="button">주소 검색</button>
              </div>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="주소"
              />
              <input
                type="text"
                name="detailAddress"
                value={formData.detailAddress}
                onChange={handleChange}
                placeholder="상세주소"
              />
            </div>

            <div>
              <label>
                <input
                  type="checkbox"
                  name="SNSAgree"
                  checked={formData.SNSAgree}
                  onChange={handleChange}
                />
                SNS 수신 동의 (선택)
              </label>
            </div>

            <div>
              <p><strong>회원 탈퇴 시 다음 사항을 확인해주세요.</strong></p>
              <ul>
                <li>회원 탈퇴 시 1개월 동안 같은 이메일로는 가입이 불가합니다.</li>
                <li>
                  복구를 원하시면 고객문의 이메일로 1개월 이내에 복구 신청을 해주세요.
                  <span>
                    (단, 사이트 운영 정책이나 그에 준하는 위반 사항, 1개월 경과 시
                    <br /> 복구가 불가능합니다.)
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <button type="button" onClick={handleWithDraw}>
                회원 탈퇴
              </button>
            </div>

            <button type="submit">변경사항 저장</button>
          </form>
        </div>
      </div>

      <Footer/>
    </>
  )
}

export default Profile;
