package com.shop.shop.controller;

import com.shop.shop.domain.category.Category;
import com.shop.shop.dto.CategoryDTO;
import com.shop.shop.repository.CategoryRepository;
import com.shop.shop.service.CategoryService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequiredArgsConstructor
@Log4j2
@RequestMapping("/api/category")
public class CategoryController {

    private final CategoryRepository categoryRepository;
    private final CategoryService categoryService;

    // 카테고리 등록
    @PostMapping("/add")
    public ResponseEntity<CategoryDTO> registerCategory(@RequestBody CategoryDTO categoryDTO) {
        CategoryDTO savedCategory = categoryService.registerCategory(categoryDTO);
        return ResponseEntity.ok(savedCategory);
    }

    // 카테고리 모두 조회
    @GetMapping("/list")
    public ResponseEntity<List<Category>> getAllCategory() {
        List<Category> category = categoryRepository.findAllParentCategory();
        return ResponseEntity.ok(category);
    }

    // 카테고리 모두 조회(페이징)
    @GetMapping("/listPage")
    public ResponseEntity<Page<List<Category>>> getAllCategoryWithPage(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size
    ) {
        Pageable pageable = PageRequest.of(page, size);
        Page<List<Category>> category = categoryService.getAllCategory(pageable);
        return ResponseEntity.ok(category);
    }

    // 특정 카테고리 조회
    @GetMapping("/{id}")
    public ResponseEntity<Category> getCategory(@PathVariable Long id) {
        Category category = categoryRepository.findOneParentCategory(id);
        return ResponseEntity.ok(category);
    }

    // 특정 카테고리 조회 (페이징)
    @GetMapping("/page/{id}")
    public ResponseEntity<Page<Category>> getCategoryWithPage(
            @PathVariable Long id,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size
    ) {
        Pageable pageable = PageRequest.of(page, size);
        Page<Category> category = categoryService.getAllItemsFromCategory(pageable, id);
        return ResponseEntity.ok(category);
    }

    // 카테고리 수정
    @PutMapping("/edit")
    public ResponseEntity<CategoryDTO> editCategory(@RequestBody CategoryDTO categoryDTO) {
        CategoryDTO editedCategory = categoryService.editCategory(categoryDTO);
        return ResponseEntity.ok(editedCategory);
    }

    // 카테고리 삭제
    @DeleteMapping("/{id}")
    public ResponseEntity<Map<String, String>> deleteCategory(@PathVariable Long id) {
        try {
            categoryService.deleteCategory(id);
            Map<String, String> response = Map.of("result", "success");
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            Map<String, String> response = Map.of("result", "fail", "error", e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }

}
