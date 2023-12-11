package com.example.server.controller;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

import com.example.server.entity.OrderDetails;
import com.example.server.entity.Product;
import com.example.server.entity.User;
import com.example.server.payload.request.OrderRequest;
import com.example.server.repository.OrderDetailsRepository;
import com.example.server.service.ProductService;
import com.example.server.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.server.entity.Order;
import com.example.server.service.OrderService;

@RestController
@RequestMapping("/api/v1/order")
public class OrderController {
    @Autowired
    private OrderService orderService;

    @Autowired
    private UserService userService;

    @Autowired
    private ProductService productService;
    
    @Autowired
    private OrderDetailsRepository orderDetailsRepository;

    @GetMapping
    public ResponseEntity<List<Order>> getAllOrder() {
        return new ResponseEntity<>(orderService.getAllOrder(), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<?> createOrder(@RequestBody OrderRequest orderRequest) {
        User user = userService.getUserByEmail(orderRequest.getEmail());
        Order newOrder = orderService.createOrder(new Order(null, user, orderRequest.getPaymentMethod(), null, null,
                false, false, new Date(), new Date()));

        List<OrderDetails> orderDetailsList = orderRequest.getCartProducts().stream().map((item) -> {
            Product product =  productService.getProductById(item.getProductId());
            return new OrderDetails(null, product, newOrder, product.getPrice(), item.getQuantity(), null, product.getPrice() * item.getQuantity());
        }).collect(Collectors.toList());

        orderDetailsRepository.saveAll(orderDetailsList);

        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Order> updateOrder(@PathVariable("id") Long id, @RequestBody Order order) {
        return new ResponseEntity<>(orderService.updateOrder(id, order), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteOrder(@PathVariable("id") Long id, @RequestBody Order order) {
        orderService.deleteOrder(id);
        return new ResponseEntity<>("Delete successful!", HttpStatus.OK);
    }

    @GetMapping("/{id}/details")
    public ResponseEntity<OrderDetails> getOrderDetailsById(@PathVariable("id") Long id) {
        return new ResponseEntity<>(orderService.getOrderDetailsById(id), HttpStatus.OK);
    }
}
