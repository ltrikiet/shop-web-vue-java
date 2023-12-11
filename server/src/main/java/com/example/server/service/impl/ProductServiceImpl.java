package com.example.server.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import com.example.server.entity.Product;
import com.example.server.repository.ProductRepository;
import com.example.server.service.ProductService;

@Service
public class ProductServiceImpl implements ProductService {
    @Autowired
    private ProductRepository productRepository;

    @Override
    public List<Product> getAllProduct() {
        return productRepository.findAll();
    }

    @Override
    public List<Product> getAllActiveProduct() {
        return productRepository.findAllByActiveTrue();
    }

    @Override
    public List<Product> getLatestProducts(Integer quantity) {
        return productRepository.findTopActiveProducts(quantity);
    }

    @Override
    public Product getProductById(Long id) {
        return productRepository.findById(id).orElseThrow(() -> {
            return new EmptyResultDataAccessException(1);
        });
    }

    @Override
    public Product createProduct(Product product) {
        return productRepository.save(product);
    }

    @Override
    public Product updateProduct(Long id, Product product) {
        Product curProduct = productRepository.findById(id).orElseThrow(() -> {
            return new EmptyResultDataAccessException(1);
        });
        curProduct.setFullName(product.getFullName());
        curProduct.setDescription(product.getDescription());
        curProduct.setPicture(product.getPicture());
        curProduct.setSupplier(product.getSupplier());
        curProduct.setCategory(product.getCategory());
        curProduct.setPrice(product.getPrice());
        curProduct.setStocks(product.getStocks());
        curProduct.setDiscount(product.getDiscount());
        curProduct.setDiscountAvailable(product.getDiscountAvailable());
        curProduct.setRanking(product.getRanking());
        curProduct.setNotes(product.getNotes());
        curProduct.setActive(product.getActive());
        curProduct.setCreatedAt(product.getCreatedAt());
        curProduct.setUpdatedAt(product.getUpdatedAt());
        return productRepository.save(curProduct);
    }

    @Override
    public void deleteProduct(Long id) {
        Product curProduct = productRepository.findById(id).orElseThrow(() -> {
            return new EmptyResultDataAccessException(1);
        });
        curProduct.setActive(false);
        productRepository.save(curProduct);
    }

}
