import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Basic from "../static/basic";
import Root from "../router/Root";

const SignupComplete = () => {
  const navigate = useNavigate();

  const handleShopNow = () => {
    navigate("/");
  }

  return (
    <>
      <Header/>

      <main>
        <div className="signup-complete-box">
          <h1>WELCOME</h1>
          <p>Your journey in mindful style begins here.</p>
          <h2>환영합니다.</h2>
          <p>당신의 스타일 여정이 지금 시작됩니다.</p>
          <button onClick={handleShopNow}>SHOP NOW</button>
        </div>
      </main>

      <Footer />
    </>
  )
}

export default SignupComplete;
