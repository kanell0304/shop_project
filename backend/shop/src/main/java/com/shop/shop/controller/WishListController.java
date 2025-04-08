package com.shop.shop.controller;

import com.shop.shop.dto.WishListDTO;
import com.shop.shop.repository.WishListRepository;
import com.shop.shop.service.WishListService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequiredArgsConstructor
@Log4j2
@RequestMapping("/api/wish")
public class WishListController {

    private final WishListRepository wishListRepository;
    private final WishListService wishListService;

    // 관심 등록
    @PostMapping("/add")
    public ResponseEntity<WishListDTO> registerInterest(@RequestBody WishListDTO wishListDTO) {
        WishListDTO savedWishList = wishListService.registerInterest(wishListDTO);
        return ResponseEntity.ok(savedWishList);
    }

    // 특정 회원 관심 목록 조회
    @GetMapping("/{memberId}")
    public ResponseEntity<List<WishListDTO>> getWishListByMember(@PathVariable Long memberId) {
        List<WishListDTO> wishList = wishListService.getWishListByMemberId(memberId);
        return ResponseEntity.ok(wishList);
    }

    // 관심 상품 삭제
    @DeleteMapping("/{wishListId}")
    public ResponseEntity<?> deleteItemFromWishList(@PathVariable("wishListId") Long wishListId) {
        try {
            wishListService.deleteItemFromWishList(wishListId);
            Map<String, String> response = Map.of("result", "success");
            return ResponseEntity.ok(response);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(Map.of("result","fail","error",e.getMessage()));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(Map.of("result","fail","error",e.getMessage()));
        }
    }

}
