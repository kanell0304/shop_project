package com.shop.shop.dto;

import com.shop.shop.domain.delivery.Delivery;
import com.shop.shop.domain.member.Member;
import com.shop.shop.domain.order.Order;
import com.shop.shop.domain.order.OrderStatus;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class OrderDTO {

    private Long id;
    private Member member;
    private Delivery delivery;
    private LocalDateTime orderDate;
    private OrderStatus orderStatus;

    // Order 를 OrderDTO 로 변환
    public OrderDTO(Order order) {
        this.id = order.getId();
        this.member = order.getMember();
        this.delivery = order.getDelivery();
        this.orderDate = order.getOrderDate();
        this.orderStatus = order.getStatus();
    }

}
