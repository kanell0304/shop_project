import React from "react";
import { Link } from "react-router-dom";

const ItemListPage = () => {
  const items = [
    {
      item_id: 1,
      name: "블루 스프링 집업",
      image: "",
      originalPrice: "239,000KR",
      salePrice: "65,000KR",
      discount: "65%",
    },
    {
      item_id: 2,
      name: "올리브 스프링 셔츠",
      image: "",
      originalPrice: "239,000KR",
      salePrice: "65,000KR",
      discount: "65%",
    },
    {
      item_id: 3,
      name: "베이지 스프링 셔츠",
      image: "",
      originalPrice: "239,000KR",
      salePrice: "65,000KR",
      discount: "65%",
    },
  ];

  const handleAddCart = (id) => {
    console.log("장바구니 추가:", id);
  };

  const handleAddWishlist = (id) => {
    console.log("관심상품 추가:", id);
  };

  return (
    <div className="itemListContainer">
      <div className="itemListSection">
        {items.map((item) => (
          <div key={item.item_id} className="itemCard">
            <div className="itemImageWrapper">
              <img src={item.image} alt={item.name} className="itemImage" />
            </div>
            <div className="itemButtonGroup">
              <button onClick={() => handleAddWishlist(item.item_id)}>WISH</button>
              <button onClick={() => handleAddCart(item.item_id)}>CART</button>
            </div>
            <div className="itemInfo">
              <div className="itemName">{item.name}</div>
              <div className="itemSalePrice">{item.salePrice}</div>
              <div className="itemOriginalPrice">{item.originalPrice}</div>
              <div className="itemDiscount">{item.discount}</div>
            </div>
          </div>
        ))}
      </div>

      <aside className="itemSidebar">
        <div className="searchBox">
          <input type="text" placeholder="SEARCH TEXT" />
          <button>SEARCH</button>
        </div>

        <div className="categoryBox">
          <h3 className="categoryTitle">SHOP</h3>
          <ul className="categoryList">
            <li>OUTWEAR</li>
            <li>TOP</li>
            <li>KNITWEAR</li>
            <li>BOTTOM</li>
            <li>ACC</li>
          </ul>
        </div>

        <div className="paginationSection">
          <div className="totalCount">TOTAL 30</div>
          <div className="sortButtons">
            <button>NEWEST</button>
            <button>PRICE HIGH</button>
            <button>PRICE LOW</button>
          </div>
          <div className="pageLinks">
            <Link to="?page=1">1</Link>
            <Link to="?page=2">2</Link>
            <Link to="?page=3">3</Link>
            <Link to="?page=4">4</Link>
            <Link to="?page=5">5</Link>
            <Link to="?page=next">NEXT</Link>
          </div>
        </div>
      </aside>
    </div>
  )
}

export default ItemListPage;
