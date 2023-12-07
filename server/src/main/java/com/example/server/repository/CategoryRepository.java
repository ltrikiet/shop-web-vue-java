package com.example.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.server.entity.Category;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {

}
