package com.shop.shop.dto;

import com.shop.shop.domain.delivery.Delivery;
import com.shop.shop.domain.member.Member;
import com.shop.shop.domain.order.Order;
import com.shop.shop.domain.order.OrderStatus;
import com.shop.shop.domain.order.PaymentMethod;
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
    private Long memberId;
    private LocalDateTime orderDate;
    private int totalAmount;
    private OrderStatus orderStatus;
    private boolean delFlag;
    private String payerName;
    private String payerNumber;
    private String orderRequest;
    private PaymentMethod paymentMethod;
    private String recipientName;
    private String recipientNumber;
    private String recipient_zip_code;
    private String recipient_default_address;
    private String recipient_detailed_address;

    private LocalDateTime startDate;
    private LocalDateTime endDate;

    private Delivery delivery;

    // Order 를 OrderDTO 로 변환
    public OrderDTO(Order order) {
        this.id = order.getId();
        this.memberId = order.getMember().getId();
        this.orderDate = order.getOrderDate();
        this.totalAmount = order.getTotalAmount();
        this.orderStatus = order.getOrderStatus();
        this.delFlag = order.isDelFlag();
        this.payerName = order.getPayerName();
        this.payerNumber = order.getPayerNumber();
        this.orderRequest = order.getOrderRequest();
        this.paymentMethod = order.getPaymentMethod();
        this.recipientName = order.getRecipientName();
        this.recipientNumber = order.getRecipientNumber();
        this.recipient_zip_code = order.getRecipient_zip_code();
        this.recipient_default_address = order.getRecipient_default_address();
        this.recipient_detailed_address = order.getRecipient_detailed_address();
        this.delivery = order.getDelivery();
    }

}
