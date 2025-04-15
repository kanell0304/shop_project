import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";


const MainPage = () => {
  return (
    <>
      <Header/>

      <main>
        {/* 배너 이미지 파일 */}
        <section>
          <img src="/images/mainpage/Mask group1.png" alt="메인 배너"/>
        </section>

        {/* 인트로 텍스트 + 배너 */}
        <section>
          <div>
            <h2>INTRODUCTION</h2>
            <p>
              NØRD is built on minimalism and functionality, embracing the philosophy that clothing is not just a trend - but a part of life.<br/>
              Each piece is a refined balance of practicality and style, crafted as a wearable work of art.
            </p>
            <a href="/shop">SHOP NOW</a>
          </div>
          <div>
            <img src="../images/mainpage/Mask group2.png" alt="서브 배너"/>
          </div>
        </section>

        {/* CORE VALUES + 아이템 사진 */}
        <section>
          <div>
            <h2>OUR CORE VALUES</h2>
            <ul>
              <li>Quality Over Quantity</li>
              <li>Innovation & Tradition</li>
              <li>Minimal but Bold</li>
            </ul>
          </div>

          <div>
            {/* 역 ㄱ자 */}
            <div>
              <div>
                <img src="../images/mainpage/Product1.png" alt="아이템1" />
                <img src="../images/mainpage/Product2.png" alt="아이템2" />
              </div>
              <div>
                <img src="../images/mainpage/Product3.png" alt="아이템3" />
              </div>
            </div>

            {/* 역 ㄴ자 */}
            <div>
              <div>
                <img src="../images/mainpage/Product4.png" alt="아이템4" />
              </div>
              <div>
                <img src="../images/mainpage/Product5.png" alt="아이템5" />
                <img src="../images/mainpage/Product6.png" alt="아이템6" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer/>
    </>
  )
}

export default MainPage;
