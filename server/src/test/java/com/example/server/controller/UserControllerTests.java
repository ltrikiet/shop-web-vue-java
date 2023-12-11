package com.example.server.controller;

import com.example.server.entity.Role;
import com.example.server.entity.User;
import com.example.server.enums.ERole;
import com.example.server.repository.UserRepository;
import com.example.server.service.UserService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.util.*;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@SpringBootTest
public class UserControllerTests {
    @MockBean
    private UserRepository userRepository;

    @Autowired
    private UserService userService;

    @Test
    void testGetAllUser() {
        Date testDate = new Date("01/01/1970");
        Set<Role> testRoles = new HashSet<>(List.of(new Role(ERole.ROLE_USER)));

        List<User> users = new ArrayList<>();
        users.add(new User(1L, "User1", "User1 description", "City 1", "Address1", "11111111111", "someEmail@gmail.com", testRoles, true, testDate,
                testDate));
        users.add(new User(2L, "User2", "User2 description", "City 2", "Address2", "11111111111", "someEmail@gmail.com", testRoles, true, testDate,
                testDate));

        when(userRepository.findAll()).thenReturn(users);

        List<User> returnUsers = userService.getAllUser();

        assertThat(returnUsers).hasSize(2);
        assertThat(returnUsers.get(0).getId()).isEqualTo(1L);
        assertThat(returnUsers.get(0).getFullName()).isEqualTo("User1");
        assertThat(returnUsers.get(1).getId()).isEqualTo(2L);
        assertThat(returnUsers.get(1).getFullName()).isEqualTo("User2");
    }

    @Test
    void testCreateUser() {
        Date testDate = new Date("01/01/1970");
        Set<Role> testRoles = new HashSet<>(List.of(new Role(ERole.ROLE_USER)));

        User newUser = new User(1L, "User", "User description", "City 1", "Address1", "11111111111", "someEmail@gmail.com", testRoles, true, testDate,
                testDate);

        when(userRepository.save(any(User.class))).thenAnswer(invocation -> {
            User entity = invocation.getArgument(0);
            entity.setId(1L);
            return entity;
        });

        User user = userService.createUser(newUser);

        assertThat(user.getId()).isEqualTo(1);
        assertThat(user.getFullName()).isEqualTo("User");
    }

    @Test
    void testUpdateUser() {
        Long id = 1L;
        Set<Role> testRoles = new HashSet<>(List.of(new Role(ERole.ROLE_USER)));
        Date testDate = new Date("01/01/1970");
        User user = new User(1L, "User", "User description", "City 1", "Address1", "11111111111", "someEmail@gmail.com", testRoles, true, testDate,
                testDate);

        when(userRepository.findById(id)).thenReturn(Optional.of(user));
        when(userRepository.save(any(User.class))).thenAnswer(invocation -> invocation.getArgument(0));

        User requestData = new User(1L, "User1", "User description", "City 1", "Address1", "11111111111", "someEmail@gmail.com", testRoles, true, testDate,
                testDate);

        User updatedUser = userService.updateUser(id, requestData);

        assertThat(updatedUser.getId()).isEqualTo(id);
        assertThat(updatedUser.getFullName()).isEqualTo(requestData.getFullName());
    }

    @Test
    void testDeleteUser() {
        Long id = 1L;
        Set<Role> testRoles = new HashSet<>(List.of(new Role(ERole.ROLE_USER)));
        Date testDate = new Date("01/01/1970");
        User user = new User(1L, "User", "User description", "City 1", "Address1", "11111111111", "someEmail@gmail.com", testRoles, true, testDate,
                testDate);

        when(userRepository.findById(id)).thenReturn(Optional.of(user));
        when(userRepository.save(any(User.class))).thenAnswer(invocation -> invocation.getArgument(0));

        userService.deleteUser(id);
        verify(userRepository, times(1)).findById(id);
        verify(userRepository, times(1)).save(user);

        User result = userRepository.findById(id).get();
        assertThat(result.getActive()).isEqualTo(false);
    }
}
