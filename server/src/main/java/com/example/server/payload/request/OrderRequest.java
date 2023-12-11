package com.example.server.payload.request;

import java.util.List;

public class OrderRequest {
    public static class CartProduct {
        private Long productId;
        private Integer quantity;

        CartProduct() {}

        CartProduct(Long productId, Integer quantity) {
            this.productId = productId;
            this.quantity = quantity;
        }

        public Long getProductId() {
            return productId;
        }

        public void setProductId(Long productId) {
            this.productId = productId;
        }

        public Integer getQuantity() {
            return quantity;
        }

        public void setQuantity(Integer quantity) {
            this.quantity = quantity;
        }
    }
    private String email;

    private String paymentMethod;

    private List<CartProduct> cartProducts;

    public OrderRequest() {}

    public OrderRequest(String email, String paymentMethod, List<CartProduct> cartProducts) {
        this.email = email;
        this.paymentMethod = paymentMethod;
        this.cartProducts = cartProducts;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPaymentMethod() {
        return paymentMethod;
    }

    public void setPaymentMethod(String paymentMethod) {
        this.paymentMethod = paymentMethod;
    }

    public List<CartProduct> getCartProducts() {
        return cartProducts;
    }

    public void setCartProducts(List<CartProduct> cartProducts) {
        this.cartProducts = cartProducts;
    }
}
