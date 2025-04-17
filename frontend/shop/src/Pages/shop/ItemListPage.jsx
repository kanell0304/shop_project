import { Link } from "react-router-dom";
import BasicLayout from "../../layout/BasicLayout";
import '../../static/css/shop.scss'
import '../../static/css/siderbar.scss'
import React, { useState } from "react";

const ItemListPage = () => {
  const items = {
    content: [
        {
            id: 1,
            name: "테스트 아이템",
            description: "이것은 테스트 상품입니다.",
            price: 26000,
            totalScore: 3.5,
            discountRate: 20,
            delFlag: false,
            dueDate: "2025-04-17T11:58:39.302403",
            salesVolume: 0,
            options: [
                {
                    optionName: "색상",
                    optionValue: "빨강",
                    optionPrice: 20000,
                    stockQty: 10
                },
                {
                    optionName: "색상",
                    optionValue: "파랑",
                    optionPrice: 22000,
                    stockQty: 5
                }
            ],
            info: {
                원산지: "대한민국",
                브랜드: "테스트 브랜드"
            },
            uploadFileNames: [
                "default.png"
            ]
        }
    ],
    pageable: {
        pageNumber: 0,
        pageSize: 10,
        sort: {
            empty: true,
            sorted: false,
            unsorted: true
        },
        offset: 0,
        paged: true,
        unpaged: false
    },
    last: true,
    totalPages: 1,
    totalElements: 1,
    first: true,
    size: 10,
    number: 0,
    sort: {
        empty: true,
        sorted: false,
        unsorted: true
    },
    numberOfElements: 1,
    empty: false
  }

  const [activeCategory, setActiveCategory] = useState("OUTWEAR");

  const handleAddCart = (id) => {
    console.log("장바구니 추가:", id);
  };

  const handleAddWishlist = (id) => {
    console.log("관심상품 추가:", id);
  };


  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };


  return (
    <BasicLayout>
    <div className="itemListContainer">
      <div className="itemListSection">
        {/* {items.map((item) => (
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
        ))} */}
      </div>

      <aside className="itemSidebar">
        <div className="innerSiedbarWrap">
        <h1 className="categoryTitle">SHOP</h1>
          <div className="searchBox">
            <input type="text" placeholder="SEARCH TEXT" />
            <button>SEARCH</button>
          </div>

          <div className="categoryBox">
              <ul className="categoryList">
                <li
                  className={activeCategory === 'OUTWEAR' ? 'active' : ''}
                  onClick={() => handleCategoryClick('OUTWEAR')}
                >
                  OUTWEAR
                </li>
                <li
                  className={activeCategory === 'TOP' ? 'active' : ''}
                  onClick={() => handleCategoryClick('TOP')}
                >
                  TOP
                </li>
                <li
                  className={activeCategory === 'KNITWEAR' ? 'active' : ''}
                  onClick={() => handleCategoryClick('KNITWEAR')}
                >
                  KNITWEAR
                </li>
                <li
                  className={activeCategory === 'BOTTOM' ? 'active' : ''}
                  onClick={() => handleCategoryClick('BOTTOM')}
                >
                  BOTTOM
                </li>
                <li
                  className={activeCategory === 'ACC' ? 'active' : ''}
                  onClick={() => handleCategoryClick('ACC')}
                >
                  ACC
                </li>
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
        </div>
      </aside>
    </div>
    </BasicLayout>
  )
}

export default ItemListPage;
