import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  }

  return (
    <header>
      <div className="left-wrap">
        <Link to="/" className="logo">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 450 150" width="450" height="150">
            <text x="20" y="100" fontFamily="'Pretendard GOV', sans-serif" fontWeight="700" fontSize="80" fill="#121212">
              NØRD
            </text>
          </svg>
        </Link>
        <nav className="left-menu">
          <Link to="/shop">SHOP</Link>
          <Link to="/magazine">MAGAZINE</Link>
          <Link to="/event">EVENT</Link>
        </nav>
      </div>

      <nav className="right-menu">
        <Link to="/search">SEARCH</Link>
        {isLoggedIn && <Link to="/mypage">MYPAGE</Link>}
        <Link to="/cart">CART</Link>
        {isLoggedIn ? (
          <button onClick={handleLogout} style={{ all: 'unset', cursor: 'pointer' }}>LOGOUT</button>
        ) : (
          <Link to="/login">LOGIN</Link>
        )}
      </nav>
    </header>
  );
}

export default Header;
