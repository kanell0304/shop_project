package com.shop.shop.service;

import com.shop.shop.domain.cart.Cart;
import com.shop.shop.domain.item.Item;
import com.shop.shop.domain.item.ItemOption;
import com.shop.shop.domain.member.Member;
import com.shop.shop.dto.CartDTO;
import com.shop.shop.dto.ItemDTO;
import com.shop.shop.repository.CartRepository;
import com.shop.shop.repository.ItemOptionRepository;
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
    private final ItemOptionRepository itemOptionRepository;

    // 장바구니 등록하기
    public CartDTO registerCart(CartDTO cartDTO, Long optionId) {
        Member member = memberRepository.findById(cartDTO.getMemberId()).orElseThrow(() -> new RuntimeException("해당 회원을 찾을 수 없습니다."));
        Item item = itemRepository.findById(cartDTO.getItemId()).orElseThrow(() -> new RuntimeException("해당 상품을 찾을 수 없습니다."));
        ItemOption option = itemOptionRepository.findById(optionId).orElseThrow(() -> new IllegalArgumentException("해당 옵션이 존재하지 않습니다."));

        Cart duplicatePrevention  = cartRepository.findByMemberIdAndItemId(member.getId(), item.getId());

        if (duplicatePrevention != null) {
            throw new RuntimeException("이미 등록된 상품입니다.");
        }

        Cart cart = new Cart();
        cart.registerCart(member, item, option);
        cart.changeQty(cartDTO.getQty());

        cartRepository.save(cart);
        return new CartDTO(cart);
    }

    // 회원Id를 기준으로 장바구니 불러오기
    @Override
    public List<CartDTO> getCartList(Long memberId) {
        Member member = memberRepository.findById(memberId)
                .orElseThrow(() -> new IllegalArgumentException("존재하지 않는 회원입니다."));

        List<CartDTO> cartList = cartRepository.findAllByMemberId(member.getId());

        return cartList;
    }

    // 회원Id와 상품Id를 기준으로 장바구니 데이터 삭제
    @Override
    public void deleteCartItem(CartDTO cartDTO) {
        Member member = memberRepository.findById(cartDTO.getMemberId()).orElseThrow(() -> new RuntimeException("해당 회원을 찾을 수 없습니다."));
        Cart cartItem = cartRepository.findByMemberIdAndItemId(member.getId(), cartDTO.getItemId());

        if (cartItem == null) {
            throw new RuntimeException("삭제하려는 상품이 장바구니에 존재하지 않습니다.");
        }

        cartRepository.deleteById(cartItem.getId());
    }
}
