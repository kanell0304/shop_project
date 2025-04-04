package com.shop.shop.service;

import com.shop.shop.dto.CategoryDTO;

public interface CategoryService {

    CategoryDTO registerCategory(CategoryDTO categoryDTO);
    CategoryDTO editCategory(CategoryDTO categoryDTO);
    void deleteCategory(Long id);

}
