import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const MagazinePage = () => {
  return (
    <>
      <Header />

      <main>
        <section>
          <ul>
            <li>
              <img src="images/magazine/magazine1.png" alt="vol.10" />
              <div style={{ cursor: "pointer" }}>
                <span>- VOL. 10</span>
                <h2>Life Behind the Stage -<br />Artist Manager Julien Drury</h2>
              </div>
            </li>
            <li>
              <img src="images/magazine/magazine2.png" alt="vol.9" />
              <div style={{ cursor: "pointer" }}>
                <span>- VOL. 9</span>
                <h2>빛을 쌓는 옷 -<br />사진가 임한결의 렌즈 밖 이야기</h2>
              </div>
            </li>
            <li>
              <img src="images/magazine/magazine3.png" alt="vol.8" />
              <div style={{ cursor: "pointer" }}>
                <span>- VOL. 8</span>
                <h2>Between the Waves and the Wind -<br />Surfer Lia Thompson's Ocean Style</h2>
              </div>
            </li>
            <li>
              <img src="images/magazine/magazine4.png" alt="vol.7" />
              <div style={{ cursor: "pointer" }}>
                <span>- VOL. 7</span>
                <h2>한 권의 책처럼 -<br />북페어 디렉터 김경빈의 스타일</h2>
              </div>
            </li>
            <li>
              <img src="images/magazine/magazine5.png" alt="vol.6" />
              <Link to="/magazine/detail">
                <div style={{ cursor: "pointer" }}>
                  <span>- VOL. 6</span>
                  <h2>디테일이 말하는 공간 -<br />인테리어 디자이너 이서연의 실루엣</h2>
                </div>
              </Link>
            </li>
            <li>
              <img src="images/magazine/magazine6.png" alt="vol.5" />
              <div style={{ cursor: "pointer" }}>
                <span>- VOL. 5</span>
                <h2>밸런스를 그리는 손 -<br />요가 강사 정다운의 몸과 옷</h2>
              </div>
            </li>
          </ul>
        </section>

        <aside>
          <h3>MAGAZINE</h3>
          <p>
            NØRD documents inspiration<br />
            drawn from everyday life and beyond fashion<br />
            Through interviews, essays, and visuals,<br />
            we explore brand philosophies and aesthetics.
          </p>
          <div>
            <input type="text" placeholder="SEARCH TEXT" />
            <button>SEARCH</button>
          </div>
          <div>
            <p>TOTAL 10</p>
            <nav>
              <a href="#">1</a>
              <a href="#">2</a>
              <a href="#">3</a>
              <a href="#">4</a>
              <a href="#">5</a>
              <a href="#">NEXT</a>
            </nav>
          </div>
        </aside>
      </main>

      <Footer />
    </>
  );
};

export default MagazinePage;
