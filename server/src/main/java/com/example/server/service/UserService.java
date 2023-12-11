package com.example.server.service;

import java.util.List;

import com.example.server.entity.User;

public interface UserService {
    List<User> getAllUser();

    User getUserByEmail(String email);

    User createUser(User user);

    User updateUser(Long id, User user);

    void deleteUser(Long id);
}
