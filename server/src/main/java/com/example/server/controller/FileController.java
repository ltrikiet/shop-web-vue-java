package com.example.server.controller;

import com.example.server.service.FileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/api/v1/file")
public class FileController {
    @Autowired
    private FileService fileService;

    @GetMapping(produces = MediaType.IMAGE_JPEG_VALUE)
    public ResponseEntity<Resource> getFile(@RequestParam("path") String path) {
        Resource file = fileService.load(path);
        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + file.getFilename() + "\"")
                .body(file);
    }

    @PostMapping("/upload")
    public ResponseEntity<String> uploadFile(@RequestParam("file") MultipartFile file, @RequestParam("customPath") String path) {
        String message = "";
        try {
            String filePath = fileService.save(file, path);
            message = filePath;
            return ResponseEntity.status(HttpStatus.OK).body(message);  
        } catch (Exception e) {
            message = "Could not upload the file: " + file.getOriginalFilename() + ". Error: " + e.getMessage();
            return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(message);
        }
    }
}
