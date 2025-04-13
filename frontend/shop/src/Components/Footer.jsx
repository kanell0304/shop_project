import React from "react";

const Footer = () => {
  return (
    <footer>
      <div>
        {/* 로고 */}
        <div className="logo">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 450 150" width="450" height="150">
            <text x="20" y="100" fontFamily="'Pretendard GOV', sans-serif" fontWeight="700" fontSize="80" fill="#121212">
              NØRD
            </text>
          </svg>
        </div>

        {/* 메뉴 */}
        <div>
          <div>
            <h3>SHOP</h3>
            <ul>
              <li>OUTWEAR</li>
              <li>TOP</li>
              <li>KNITWEAR</li>
              <li>BOTTOM</li>
              <li>ACC</li>
            </ul>
          </div>
          <div>
            <h3>MAGAZINE</h3>
          </div>
          <div>
            <h3>EVENT</h3>
          </div>
        </div>
      </div>
      
      {/* 아래쪽: 이용약관 & 회사 정보 */}
      <div>
        <nav>
          <a href="#">이용약관</a>
          <a href="#">이용안내</a>
          <a href="#">개인정보처리방침</a>
        </nav>
        <p>
          © NØRD  대표: 홍길동  법인명: ㈜스타디 어매럴  주소: 서울특별시 마포구 서강로 136 아이비타워 2층, 3층 <br />
          사업자 등록 번호: 000-00-00000  통신판매업 신고 번호: 제0000-서울-00000호 개인정보보호책임자: 홍길동 (aaa@naver.com)
        </p>
      </div>
    </footer>
  )
}

export default Footer;
