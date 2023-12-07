package com.example.server.service.impl;

import com.example.server.service.FileService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.net.MalformedURLException;
import java.nio.file.FileAlreadyExistsException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@Service
public class FileServiceImpl implements FileService {
    private final String rootPath = "uploads";

    @Override
    public String save(MultipartFile file, String path) {
        try {
            Path filePath = Paths.get(rootPath, path);
            Files.createDirectories(filePath);
            Files.copy(file.getInputStream(), filePath.resolve(file.getOriginalFilename()));
            return filePath + "\\" + file.getOriginalFilename();
        } catch (FileAlreadyExistsException e) {
            throw new RuntimeException("A file of that name already exists.");
        } catch (Exception e) {
            throw new RuntimeException(e.getMessage());
        }
    }

    @Override
    public Resource load(String path) {
        try {
            Path file = Paths.get(path);
            Resource resource = new UrlResource(file.toUri());

            if (resource.exists() || resource.isReadable()) {
                return resource;
            } else {
                throw new RuntimeException("Could not read the file!");
            }
        } catch (MalformedURLException e) {
            throw new RuntimeException("Error: " + e.getMessage());
        }
    }
}
