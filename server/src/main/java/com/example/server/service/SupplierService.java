package com.example.server.service;

import java.util.List;

import com.example.server.entity.Supplier;

public interface SupplierService {
    List<Supplier> getAllSupplier();

    Supplier createSupplier(Supplier supplier);

    Supplier updateSupplier(Long id, Supplier supplier);

    void deleteSupplier(Long id);
}
