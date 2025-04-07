package com.shop.shop.service;

import com.shop.shop.domain.item.Item;
import com.shop.shop.dto.CategoryItemDTO;
import com.shop.shop.dto.ItemDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface CategoryItemService {

    CategoryItemDTO registerCategoryItem(Item item, Long categoryId);



}
