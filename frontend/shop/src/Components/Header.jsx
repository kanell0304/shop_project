import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../static/svg/logo.svg?react';

const Header = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  }

  return (
    <header className='header'>
      <div className='innerWrap'>
          <h1 className='logo'>
            <Link to="/">
              <Logo/>
              <strong className='blind'>NØRD</strong>
            </Link>
          </h1>
          <nav className="gnb">
            <ul className="cartegory">
              <li><Link to="/shop">SHOP</Link></li>
              <li><Link to="/magazine">MAGAZINE</Link></li>
              <li><Link to="/event">EVENT</Link></li>
            </ul>
          </nav>

          <div className="utillMenu">
            <ul>
              <li><Link to="/search">SEARCH</Link></li>
              {isLoggedIn && <Link to="/mypage">MYPAGE</Link>}
              <li><Link to="/cart">CART</Link></li>
              {isLoggedIn ? (
                <li><a href="#" onClick={handleLogout}>LOGOUT</a></li>
              ) : (
                <li><Link to="/member/login">LOGIN</Link></li>
              )}
            </ul>
          </div>
      </div>
    </header>
  );
}

export default Header;
