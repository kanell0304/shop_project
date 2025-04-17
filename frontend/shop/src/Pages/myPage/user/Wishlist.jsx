import React from "react";
import { Link } from "react-router-dom";
import MyPageSidebar from '../../../Components/MyPageSidebar';


const Wishlist = () => {
  const wishlistItems = [
    {
      itemId: 1,
      name: "블루 스웨이드 점퍼",
      image: "/images/블루점퍼.jpg",
      originalPrice: "294,000원",
      salePrice: "65,000원",
      discount: "65%",
      rate: 4,
      registerDate: "2025.04.08",
    },
    {
      itemId: 2,
      name: "블루 스웨이드 점퍼",
      image: "/images/블루점퍼.jpg",
      originalPrice: "294,000원",
      salePrice: "65,000원",
      discount: "65%",
      rate: 4,
      registerDate: "2025.04.08",
    },
  ];

  const handleRemoveWishlist = (itemId) => {
    console.log(`관심상품 해제: ${itemId}`);
  };

  return (
    <>
      <div className="mypageContainer">
        <MyPageSidebar/>

        <div className="wishlistContainer">
          <h2 className="wishlistTitle">관심상품</h2>
          <table className="wishlistTable">
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
              {wishlistItems.map((item, index) => (
                <tr key={item.itemId}>
                  <td>{index + 1}</td>
                  <td className="wishlistProduct">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="wishlistProductImage"
                    />
                    <span className="wishlistProductName">{item.name}</span>
                  </td>
                  <td className="wishlistDiscount">{item.discount}</td>
                  <td className="wishlistPrice">
                    <div className="originalPrice">{item.originalPrice}</div>
                    <div className="salePrice">{item.salePrice}</div>
                  </td>
                  <td className="wishlistRating">
                    {"★".repeat(item.rate)}
                    {"☆".repeat(5 - item.rate)}
                  </td>
                  <td className="wishlistDate">{item.registerDate}</td>
                  <td className="wishlistRemove">
                    <button
                      type="button"
                      className="removeButton"
                      onClick={() => handleRemoveWishlist(item.itemId)}
                    >
                      관심상품 해제
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="wishlistPagination">
            <Link to="#" className="pageLink">
              1
            </Link>
            <Link to="#" className="pageLink">
              2
            </Link>
            <Link to="#" className="pageLink">
              3
            </Link>
            <Link to="#" className="pageLink">
              4
            </Link>
            <Link to="#" className="pageLink">
              5
            </Link>
            <Link to="#" className="pageLink">
              NEXT
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Wishlist;
