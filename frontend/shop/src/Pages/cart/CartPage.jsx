import React, { useState } from "react";

const CartPage = () => {

    const [cartItems, setCartItems] = useState([
        {
            item_id: 111,
            item_name: "블루 스프링 집업",
            image: "",
            price: "",
            quantity: "",
        },
    ]);

    const handleQuantityChange = (item_id, quantity) => {

        
    }

    const handleRemoveItem = (item_id) => {

    }


  return (
   
  )
}

export default CartPage;
