package com.shop.shop.service;

import com.shop.shop.dto.CartDTO;

import java.util.List;

public interface CartService {

    public CartDTO registerCart(CartDTO cartDTO);
    public List<CartDTO> getCartList(Long memberId);

}
