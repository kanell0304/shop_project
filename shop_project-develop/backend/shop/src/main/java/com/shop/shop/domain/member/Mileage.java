package com.shop.shop.domain.member;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class Mileage {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "mileage_id")
    private Long id;

    private int amount;
    private LocalDateTime mileage_date;
    private boolean mileage_status;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id")
    private Member member;

//    @OneToOne(fetch = FetchType.LAZY)
//    @JoinColumn(name = "orders_id")
//    private Orders orders;

}
