package com.example.server.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import com.example.server.entity.Category;
import com.example.server.repository.CategoryRepository;
import com.example.server.service.CategoryService;

@Service
public class CategoryServiceImpl implements CategoryService {
    @Autowired
    private CategoryRepository categoryRepository;

    @Override
    public List<Category> getAllCategory() {
        return categoryRepository.findAll();
    }

    @Override
    public Category createCategory(Category category) {
        return categoryRepository.save(category);
    }

    @Override
    public Category updateCategory(Long id, Category category) {
        Category curCategory = categoryRepository.findById(id).orElseThrow(() -> {
            return new EmptyResultDataAccessException(1);
        });
        curCategory.setFullName(category.getFullName());
        curCategory.setDescription(category.getDescription());
        curCategory.setPicture(category.getPicture());
        curCategory.setActive(category.getActive());
        curCategory.setCreatedAt(category.getCreatedAt());
        curCategory.setUpdatedAt(category.getUpdatedAt());
        return categoryRepository.save(curCategory);
    }

    @Override
    public void deleteCategory(Long id) {
        Category curCategory = categoryRepository.findById(id).orElseThrow(() -> {
            return new EmptyResultDataAccessException(1);
        });
        curCategory.setActive(false);
        categoryRepository.save(curCategory);
    }

}
