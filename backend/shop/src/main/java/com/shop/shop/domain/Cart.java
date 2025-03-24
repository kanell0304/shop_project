package com.shop.shop.domain;

import com.shop.shop.domain.Item.Item;
import com.shop.shop.domain.Member.Member;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class Cart {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "cart_id")
    private Long id;

    @OneToOne(fetch = FetchType.LAZY, cascade = CascadeType.PERSIST)
    private Member member;

    private int qty;
    private int orderPrice;

    @OneToMany(mappedBy = "item_id")
    private Item item;

    private boolean delFlag;

}
