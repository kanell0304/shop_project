import { Link, useSearchParams } from "react-router-dom";
import BasicLayout from "../../layout/BasicLayout";
import '../../static/css/shop.scss';
import '../../static/css/siderbar.scss';
import React, { useState } from "react";

const ItemListPage = () => {
  const [activeCategory, setActiveCategory] = useState("OUTWEAR");
  const [searchParams] = useSearchParams();
  const currentPage = searchParams.get('page') ? parseInt(searchParams.get('page'), 10) : 1;
  const [activeSortButton, setActiveSortButton] = useState('NEWEST');

  // 임시 더미 데이터 (9개)
  const dummyItems = {
    content: Array.from({ length: 9 }, (_, index) => ({
      id: index + 1,
      name: `더미 상품 ${index + 1}`,
      description: `이것은 더미 상품 ${index + 1} 입니다.`,
      price: `${(20000 + index * 1000)}KR`,
      totalScore: 4.0 - index * 0.1,
      discountRate: index % 3 === 0 ? 10 + index * 2 : 0,
      delFlag: false,
      dueDate: "2025-04-20T12:00:00.000000",
      salesVolume: index * 5,
      options: [
        { optionName: "색상", optionValue: ["빨강", "파랑", "검정"][index % 3], optionPrice: 0, stockQty: 10 - index },
        { optionName: "사이즈", optionValue: ["S", "M", "L"][index % 3], optionPrice: 0, stockQty: 5 + index },
      ],
      info: { 원산지: "국내", 브랜드: "더미 브랜드" },
      uploadFileNames: [`dummy_${(index % 3) + 1}.png`], // dummy_1.png, dummy_2.png, dummy_3.png 순환
    })),
    pageable: { pageNumber: 0, pageSize: 10, sort: { empty: true, sorted: false, unsorted: true }, offset: 0, paged: true, unpaged: false },
    last: true,
    totalPages: 1,
    totalElements: 9,
    first: true,
    size: 10,
    number: 0,
    sort: { empty: true, sorted: false, unsorted: true },
    numberOfElements: 9,
    empty: false,
  };

  const handleAddCart = (id) => {
    console.log("장바구니 추가:", id);
  };

  const handleAddWishlist = (id) => {
    console.log("관심상품 추가:", id);
  };

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  const handleSortButtonClick = (sortType) => {
    setActiveSortButton(sortType);
    console.log(`정렬 기준 변경: ${sortType}`);
  };

  return (
    <BasicLayout>
      <div className="itemListContainer">
        <div className="itemListSection">
          {dummyItems.content.map((item) => (
            <div key={item.id} className="itemCard">
              <div className="itemImageWrapper">
                <img src={`/images/${item.uploadFileNames[0] || 'default.png'}`} alt={item.name} className="itemImage" />
                <div className="itemButtonGroup">
                  <button onClick={() => handleAddWishlist(item.id)}>WISH</button>
                  <button onClick={() => handleAddCart(item.id)}>CART</button>
                </div>
              </div>
              <div className="itemInfo">
                <div className="itemName">{item.name}</div>
                <div className="space">
                  <div className="itemSalePrice">{item.price * (1 - item.discountRate / 100)}</div>
                  <div className="itemOriginalPrice">{item.price}</div>
                  <div className="itemDiscount">{item.discountRate}%</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <aside className="itemSidebar">
          <div className="innerSiedbarWrap">
            <h1 className="categoryTitle">SHOP</h1>
            <div className="searchBox">
              <input type="text" placeholder="SEARCH TEXT" /><button>SEARCH</button>
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
              <div className="totalCount">TOTAL {dummyItems.totalElements}</div>
              <div className="sortButtons">
                {activeSortButton === 'NEWEST' ? (
                  <button className="active" onClick={() => handleSortButtonClick('NEWEST')}>
                    <span>NEWEST</span>
                  </button>
                ) : (
                  <button onClick={() => handleSortButtonClick('NEWEST')}>NEWEST</button>
                )}

                {activeSortButton === 'PRICE HIGH' ? (
                  <button className="active" onClick={() => handleSortButtonClick('PRICE HIGH')}>
                    <span>PRICE HIGH</span>
                  </button>
                ) : (
                  <button onClick={() => handleSortButtonClick('PRICE HIGH')}>PRICE HIGH</button>
                )}

                {activeSortButton === 'PRICE LOW' ? (
                  <button className="active" onClick={() => handleSortButtonClick('PRICE LOW')}>
                    <span>PRICE LOW</span>
                  </button>
                ) : (
                  <button onClick={() => handleSortButtonClick('PRICE LOW')}>PRICE LOW</button>
                )}
              </div>
              <div className="pageLinks">
                {Array.from({ length: Math.ceil(dummyItems.totalElements / 10) }, (_, i) => (
                  <Link
                    key={i + 1}
                    to={`?page=${i + 1}`}
                    className={currentPage === i + 1 ? 'current' : ''}
                  >
                    {i + 1}
                  </Link>
                ))}
                {currentPage < Math.ceil(dummyItems.totalElements / 10) && (
                  <Link to={`?page=${currentPage + 1}`}>NEXT</Link>
                )}
              </div>
            </div>
          </div>
        </aside>
      </div>
    </BasicLayout>
  )
}

export default ItemListPage;