package com.shop.shop.repository;

import com.shop.shop.domain.cart.Cart;
import com.shop.shop.domain.member.Member;
import com.shop.shop.dto.CartDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CartRepository extends JpaRepository<Cart, Long> {

    List<CartDTO> findByMember(Member member);

}
