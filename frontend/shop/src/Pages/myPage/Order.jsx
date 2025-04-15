import React from "react";
import { Link } from "react-router-dom";
import MyPageSidebar from "../components/MyPageSidebar";

const Order = () => {
  const orderList = [
    {
      order_id: "A001",          // 주문 번호
      order_date: "2025.04.13",  // 주문 일자
      point: "65",                // 적립 포인트(P)
      order_price: "65,000",      // 주문 금액 (원)
      paymentMethod: "카드",      // 결제 방법
      order_status: "배송완료",   // 주문 상태 (예: 배송완료, 결제완료 등)
      itemImage: "/images/item1.jpg", // 상품 이미지 URL
      itemName: "기본 블레이저",  // 상품명
    },
  ];

  return (
    <>
      <Header />
      <div style={{ display: "flex" }}>
        <MyPageSidebar />

        <div className="orders-page">
          <h2>주문내역</h2>

          <div className="search-filter-box">
            <div className="filter-row">
              <input
                type="text"
                placeholder="검색어를 입력해주세요."
                className="search-input"
              />
              <button className="search-button">검색</button>
            </div>

            <div className="filter-row">
              <input
                type="date"
                placeholder="조회기간 시작일"
                className="date-input"
              />
              <span> ~ </span>
              <input
                type="date"
                placeholder="조회기간 종료일"
                className="date-input"
              />
            </div>
          </div>

          {orderList.map((order, index) => (
            <div className="order-item" key={order.order_id || index}>
              <table className="order-table">
                <thead>
                  <tr>
                    <th>일자</th>
                    <th>주문번호</th>
                    <th>적립포인트</th>
                    <th>주문금액</th>
                    <th>상태</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{order.order_date}</td>
                    <td>{order.order_id}</td>
                    <td>+{order.point}P</td>
                    <td>{order.order_price?.toLocaleString() || 0}원</td>
                    <td>
                      <div>{`(${order.paymentMethod})`}</div>
                      <div>{order.order_status}</div>
                    </td>
                  </tr>
                </tbody>
              </table>

              <div className="order-detail-box">
                <img
                  src={order.itemImage || "/images/"}
                  alt="제품"
                  className="product-image"
                />
                <div className="order-info">
                  <Link to={`/orders/${order.order_id}`} className="">
                    주문상세보기
                  </Link>
                  <div className="product-name">{order.itemName}</div>
                </div>
              </div>
            </div>
          ))}

          <div className="pagination">
            <span className="page current">1</span>
            <span className="page">2</span>
            <span className="page">3</span>
            <span className="page">4</span>
            <span className="page">5</span>
            <span className="page next">NEXT</span>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Order;
