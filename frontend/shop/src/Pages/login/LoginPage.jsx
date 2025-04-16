import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import LoginImage from "../../static/images/login/Mask_group4.png";
import BasicLayout from "../../layout/BasicLayout";
import "../../static/css/login.scss";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const isValidPassword = (pw) => {
    return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&]).{6,}$/.test(pw);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("이메일과 비밀번호를 모두 입력해주세요.");
      return;
    }

    if (!isValidPassword(password)) {
      setError("비밀번호는 최소 6자 이상, 영문/숫자/특수문자를 포함해야 합니다.");
      return;
    }

    try {
      const response = await axios.post("/api/member/login", {
        email,
        password,
      });

      const { accessToken, refreshToken } = response.data;
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
      setError("");
      navigate("/");
    } catch (err) {
      if (err.response && err.response.status === 401) {
        setError("이메일 또는 비밀번호가 올바르지 않습니다.");
      } else {
        setError("로그인 중 문제가 발생했습니다. 다시 시도해주세요.");
      }
    }
  };

  const handleKakaoLogin = async () => {
    try {
      const response = await axios.get("/api/oauth/kakao");
      const { accessToken } = response.data;
      localStorage.setItem("accessToken", accessToken);
      navigate("/");
    } catch (err) {
      setError("카카오 로그인에 실패했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <BasicLayout>
  <div className="loginContainer">
    {/* 왼쪽 이미지 박스 */}
    <div className="imageBox">
      <img src={LoginImage} alt="로그인 이미지"/>
    </div>

    {/* 오른쪽 로그인 박스 */}
    <div className="loginBox">
      <div className="setting">
      <div className="text">
        <h2>SIMPLICITY<br/>SPEAKS</h2>
        <p>WHAT YOU WEAR SAYS MORE THAN WORDS</p>
      </div>

      <form onSubmit={handleLogin}>
        <p className="loginLabel">LOGIN YOUR ACCOUNT</p>

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

        {error && <p className="errorMessage">{error}</p>}

        <div className="Find">
          <div>
            <button type="submit" className="loginBtn">
              LOGIN
            </button>
          </div>

          <div className="login-or">OR</div>

          <div>
            <button
              type="button"
              className="kakaoBtn"
              onClick={handleKakaoLogin}
            >
              KAKAO LOGIN
            </button>
          </div>
        </div>
      </form>

      <div className="loginLinks">
        <div>
          <Link to="/signup/step1">CREATE ACCOUNT</Link>
        </div>
        <div>
          FORGOT YOUR <Link to="/findEmail">E-MAIL?</Link>
        </div>
        <div>
          FORGOT YOUR <Link to="/resetPW">PASSWORD?</Link>
        </div>
      </div>
      </div>
    </div>
  </div>  
  </BasicLayout>
  )
}

export default LoginPage;
