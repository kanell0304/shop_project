package com.shop.shop.dto;

import com.shop.shop.domain.order.Order;
import com.shop.shop.domain.order.OrderItem;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class OrderItemDTO {

    private int orderPrice;
    private int qty;
    private Long itemId;
    private Long itemOptionId;
    private Long orderId;

    public OrderItemDTO(OrderItem orderItem) {
        this.orderPrice = orderItem.getOrderPrice();
        this.qty = orderItem.getQty();
        this.itemId = orderItem.getItem().getId();
        this.itemOptionId = orderItem.getItemOption().getId();

        // Order가 Lazy 로딩이 아닌 경우에만 활성화하는 방식
        this.orderId = (orderItem.getOrder() != null) ? orderItem.getOrder().getId() : null;
    }

}
