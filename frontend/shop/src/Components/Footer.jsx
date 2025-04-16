import React from "react";
import { Link } from "react-router-dom";
import Logo from '../static/svg/logo.svg?react';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="innerWrap">
        <div className="f_content_top">
          <h2 className="logo">
              <Logo className="logo" />
            <strong className='blind'>NØRD</strong>
          </h2>
          <nav className="f_siteMap">
              <ul className="f_cartegory">
              <li>
                  <Link to="/shop">SHOP</Link>
                  <ul className="f_subCartegory">
                    <li><Link to="/">OUTWEAR</Link></li>
                    <li><Link to="/">TOP</Link></li>
                    <li><Link to="/">KNITWEAR</Link></li>
                    <li><Link to="/">BOTTOM</Link></li>
                    <li><Link to="/">ACC</Link></li>
                  </ul>
                </li>
                <li><Link to="/magazine">MAGAZINE</Link></li>
                <li><Link to="/event">EVENT</Link></li>
              </ul>
          </nav>
        </div>
        <div className="f_content_botton">
          <ul className="csBtn">
            <li><Link to="/terms">이용약관</Link></li>
            <li><Link to="/guide">이용안내</Link></li>
            <li><Link to="/privacyPolicy">개인정보처리방침</Link></li>
          </ul>
          <div className="infoDetail">
            <span>© NØRD </span>
            <span>대표 :  최흥수</span>
            <span>법인명 :  스카디 어패럴</span>
            <span>주소 : 서울특별시 마포구 서강로 136 아이비티워 2층,3층</span>
            <span>사업자 등록 번호 :  000-00-00000</span>
            <span>통신판매업 신고 번호 :  제0000 - 서울ㅇㅇ--0000호</span>
            <span>개인정보보호책임자 : 최흥수(gmdt89@naver.com)</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
