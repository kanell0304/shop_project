package com.shop.shop.service;

import com.shop.shop.domain.category.Category;
import com.shop.shop.domain.category.CategoryItem;
import com.shop.shop.domain.item.Item;
import com.shop.shop.dto.CategoryItemDTO;
import com.shop.shop.repository.CategoryItemRepository;
import com.shop.shop.repository.CategoryRepository;
import com.shop.shop.repository.ItemRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CategoryItemServiceImpl implements CategoryItemService {

    private final CategoryRepository categoryRepository;
    private final CategoryItemRepository categoryItemRepository;
    private final ItemRepository itemRepository;

    // 상품과 카테고리를 연결해주는 메서드
    @Override
    public CategoryItemDTO registerCategoryItem(Item item, Long categoryId) {
        Category category = categoryRepository.findById(categoryId).orElseThrow(() -> new RuntimeException("해당 카테고리를 찾을 수 없습니다."));
        Item item1 = itemRepository.findById(item.getId()).orElseThrow(() -> new RuntimeException("해당 아이템을 찾을 수 없습니다."));
        CategoryItem categoryItem = new CategoryItem();
        categoryItem.changeCategoryItem(category, item1);
        CategoryItem savedCategoryItem = categoryItemRepository.save(categoryItem);
        return new CategoryItemDTO(savedCategoryItem);
    }

}
