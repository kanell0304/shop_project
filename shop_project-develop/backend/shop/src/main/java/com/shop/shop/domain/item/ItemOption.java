package com.shop.shop.domain.item;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ItemOption {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="item_option_id")
    private Long id;

    @Column(name = "option_name")
    private String optionName;

    @Column(name = "option_value")
    private String optionValue;

    @Column(name = "item_id")
    private Long itemId;

    public ItemOption(String optionName, String optionValue) {
        this.optionName = optionName;
        this.optionValue = optionValue;
    }
}