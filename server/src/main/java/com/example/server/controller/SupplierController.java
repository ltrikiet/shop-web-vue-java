package com.example.server.controller;

import java.util.List;

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

import com.example.server.entity.Supplier;
import com.example.server.service.SupplierService;

@RestController
@RequestMapping("/api/v1/supplier")
public class SupplierController {
    @Autowired
    private SupplierService supplierService;

    @GetMapping
    public ResponseEntity<List<Supplier>> getAllSupplier() {
        return new ResponseEntity<>(supplierService.getAllSupplier(), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Supplier> createSupplier(@RequestBody Supplier supplier) {
        return new ResponseEntity<>(supplierService.createSupplier(supplier), HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Supplier> updateSupplier(@PathVariable Long id, @RequestBody Supplier supplier) {
        return new ResponseEntity<>(supplierService.updateSupplier(id, supplier), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteSupplier(@PathVariable Long id) {
        supplierService.deleteSupplier(id);
        return new ResponseEntity<>("Delete successful!", HttpStatus.OK);
    }
}
