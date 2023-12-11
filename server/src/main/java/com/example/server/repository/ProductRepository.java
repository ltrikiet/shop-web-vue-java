package com.example.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.server.entity.Product;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
    List<Product> findAllByActiveTrue();

    @Query(value = "SELECT * \n" +
            "FROM product \n" +
            "WHERE product.active = true \n" +
            "ORDER BY product.created_at DESC\n" +
            "LIMIT :quantity",
        nativeQuery = true)
    List<Product> findTopActiveProducts(Integer quantity);
}
