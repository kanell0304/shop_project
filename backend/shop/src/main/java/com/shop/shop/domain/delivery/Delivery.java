package com.shop.shop.domain.delivery;

import com.shop.shop.domain.member.Address;
import com.shop.shop.domain.order.Order;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class Delivery {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "delivery_id")
    private Long id;

    @Embedded
    private Address address;

    @Enumerated(EnumType.STRING)
    private DeliveryStatus status;

    @Column(nullable = false)
    private int transportNumber;

    @OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.PERSIST)
    @JoinColumn(name = "order_id")
    private Order order;


    public void changeAddress(Address address) {
        this.address = address;
    }

    public void changeStatus(DeliveryStatus status) {
        this.status = status;
    }

    public void changeTransportNumber(int transportNumber) {
        this.transportNumber = transportNumber;
    }

}
