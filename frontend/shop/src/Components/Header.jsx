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
      <div className="logo">
        <Link to="/">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 450 150" width="450" height="150">
            <text x="20" y="100" fontFamily="'Pretendard GOV', sans-serif" fontWeight="700" fontSize="80" fill="#121212">
              NØRD
            </text>
          </svg>
        </Link>
      </div>

      <nav>
        <ul>
          <li><Link to="/shop">SHOP</Link></li>
          <li><Link to="/magazine">MAGAZINE</Link></li>
          <li><Link to="/event">EVENT</Link></li>
          <li><Link to="/search">SEARCH</Link></li>
          {isLoggedIn && <li><Link to="/mypage">MYPAGE</Link></li>}
          <li><Link to="/cart">CART</Link></li>
          <li>
            {isLoggedIn ? (
              <button onClick={handleLogout} style={{ all: 'unset', cursor: 'pointer' }}>LOGOUT</button>
            ) : (
              <Link to="/login">LOGIN</Link>
            )}
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
