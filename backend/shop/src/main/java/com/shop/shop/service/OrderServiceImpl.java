package com.shop.shop.service;

import com.shop.shop.domain.member.Member;
import com.shop.shop.domain.order.Order;
import com.shop.shop.dto.OrderDTO;
import com.shop.shop.repository.DeliveryRepository;
import com.shop.shop.repository.MemberRepository;
import com.shop.shop.repository.OrderRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class OrderServiceImpl implements OrderService {

    private final OrderRepository orderRepository;
    private final DeliveryRepository deliveryRepository;
    private final MemberRepository memberRepository;

    // 회원 이메일로 주문 모두 조회
    @Override
    public List<OrderDTO> findAllByMemberEmail(String email) {
        Member member = memberRepository.findByEmail(email);
        if (member == null) {
            throw new RuntimeException("해당 회원을 찾을 수 없습니다.");
        }

        List<OrderDTO> orderList = orderRepository.findAllByMemberId(member.getId());

        return List.of();
    }

//    @Override
//    public OrderDTO findByDeliveryId(Long deliveryId) {
//        return null;
//    }

    @Override
    public List<OrderDTO> findByDuringPeriod(LocalDateTime orderDate1, LocalDateTime orderDate2) {
        return List.of();
    }

    @Override
    public List<OrderDTO> findByDuringPeriodFromMemberId(Long memberId, LocalDateTime orderDate1, LocalDateTime orderDate2) {
        return List.of();
    }
}
