import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import MyPageSidebar from "../Components/MyPageSidebar";

const Wishlist = () => {
  const items = [
    {
      item_id: 1,
      name: "블루 스웨이드 점퍼",
      image: "/images/블루점퍼.jpg",
      originalPrice: "294,000원",
      salePrice: "65,000원",
      discount: "65%",
      rate: 4,
      register: "2025.04.08",
    },
    {
      item_id: 2,
      name: "블루 스웨이드 점퍼",
      image: "/images/블루점퍼.jpg",
      originalPrice: "294,000원",
      salePrice: "65,000원",
      discount: "65%",
      rate: 4,
      register: "2025.04.08",
    },
  ]

  const handleRemoveWishlist = (item_id) => {
    console.log(`관심상품 해제: ${item_id}`);
  };

  return (
    <>
      <Header/>
g
      <div style={{ display: "flex" }}>
        <MyPageSidebar/>

        <div>
          <h2>관심상품</h2>
          <table>
            <thead>
              <tr>
                <th>번호</th>
                <th>상품</th>
                <th>할인율</th>
                <th>가격</th>
                <th>별점</th>
                <th>등록일</th>
                <th>관심</th>
              </tr>
            </thead>

            <tbody>
              {items.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>
                    <img src={item.image} alt={item.name}/>
                    {item.name}
                  </td>
                  <td>{item.discount}</td>
                  <td>
                    <div>{item.originalPrice}</div>
                    <div>{item.salePrice}</div>
                  </td>
                  <td>
                    {"★".repeat(item.rate)}
                    {"☆".repeat(5 - item.rate)}
                  </td>
                  <td>{item.register}</td>
                  <td>
                    <button type="button" onClick={() => handleRemoveWishlist(item.item_id)}>
                      관심상품 해제
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>
            <button>NEXT</button>
          </div>
        </div>
      </div>

      <Footer/>
    </>
  )
}

export default Wishlist;
