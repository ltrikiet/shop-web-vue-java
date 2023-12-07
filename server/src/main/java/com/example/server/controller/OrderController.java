package com.example.server.controller;

import java.util.List;

import com.example.server.entity.OrderDetails;
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

    @GetMapping
    public ResponseEntity<List<Order>> getAllOrder() {
        return new ResponseEntity<>(orderService.getAllOrder(), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Order> createOrder(@RequestBody Order order) {
        return new ResponseEntity<>(orderService.createOrder(order), HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Order> updateOrder(@PathVariable Long id, @RequestBody Order order) {
        return new ResponseEntity<>(orderService.updateOrder(id, order), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteOrder(@PathVariable Long id, @RequestBody Order order) {
        orderService.deleteOrder(id);
        return new ResponseEntity<>("Delete successful!", HttpStatus.OK);
    }

    @GetMapping("/{id}/details")
    public ResponseEntity<OrderDetails> getOrderDetailsById(@PathVariable Long id) {
        return new ResponseEntity<>(orderService.getOrderDetailsById(id), HttpStatus.OK);
    }
}
