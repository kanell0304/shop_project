package com.shop.shop.dto;

import com.shop.shop.domain.category.Category;
import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;
import java.util.stream.Collectors;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CategoryDTO {

    @Column(name = "category_id")
    private Long categoryId;

    @Column(name = "category_name")
    private String categoryName;

    @Column(name = "parent_id")
    private Long parentId;

    @Column(name = "child_id")
    private List<Long> childId;

    @Column(name = "view_status")
    private boolean viewStatus;

    // 엔티티를 DTO 로 변환하는 생성자
    public CategoryDTO(Category category) {
        this.categoryId = category.getId();
        this.categoryName = category.getCategoryName();
        this.parentId = (category.getParent() != null) ? category.getParent().getId() : null;
        this.childId = category.getChild().stream().map(Category::getId).collect(Collectors.toList());
        this.viewStatus = category.isViewStatus();
    }
}
