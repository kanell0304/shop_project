import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="logo">
        {/* 헤더 로고 */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 450 150" width="450" height="150">
          <text x="20" y="100" font-family="'Pretendard GOV', sans-serif" font-weight="700" font-size="80" fill="#121212">
            NØRD
          </text>
        </svg>
      </div>
      {/*헤더 카테고리*/}
      <nav>
        <ul>
          <li><Link to="/shop">SHOP</Link></li>
          <li><Link to="/magazine">MAGAZINE</Link></li>
          <li><Link to="/event">EVENT</Link></li>
          <li><Link to="/search">SEARCH</Link></li>
          <li><Link to="/mypage">MYPAGE</Link></li>
          <li><Link to="/cart">CART</Link></li>
          <li><Link to="/login">LOGIN</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
