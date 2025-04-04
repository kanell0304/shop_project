package com.shop.shop.repository;

import com.shop.shop.domain.category.CategoryItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoryItemRepository extends JpaRepository<CategoryItem, Long> {
}
