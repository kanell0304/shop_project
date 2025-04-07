import React from "react";
import Header from "../Header";
import Footer from "../Footer";

const LoginPage = () => {
  return (
    <>
      <Header />

      <main>
        <div className="login-box">
          <h1>SIMPLICITY SPEAKS</h1>
          <p>WHAT YOU WEAR SAYS MORE THAN WORDS</p>

          <form>
            <div>
              <input type="email" placeholder="E-MAIL ADDRESS"/>
            </div>
            <div>
              <input type="password" placeholder="PASSWORD"/>
            </div>
            <div>
              <button type="submit">LOGIN</button>
            </div>

            <div>OR</div>

            <div>
              <button type="button">KAKAO LOGIN</button>
            </div>
          </form>

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

      <Footer />
    </>
  )
}

export default LoginPage;
