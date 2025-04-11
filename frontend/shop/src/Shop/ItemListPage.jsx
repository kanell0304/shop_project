import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

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
    console.log("장바구니 추가:", items.item_id);
  }

  const handleAddWishlist = (id) => {
    console.log("관심상품 추가:", items.item_id);
  }

  return (
    <>
      <Header/>

      <div className="ItemList">
        {/* 상품 리스트 */}
        <div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
          {items.map((item) => (
            <div key={item.item_id} className="item-box">
              <img src={item.image} alt={item.name}/>
              <div className="buttons">
                <button onClick={() => handleAddWishlist(item.item_id)}>WISH</button>
                <button onClick={() => handleAddCart(item.item_id)}>CART</button>
              </div>
              <div>{item.name}</div>
              <div>{item.salePrice}</div>
              <div>{item.originalPrice}</div>
              <div>{item.discount}</div>
            </div>
          ))}
        </div>

        {/* 오른쪽 사이드바 */}
        <div>
          <div>
            <input type="text" placeholder="SEARCH TEXT"/>
            <button>SEARCH</button>
          </div>

          <div className="category">
            <h3>SHOP</h3>
            <ul>
              <li>OUTWEAR</li>
              <li>TOP</li>
              <li>KNITWEAR</li>
              <li>BOTTOM</li>
              <li>ACC</li>
            </ul>
          </div>

          <div className="pagination">
            <div>TOTAL 30</div>
            <div>
              <button>NEWEST</button>
              <button>PRICE HIGH</button>
              <button>PRICE LOW</button>
            </div>
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
      </div>

      <Footer/>
    </>
  )
}

export default ItemListPage;
