package com.example.server.controller;

import com.example.server.entity.Role;
import com.example.server.entity.User;
import com.example.server.enums.ERole;
import com.example.server.payload.request.LoginRequest;
import com.example.server.payload.request.SignUpRequest;
import com.example.server.repository.RoleRepository;
import com.example.server.repository.UserRepository;
import com.example.server.utils.JwtUtils;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;

import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@ExtendWith(SpringExtension.class)
@SpringBootTest
@AutoConfigureMockMvc(addFilters = false)
public class AuthControllerTest {
    @Autowired
    private MockMvc mockMvc;

    @Test
    @WithMockUser(username = "test@example.com")
    void testSignIn() throws Exception {
        LoginRequest loginRequest = new LoginRequest();
        loginRequest.setEmail("test@example.com");
        loginRequest.setPassword("password");
        String body = (new ObjectMapper()).valueToTree(loginRequest).toString();

        mockMvc.perform(post("/api/v1/auth/signin")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(body))
                .andExpect(status().isUnauthorized());
    }

    @Test
    public void testSignUp() throws Exception {
        SignUpRequest signUpRequest = new SignUpRequest();
        signUpRequest.setFullName("test2");
        signUpRequest.setEmail("test2@example.com");
        signUpRequest.setPassword("password2");
        String body = (new ObjectMapper()).valueToTree(signUpRequest).toString();

        mockMvc.perform(post("/api/v1/auth/signup")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(body))
                .andExpect(status().isOk());
    }

}
