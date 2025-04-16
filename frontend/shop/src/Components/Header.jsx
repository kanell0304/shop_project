import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import Logo from '../static/svg/logo.svg?react';
import LogoutComponent from './member/LogoutComponent';

const Header = () => {
  const navigate = useNavigate();
  const loginState = useSelector(state => state.loginSlice)
  const isLoggedIn = loginState && loginState.email !== '';

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
          
          {isLoggedIn ? (
            //로그인 됬을 때
            <ul>
              <li><Link to="/search">SEARCH</Link></li>
              <li><Link to="/cart">CART</Link></li>
              <li><Link to="/mypage">MYPAGE</Link></li>
              <li><LogoutComponent></LogoutComponent></li>
            </ul>
            ):(
              //로그인 안됬을 때
            <ul>
                <li><Link to="/search">SEARCH</Link></li>
                <li><Link to="/member/login">CART</Link></li>
                <li><Link to="/member/login">MYPAGE</Link></li>
                <li><Link to="/member/login">LOGIN</Link></li>
            </ul>
            )}
          </div>
      </div>
    </header>
  );
}

export default Header;
