package com.example.server.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import com.example.server.entity.Supplier;
import com.example.server.repository.SupplierRepository;
import com.example.server.service.SupplierService;

@Service
public class SupplierServiceImpl implements SupplierService {
    @Autowired
    private SupplierRepository supplierRepository;

    @Override
    public List<Supplier> getAllSupplier() {
        return supplierRepository.findAll();
    }

    @Override
    public Supplier createSupplier(Supplier supplier) {
        return supplierRepository.save(supplier);
    }

    @Override
    public Supplier updateSupplier(Long id, Supplier supplier) {
        Supplier curSupplier = supplierRepository.findById(id).orElseThrow(() -> {
            return new EmptyResultDataAccessException(1);
        });
        curSupplier.setFullName(supplier.getFullName());
        curSupplier.setDescription(supplier.getDescription());
        curSupplier.setActive(supplier.getActive());
        curSupplier.setAddress(supplier.getAddress());
        curSupplier.setPhone(supplier.getPhone());
        curSupplier.setEmail(supplier.getEmail());
        curSupplier.setUrl(supplier.getUrl());
        curSupplier.setPicture(supplier.getPicture());
        curSupplier.setCreatedAt(supplier.getCreatedAt());
        curSupplier.setUpdatedAt(supplier.getUpdatedAt());
        return supplierRepository.save(curSupplier);

    }

    @Override
    public void deleteSupplier(Long id) {
        Supplier curSupplier = supplierRepository.findById(id).orElseThrow(() -> {
            return new EmptyResultDataAccessException(1);
        });
        curSupplier.setActive(false);
        supplierRepository.save(curSupplier);
    }

}
