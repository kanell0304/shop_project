package com.shop.shop.service;

import com.shop.shop.domain.cart.WishList;
import com.shop.shop.domain.item.Item;
import com.shop.shop.domain.member.Member;
import com.shop.shop.dto.WishListDTO;
import com.shop.shop.repository.ItemRepository;
import com.shop.shop.repository.MemberRepository;
import com.shop.shop.repository.WishListRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class WishListServiceImpl implements WishListService {

    private final WishListRepository wishListRepository;
    private final MemberRepository memberRepository;
    private final ItemRepository itemRepository;

    // 관심 등록
    @Override
    public WishListDTO registerInterest(WishListDTO wishListDTO) {
        Member member = memberRepository.findById(wishListDTO.getMemberId()).orElseThrow(() -> new RuntimeException("해당 회원을 찾을 수 없습니다."));
        Item item = itemRepository.findById(wishListDTO.getItemId()).orElseThrow(() -> new RuntimeException("해당 아이템을 찾을 수 없습니다."));
        WishList wishList = new WishList();
        wishList.registerList(member, item);
        wishListRepository.save(wishList);
        return new WishListDTO(wishList);
    }

    // 관심 목록 MemberID를 기준으로 가져오기
    @Override
    public List<WishListDTO> getWishListByMemberId(Long memberId) {
        List<WishList> wishLists = wishListRepository.findWithItemImagesByMemberId(memberId);

        return wishLists.stream()
                .map(WishListDTO::new)
                .toList();
    }

}
