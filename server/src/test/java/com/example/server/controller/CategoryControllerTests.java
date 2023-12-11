package com.example.server.controller;

import com.example.server.entity.Category;
import com.example.server.repository.CategoryRepository;
import com.example.server.service.CategoryService;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@SpringBootTest
public class CategoryControllerTests {
    @MockBean
    private CategoryRepository categoryRepository;

    @Autowired
    private CategoryService categoryService;

    @Test
    void testGetAllCategory() {
        Date testDate = new Date("01/01/1970");

        List<Category> categories = new ArrayList<>();
        categories.add(new Category(1L, "Category1", "Category1 description", "uploads\\folder\\image1", true, testDate,
                testDate));
        categories.add(new Category(2L, "Category2", "Category2 description", "uploads\\folder\\image2", true, testDate,
                testDate));

        when(categoryRepository.findAll()).thenReturn(categories);

        List<Category> returnCategories = categoryService.getAllCategory();

        assertThat(returnCategories).hasSize(2);
        assertThat(returnCategories.get(0).getId()).isEqualTo(1L);
        assertThat(returnCategories.get(0).getFullName()).isEqualTo("Category1");
        assertThat(returnCategories.get(1).getId()).isEqualTo(2L);
        assertThat(returnCategories.get(1).getFullName()).isEqualTo("Category2");
    }

    @Test
    void testCreateCategory() {
        Date testDate = new Date("01/01/1970");
        Category newCategory = new Category(null, "Category", "Category description", "uploads\\folder\\image", true, testDate,
                testDate);

        when(categoryRepository.save(any(Category.class))).thenAnswer(invocation -> {
            Category entity = invocation.getArgument(0);
            entity.setId(1L);
            return entity;
        });

        Category category = categoryService.createCategory(newCategory);

        assertThat(category.getId()).isEqualTo(1);
        assertThat(category.getFullName()).isEqualTo("Category");
    }

    @Test
    void testUpdateCategory() {
        Long id = 1L;
        Date testDate = new Date("01/01/1970");
        Category category = new Category(id, "Category", "Category description", "uploads\\folder\\image", true, testDate,
                testDate);

        when(categoryRepository.findById(id)).thenReturn(Optional.of(category));
        when(categoryRepository.save(any(Category.class))).thenAnswer(invocation -> invocation.getArgument(0));

        Category requestData = new Category(id, "New Name", "Category description", "uploads\\folder\\image", true, testDate,
                testDate);

        Category updatedCategory = categoryService.updateCategory(id, requestData);

        assertThat(updatedCategory.getId()).isEqualTo(id);
        assertThat(updatedCategory.getFullName()).isEqualTo(requestData.getFullName());
    }

    @Test
    void testDeleteCategory() {
        Long id = 1L;
        Date testDate = new Date("01/01/1970");
        Category category = new Category(id, "Category", "Category description", "uploads\\folder\\image", true, testDate,
                testDate);

        when(categoryRepository.findById(id)).thenReturn(Optional.of(category));
        when(categoryRepository.save(any(Category.class))).thenAnswer(invocation -> invocation.getArgument(0));

        categoryService.deleteCategory(id);
        verify(categoryRepository, times(1)).findById(id);
        verify(categoryRepository, times(1)).save(category);

        Category result = categoryRepository.findById(id).get();
        assertThat(result.getActive()).isEqualTo(false);
    }
}
