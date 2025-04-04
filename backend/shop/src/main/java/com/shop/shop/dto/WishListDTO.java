package com.shop.shop.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.shop.shop.domain.cart.WishList;
import jakarta.persistence.Column;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class WishListDTO {

    @Column(name = "wish_list_id")
    private Long wishListId;

    @Column(name = "member_id")
    private Long memberId;

    @Column(name = "item_id")
    private Long itemId;

    // WishList 를 WishListDTO 로 변환하는 메서드
    public WishListDTO(WishList wishList) {
        this.wishListId = wishList.getId();
        this.memberId = wishList.getMember().getId();
        this.itemId = wishList.getItem().getId();
    }

}
