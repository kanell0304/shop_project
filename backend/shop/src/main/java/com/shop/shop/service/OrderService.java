package com.shop.shop.service;

import com.shop.shop.domain.order.Order;
import com.shop.shop.dto.OrderDTO;

import java.time.LocalDateTime;
import java.util.List;

public interface OrderService {

    public List<OrderDTO> findAllByMemberEmail(String email);

    public OrderDTO findByDeliveryId(Long deliveryId);

    public List<OrderDTO> findByDuringPeriod(LocalDateTime orderDate1, LocalDateTime orderDate2);

    public List<OrderDTO> findByDuringPeriodFromMemberId(Long memberId, LocalDateTime orderDate1, LocalDateTime orderDate2);

}
