package com.example.server.service;

import java.util.List;

import com.example.server.entity.Product;

public interface ProductService {
    List<Product> getAllProduct();

    List<Product> getLatestFiveProducts();

    Product createProduct(Product product);

    Product updateProduct(Long id, Product product);

    void deleteProduct(Long id);
}
