package com.example.server.controller;

import com.example.server.entity.Product;
import com.example.server.repository.ProductRepository;
import com.example.server.service.ProductService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@SpringBootTest
public class ProductControllerTests {
    @MockBean
    private ProductRepository productRepository;

    @Autowired
    private ProductService productService;

    @Test
    void testGetAllProduct() {
        Date testDate = new Date("01/01/1970");

        List<Product> products = new ArrayList<>();
        products.add(new Product(1L, "Product1", "Product1 description", "uploads\\folder\\somePic1", null, null, 1000F, 100, null, false, 4, null, true, testDate,
                testDate));
        products.add(new Product(2L, "Product2", "Product2 description", "uploads\\folder\\somePic1", null, null, 1000F, 100, null, false, 4, null, true, testDate,
                testDate));

        when(productRepository.findAll()).thenReturn(products);

        List<Product> returnProducts = productService.getAllProduct();

        assertThat(returnProducts).hasSize(2);
        assertThat(returnProducts.get(0).getId()).isEqualTo(1L);
        assertThat(returnProducts.get(0).getFullName()).isEqualTo("Product1");
        assertThat(returnProducts.get(1).getId()).isEqualTo(2L);
        assertThat(returnProducts.get(1).getFullName()).isEqualTo("Product2");
    }

    @Test
    void testCreateProduct() {
        Date testDate = new Date("01/01/1970");
        Product newProduct = new Product(1L, "Product", "Product1 description", "uploads\\folder\\somePic1", null, null, 1000F, 100, null, false, 4, null, true, testDate,
                testDate);

        when(productRepository.save(any(Product.class))).thenAnswer(invocation -> {
            Product entity = invocation.getArgument(0);
            entity.setId(1L);
            return entity;
        });

        Product product = productService.createProduct(newProduct);

        assertThat(product.getId()).isEqualTo(1);
        assertThat(product.getFullName()).isEqualTo("Product");
    }

    @Test
    void testUpdateProduct() {
        Long id = 1L;
        Date testDate = new Date("01/01/1970");
        Product product = new Product(1L, "Product", "Product1 description", "uploads\\folder\\somePic1", null, null, 1000F, 100, null, false, 4, null, true, testDate,
                testDate);

        when(productRepository.findById(id)).thenReturn(Optional.of(product));
        when(productRepository.save(any(Product.class))).thenAnswer(invocation -> invocation.getArgument(0));

        Product requestData = new Product(1L, "Product1", "Product1 description", "uploads\\folder\\somePic1", null, null, 1000F, 100, null, false, 4, null, true, testDate,
                testDate);

        Product updatedProduct = productService.updateProduct(id, requestData);

        assertThat(updatedProduct.getId()).isEqualTo(id);
        assertThat(updatedProduct.getFullName()).isEqualTo(requestData.getFullName());
    }

    @Test
    void testDeleteProduct() {
        Long id = 1L;
        Date testDate = new Date("01/01/1970");
        Product product = new Product(1L, "Product1", "Product1 description", "uploads\\folder\\somePic1", null, null, 1000F, 100, null, false, 4, null, true, testDate,
                testDate);

        when(productRepository.findById(id)).thenReturn(Optional.of(product));
        when(productRepository.save(any(Product.class))).thenAnswer(invocation -> invocation.getArgument(0));

        productService.deleteProduct(id);
        verify(productRepository, times(1)).findById(id);
        verify(productRepository, times(1)).save(product);

        Product result = productRepository.findById(id).get();
        assertThat(result.getActive()).isEqualTo(false);
    }
}
