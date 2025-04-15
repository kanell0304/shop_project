import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignupStep1 = () => {

  const [AllAgree, setAllAgree] = useState(false);
  const [Terms, setTerms] = useState(false);
  const [Agreement, setAgreement] = useState(false);
  const [Over14, setOver14] = useState(false);
  const [SMS, setSMS] = useState(false);
  const [error, setError] = useState();
  const navigate = useNavigate();

  const handleAllAgree = (e) => {
    const checked = e.target.checked;
    setAllAgree(checked);
    setTerms(checked);
    setAgreement(checked);
    setOver14(checked);
    setSMS(checked);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("폼 제출");
    if (!Terms || !Agreement || !Over14) {
      setError("필수 항목을 확인해주세요!");
      return;
    }
    setError("");
    navigate("/signup/step2");
  }

  return (
    <>

      <main>
        <div className="signup-box">
          <h1>회원가입 <span>(1/2)</span></h1>

          <form onSubmit={handleSubmit}>
            {/* 전체 동의 */}
            <div>
              <label>
                <input
                  type="checkbox"
                  checked={AllAgree}
                  onChange={handleAllAgree}
                />
                이용약관 전체 동의
              </label>
            </div>

            {/* 쇼핑몰 이용약관 동의 */}
            <div>
              <label>
                <input
                  type="checkbox"
                  checked={Terms}
                  onChange={(e) => setTerms(e.target.checked)}
                />
                <strong>[필수]</strong> 쇼핑몰 이용약관 동의
              </label>
              <textarea readOnly placeholder="쇼핑몰 이용약관 내용" />
            </div>

            {/* 개인정보 수집 및 이용 동의 */}
            <div>
              <label>
                <input
                  type="checkbox"
                  checked={Agreement}
                  onChange={(e) => setAgreement(e.target.checked)}
                />
                <strong>[필수]</strong> 개인정보 수집 및 이용 동의
              </label>
              <textarea readOnly placeholder="개인정보 수집 및 이용 내용" />
            </div>

            {/* 만 14세 이상 */}
            <div>
              <label>
                <input
                  type="checkbox"
                  checked={Over14}
                  onChange={(e) => setOver14(e.target.checked)}
                />
                <strong>[필수]</strong> 만 14세 이상
              </label>
            </div>

            {/* 선택 동의: SMS */}
            <div>
              <label>
                <input
                  type="checkbox"
                  checked={SMS}
                  onChange={(e) => setSMS(e.target.checked)}
                />
                <strong>[선택]</strong> SMS 수신 동의
              </label>
            </div>

            {/* 에러 메시지 출력 */}
            {error && (
              <p style={{ color: "red", marginTop: "12px" }}>{error}</p>
            )}

            <button type="submit">다음</button>
          </form>
        </div>
      </main>

    </>
  )
}

export default SignupStep1;
