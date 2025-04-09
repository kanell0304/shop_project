import React from "react";
import { Link } from 'react-router-dom';

const MyPageSidebar = () => {
    
    // 고객 등급에 따라 달라짐 
    const userName = "홍길동";
    const membership = "BRONZE" // 멤버십 현재 등급 ("BRONZE", "SILVER", "GOLD", "PLATINUM")

    const menuItems = [
        {label: "대시보드", href: "/mypage/dashboard"},
        {label: "주문내역", href: "/mypage/orders"},
        {label: "문의내역", href: "/mypage/inquiry"},
        {label: "마일리지", href: "/mypage/mileage"},
        {label: "관심상품", href: "/mypage/wishlist"},
        {label: "개인정보", href: "/mypage/profile"},
    ]

    return (
        <aside>
        <h2>MYPAGE</h2>
        <p>{membership}</p>
        <p>{userName} 고객님 반갑습니다.</p>
        <nav>
          <ul>
            {menuItems.map((item) => (
              <li key={item.href}>
                <Link to={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    )
}

export default MyPageSidebar;