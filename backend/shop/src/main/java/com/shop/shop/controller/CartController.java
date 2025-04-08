package com.shop.shop.controller;

import com.shop.shop.dto.CartDTO;
import com.shop.shop.dto.CategoryDTO;
import com.shop.shop.service.CartService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@Log4j2
@RequestMapping("/api/cart")
public class CartController {

    private final CartService cartService;

    // 카트 등록
    @PostMapping("/add")
    public ResponseEntity<CartDTO> registerCart(@RequestBody CartDTO cartDTO) {
        CartDTO registerCart = cartService.registerCart(cartDTO);
        return ResponseEntity.ok(registerCart);
    }

    // 회원Id를 기준으로 카트 조회
    @GetMapping("/{memberId}")
    public ResponseEntity<List<CartDTO>> getCartByMemberId(@PathVariable("memberId") Long memberId) {
        List<CartDTO> getCartByMemberId = cartService.getCartList(memberId);
        return ResponseEntity.ok(getCartByMemberId);
    }

}
