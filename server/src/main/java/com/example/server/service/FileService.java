package com.example.server.service;

import org.springframework.core.io.Resource;
import org.springframework.web.multipart.MultipartFile;

public interface FileService {
    public String save(MultipartFile file, String path);

    public Resource load(String path);
}
