package com.shop.shop.dto;

import com.shop.shop.domain.category.CategoryItem;
import jakarta.persistence.Column;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CategoryItemDTO {

    @Column(name = "category_item_id")
    private Long CategoryItemId;

    @Column(name = "category_id")
    private Long categoryId;

    @Column(name = "item_id")
    private Long itemId;

    public CategoryItemDTO(CategoryItem categoryItem) {
        this.CategoryItemId = categoryItem.getId();
        this.categoryId = categoryItem.getCategory().getId();
        this.itemId = categoryItem.getItem().getId();
    }
}
