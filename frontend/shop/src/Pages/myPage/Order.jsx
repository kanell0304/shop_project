import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MyPageSidebar from "../components/MyPageSidebar";

const Order = () => {
  const orderList = [
    {
      order_id: "A001",
      order_date: "2025.04.13",
      point: "65",
      order_price: "65000",
      paymentMethod: "카드",
      order_status: "배송완료",
      itemImage: "/images/item1.jpg",
      itemName: "기본 블레이저",
    },
  ];

  return (
    <>
      <Header/>
      <div className="mypageContainer">
        <MyPageSidebar/>

        <div className="ordersPage">
          <h2>주문내역</h2>

          <div className="searchFilterBox">
            <div className="filterRow">
              <input
                type="text"
                placeholder="검색어를 입력해주세요."
                className="searchInput"
              />
              <button className="searchButton">검색</button>
            </div>

            <div className="filterRow">
              <input type="date" className="dateInput" />
              <span> ~ </span>
              <input type="date" className="dateInput" />
            </div>
          </div>

          {orderList.map((order, index) => (
            <div className="orderItem" key={order.order_id || index}>
              <table className="orderTable">
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
                    <td>{Number(order.order_price).toLocaleString()}원</td>
                    <td>
                      <div>({order.paymentMethod})</div>
                      <div>{order.order_status}</div>
                    </td>
                  </tr>
                </tbody>
              </table>

              <div className="orderDetailBox">
                <img
                  src={order.itemImage}
                  alt="제품"
                  className="productImage"
                />
                <div className="orderInfo">
                  <Link to={`/orders/${order.order_id}`}>
                    주문상세보기
                  </Link>
                  <div className="productName">{order.itemName}</div>
                </div>
              </div>
            </div>
          ))}

          <div className="pagination">
            <Link to="#" className="pageLink">1</Link>
            <Link to="#" className="pageLink">2</Link>
            <Link to="#" className="pageLink">3</Link>
            <Link to="#" className="pageLink">4</Link>
            <Link to="#" className="pageLink">5</Link>
            <Link to="#" className="pageLink">NEXT</Link>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Order;
