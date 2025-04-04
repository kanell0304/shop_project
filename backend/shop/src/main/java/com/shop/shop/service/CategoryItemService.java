package com.shop.shop.service;

import com.shop.shop.domain.item.Item;
import com.shop.shop.dto.CategoryItemDTO;
import com.shop.shop.dto.ItemDTO;

public interface CategoryItemService {

    CategoryItemDTO registerCategoryItem(Item item, Long categoryId);

}
