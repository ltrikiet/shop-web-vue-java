package com.example.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.server.entity.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

}