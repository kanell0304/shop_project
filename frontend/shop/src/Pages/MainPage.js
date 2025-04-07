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
          <img src="/images/main-banner.jpg" alt="메인 배너" />
        </section>

        {/* 인트로 텍스트 */}
        <section>
          <div>
            <h2>INTRODUCTION</h2>
            <p>
              NØRD is built on minimalism and functionality, embracing the philosophy that clothing is not just a trend – but a part of life.<br />
              Each piece is a refined balance of practicality and style, crafted as a wearable work of art.
            </p>
            <a href="/shop">SHOP NOW</a>
          </div>
        </section>

        {/* 서브 배너 이미지 */}
        <section>
          <img src="/images/sub-banner.jpg" alt="서브 배너" />
        </section>

        {/* CORE VALUES */}
        <section>
          <div>
            <h2>OUR CORE VALUES</h2>
            <ul>
              <li>Quality Over Quantity</li>
              <li>Innovation & Tradition</li>
              <li>Minimal but Bold</li>
            </ul>
          </div>
        </section>

        {/* 아이템 섹션 */}
        <section>
          <div>
            {/* 역 ㄱ자 */}
            <div>
              <div>
                <img src="/images/item1.jpg" alt="아이템1" />
                <img src="/images/item2.jpg" alt="아이템2" />
              </div>
              <div>
                <img src="/images/item3.jpg" alt="아이템3" />
              </div>
            </div>

            {/* 역 ㄴ자 */}
            <div>
              <div>
                <img src="/images/item4.jpg" alt="아이템4" />
              </div>
              <div>
                <img src="/images/item5.jpg" alt="아이템5" />
                <img src="/images/item6.jpg" alt="아이템6" />
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
