package com.shop.shop.service;

import com.shop.shop.domain.cart.Cart;
import com.shop.shop.domain.item.Item;
import com.shop.shop.domain.member.Member;
import com.shop.shop.dto.CartDTO;
import com.shop.shop.dto.ItemDTO;
import com.shop.shop.repository.CartRepository;
import com.shop.shop.repository.ItemRepository;
import com.shop.shop.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CartServiceImpl implements CartService{

    private final CartRepository cartRepository;
    private final MemberRepository memberRepository;
    private final ItemRepository itemRepository;

    // 장바구니 등록하기
    public CartDTO registerCart(CartDTO cartDTO) {
        Member member = memberRepository.findById(cartDTO.getMemberId()).orElseThrow(() -> new RuntimeException("해당 회원을 찾을 수 없습니다."));
        Item item = itemRepository.findById(cartDTO.getItem().getId()).orElseThrow(() -> new RuntimeException("해당 상품을 찾을 수 없습니다."));

        Cart cart = new Cart();
        cart.changeQty(cartDTO.getQty());
        cart.registerCart(member, item);
        Cart savedCart = cartRepository.save(cart);
        return new CartDTO(savedCart);
    }

    // 회원Id를 기준으로 장바구니 불러오기
    @Override
    public List<CartDTO> getCartList(Long memberId) {
        Member member = memberRepository.findById(memberId)
                .orElseThrow(() -> new IllegalArgumentException("존재하지 않는 회원입니다."));

        return cartRepository.findByMember(member).stream()
                .map(cart -> {
                    Item item = cart.getItem();

                    // DTO 변환 - ItemDTO 생성자 활용
                    ItemDTO itemDTO = new ItemDTO(
                            item,
                            item.getImages(),
                            item.getOptions(),
                            item.getInfo()
                    );

                    return new CartDTO(
                            cart.getCartId(),
                            member.getId(),
                            cart.getQty(),
                            item
                    );
                })
                .toList();
    }

}
