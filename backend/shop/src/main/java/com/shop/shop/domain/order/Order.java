package com.shop.shop.domain.order;

import com.shop.shop.domain.delivery.Delivery;
import com.shop.shop.domain.member.Member;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "Orders")
@Builder
public class Order {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "order_id")
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id")
    private Member member;

    private LocalDateTime orderDate;
    private int totalAmount;

    @Enumerated(EnumType.STRING)
    private OrderStatus orderStatus;

    private boolean delFlag;

    @Column(nullable = false)
    private String payerName;
    @Column(nullable = false)
    private String payerNumber;

    @Lob
    private String orderRequest;

    @Enumerated(EnumType.STRING)
    private PaymentMethod paymentMethod;

    @Column(nullable = false)
    private String recipientName;
    @Column(nullable = false)
    private String recipientNumber;

    @Column(nullable = false)
    private String recipient_zip_code;
    @Column(nullable = false)
    private String recipient_default_address;
    @Column(nullable = false)
    private String recipient_detailed_address;

}
