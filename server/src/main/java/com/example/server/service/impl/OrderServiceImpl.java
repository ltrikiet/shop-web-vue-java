package com.example.server.service.impl;

import java.util.List;

import com.example.server.entity.OrderDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import com.example.server.entity.Order;
import com.example.server.repository.OrderRepository;
import com.example.server.service.OrderService;

@Service
public class OrderServiceImpl implements OrderService {
    @Autowired
    private OrderRepository orderRepository;

    @Override
    public List<Order> getAllOrder() {
        return orderRepository.findAll();
    }

    @Override
    public OrderDetails getOrderDetailsById(Long id) {
        return orderRepository.findOrderDetailsById(id).get(0);
    }

    @Override
    public Order createOrder(Order order) {
        return orderRepository.save(order);
    }

    @Override
    public Order updateOrder(Long id, Order order) {
        Order curOrder = orderRepository.findById(id).orElseThrow(() -> {
            return new EmptyResultDataAccessException(1);
        });
        curOrder.setPaymentMethod(curOrder.getPaymentMethod());
        curOrder.setPaymentDate(curOrder.getPaymentDate());
        curOrder.setRequiredDate(curOrder.getRequiredDate());
        curOrder.setDeleted(curOrder.getDeleted());
        curOrder.setPaid(curOrder.getPaid());
        curOrder.setCreatedAt(curOrder.getCreatedAt());
        curOrder.setUpdatedAt(curOrder.getUpdatedAt());

        return orderRepository.save(curOrder);
    }

    @Override
    public void deleteOrder(Long id) {
        Order curOrder = orderRepository.findById(id).orElseThrow(() -> {
            return new EmptyResultDataAccessException(1);
        });
        curOrder.setDeleted(true);
        orderRepository.save(curOrder);
    }

}
