import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const isValidPassword = (pw) => {
    return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&]).{6,}$/.test(pw);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("이메일과 비밀번호를 모두 입력해주세요.");
      return;
    }

    if (!isValidPassword(password)) {
      setError("비밀번호는 최소 6자 이상, 영문/숫자/특수문자를 포함해야 합니다.");
      return;
    }

    setError("");
    navigate("/"); // 로그인 성공 시 메인 페이지로 이동
  }

  return (
    <>
      <Header />

      <main className="login-main">
        <div className="login-container">
          {/* 왼쪽 이미지 영역 */}
          <div className="login-image">
            <img src="/images/login/Mask group4.png" alt="로그인 이미지" />
          </div>

          {/* 오른쪽 로그인 박스 */}
          <div className="login-box">
            <h1>SIMPLICITY<br/>SPEAKS</h1>
            <p>WHAT YOU WEAR SAYS MORE THAN WORDS</p>

            <p className="login-label">LOGIN YOUR ACCOUNT</p>

            <form onSubmit={handleLogin}>
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="E-MAIL ADDRESS"
                />
              </div>

              <div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="PASSWORD"
                />
              </div>

              {error && <p className="error-message">{error}</p>}

              <div>
                <button type="submit">LOGIN</button>
              </div>

              <div className="login-or">OR</div>

              <div>
                <button type="button">KAKAO LOGIN</button>
              </div>
            </form>

            <div className="login-links">
              <div>
                <Link to="/signup/step1">CREATE ACCOUNT</Link>
              </div>
              <div>
                FORGOT YOUR <Link to="/Find-email">E-MAIL?</Link>
              </div>
              <div>
                FORGOT YOUR <Link to="/Reset-password">PASSWORD?</Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer/>
    </>
  )
}

export default LoginPage;
