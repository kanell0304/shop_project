import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";


const LoginPage = () => {
  return (
    <>
      <Header/>

      <main>
        <div className="login-box">
          
          {/* 로그인 문구 */}
          <h1>SIMPLICITY SPEAKS</h1>
          <p>WHAT YOU WEAR SAYS MORE THAN WORDS</p>

          {/* 로그인 입력 폼 */}
          <form>
            {/* 이메일 입력 */}
            <div>
              <input type="email" placeholder="E-MAIL ADDRESS" />
            </div>

            {/* 비밀번호 입력 */}
            <div>
              <input type="password" placeholder="PASSWORD" />
            </div>

            {/* 로그인 버튼 */}
            <div>
              <button type="submit">LOGIN</button>
            </div>

            <div>OR</div>

            {/* 카카오 로그인 버튼 */}
            <div>
              <button type="button">KAKAO LOGIN</button>
            </div>
          </form>

          {/* 링크 섹션 (회원가입 / 이메일 찾기 / 비밀번호 재설정) */}
          <div>
            <div>
              <a href="/signup">CREATE ACCOUNT</a>
            </div>

            <div>
              FORGOT YOUR <a href="/Find-email">E-MAIL?</a>
            </div>

            <div>
              FORGOT YOUR <a href="/Reset-password">PASSWORD?</a>
            </div>
          </div>
        </div>
      </main>

      <Footer/>
    </>
  )
}

export default LoginPage;
