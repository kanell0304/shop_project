import React from 'react';
import { Link } from 'react-router-dom';

const Mileage = () => {

  const mileageData = [
    { 
     date: '2025.04.08', 
     orderNumber: '000000', 
     description: '블루 스웨트 집업 외 1', 
     change: '+50P', 
     current: '560P', 
     img: '/img/product.png'
    },
  ];

  return (
    <div className="mileagePage">
      <div className="title">마일리지</div>

      <div className="membershipInfo">
        <div className="membershipLevel">BRONZE</div>
        <p>현재 고객님은 구매금액의 0.1% 적립 혜택을 받으시고 계십니다.</p>
      </div>

      <div className="searchFilter">
       <input type="date" className="dateInput" placeholder="조회 기간 시작일"/>
       <span className="dateDivider">~</span>
       <input type="date" className="dateInput" placeholder="조회 기간 종료일"/>
       <button className="searchButton">검색</button>
      </div>


      <table className="mileageTable">
        <thead>
          <tr>
            <th>일자</th>
            <th>주문</th>
            <th>적립/차감</th>
            <th>현황</th>
          </tr>
        </thead>
        <tbody>
          {mileageData.map((item, index) => (
            <tr key={index}>
              <td className="mileageDate">{item.date}</td>
              <td className="mileageOrder">
                <img src={item.img} alt="상품 이미지" className="orderImage"/>
                <div className="orderInfo">
                  <div>주문번호 : {item.orderNumber}</div>
                  <div>{item.description}</div>
                </div>
              </td>
              <td className="mileageChange">{item.change}</td>
              <td className="mileageCurrent">{item.current}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        <Link to="#" className="pageLink">1</Link>
        <Link to="#" className="pageLink">2</Link>
        <Link to="#" className="pageLink">3</Link>
        <Link to="#" className="pageLink">4</Link>
        <Link to="#" className="pageLink">5</Link>
        <Link to="#" className="pageLink">NEXT</Link>
      </div>
    </div>
  )
}

export default Mileage;
