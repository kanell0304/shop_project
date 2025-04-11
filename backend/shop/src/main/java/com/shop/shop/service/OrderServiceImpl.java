package com.shop.shop.service;

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
public class OrderServiceImpl implements OrderService{

    private final OrderRepository orderRepository;
    private final DeliveryRepository deliveryRepository;
    private final MemberRepository memberRepository;

    @Override
    public List<OrderDTO> findAllByMemberEmail(String email) {
        return List.of();
    }

    @Override
    public OrderDTO findByDeliveryId(Long deliveryId) {
        return null;
    }

    @Override
    public List<OrderDTO> findByDuringPeriod(LocalDateTime orderDate1, LocalDateTime orderDate2) {
        return List.of();
    }

    @Override
    public List<OrderDTO> findByDuringPeriodFromMemberId(Long memberId, LocalDateTime orderDate1, LocalDateTime orderDate2) {
        return List.of();
    }
}
