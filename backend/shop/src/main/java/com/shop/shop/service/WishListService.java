package com.shop.shop.service;

import com.shop.shop.dto.WishListDTO;

import java.util.List;

public interface WishListService {

    WishListDTO registerInterest(WishListDTO wishListDTO);

    public List<WishListDTO> getWishListByMemberId(Long memberId);

}