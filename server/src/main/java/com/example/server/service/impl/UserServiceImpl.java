package com.example.server.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.server.entity.User;
import com.example.server.repository.UserRepository;
import com.example.server.service.UserService;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public List<User> getAllUser() {
        return userRepository.findAll();
    }

    @Override
    public User createUser(User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepository.save(user);
    }

    @Override
    public User updateUser(Long id, User user) {
        User curUser = userRepository.findById(id).orElseThrow(() -> {
            return new EmptyResultDataAccessException(1);
        });
        curUser.setFullName(user.getFullName());
        curUser.setAddress(user.getAddress());
        curUser.setCity(user.getCity());
        curUser.setPhone(user.getPhone());
        curUser.setEmail(user.getEmail());
        curUser.setPassword(passwordEncoder.encode(user.getPassword()));
        curUser.setCreatedAt(user.getCreatedAt());
        curUser.setUpdatedAt(user.getUpdatedAt());
        return userRepository.save(curUser);
    }

    @Override
    public void deleteUser(Long id) {
        User curUser = userRepository.findById(id).orElseThrow(() -> {
            return new EmptyResultDataAccessException(1);
        });
        curUser.setActive(false);
        userRepository.save(curUser);
    }

}
