package com.example.server.service;

import java.util.List;

import com.example.server.entity.Category;

public interface CategoryService {
    List<Category> getAllCategory();

    Category createCategory(Category category);

    Category updateCategory(Long id, Category category);

    void deleteCategory(Long id);
}
