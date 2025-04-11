package com.shop.shop.dto;

import com.shop.shop.domain.cart.Cart;
import com.shop.shop.domain.category.Category;
import com.shop.shop.domain.item.Item;
import com.shop.shop.domain.member.Member;
import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;
import java.util.stream.Collectors;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CartDTO {

    private Long cartId;
    private Long memberId;
    private int qty;

    private Long itemId;
    private String itemName;
    private int itemPrice;

    private Long optionId;
    private String optionName;
    private String optionValue;
    private int optionPrice;

    private Long[] deleteId;

    public CartDTO(Cart cart) {
        this.cartId = cart.getId();
        this.memberId = cart.getMember().getId();
        this.qty = cart.getQty();

        this.itemId = cart.getItem().getId();
        this.itemName = cart.getItem().getName();
        this.itemPrice = cart.getItem().getPrice();

        if (cart.getItemOption() != null) {
            this.optionId = cart.getItemOption().getId();
            this.optionName = cart.getItemOption().getOptionName();
            this.optionValue = cart.getItemOption().getOptionValue();
            this.optionPrice = cart.getItemOption().getOptionPrice();
        }
    }

//    private Long cartId;
//    private Long memberId;
//    private int qty;
//    private Item item;
//
//    // Cart -> CartDTO 로 변환하는 메서드
//    public CartDTO (Cart cart) {
//        this.cartId = cart.getId();
//        this.memberId = cart.getMember().getId();
//        this.qty = cart.getQty();
//        this.item = cart.getItem();
//    }

}
