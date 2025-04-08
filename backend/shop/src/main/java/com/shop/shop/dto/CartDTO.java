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

//    @Column(name = "cart_id")
    private Long cartId;
//    @Column(name = "member_id")
    private Long memberId;
    private int qty;
//    @Column(name = "item_id")
    private Item item;

    // Cart -> CartDTO 로 변환하는 메서드
    public CartDTO (Cart cart) {
        this.cartId = cart.getId();
        this.memberId = cart.getMember().getId();
        this.qty = cart.getQty();
        this.item = cart.getItem();
    }

//    // 엔티티를 DTO 로 변환하는 생성자
//    public CartDTO(Cart cart) {
//        this.cartId = cart.getId();
//        this.member = cart.getMember();
//        this.item = cart.getItem();
//        this.qty = cart.getQty();
//    }
}
