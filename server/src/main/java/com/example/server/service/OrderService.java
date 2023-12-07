package com.example.server.service;

import java.util.List;

import com.example.server.entity.Order;
import com.example.server.entity.OrderDetails;

public interface OrderService {
    List<Order> getAllOrder();

    OrderDetails getOrderDetailsById(Long id);

    Order createOrder(Order order);

    Order updateOrder(Long id, Order order);

    void deleteOrder(Long id);
}
