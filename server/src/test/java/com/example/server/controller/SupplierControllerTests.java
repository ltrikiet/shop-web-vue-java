package com.example.server.controller;

import com.example.server.entity.Supplier;
import com.example.server.repository.SupplierRepository;
import com.example.server.service.SupplierService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@SpringBootTest
public class SupplierControllerTests {
    @MockBean
    private SupplierRepository supplierRepository;

    @Autowired
    private SupplierService supplierService;

    @Test
    void testGetAllSupplier() {
        Date testDate = new Date("01/01/1970");

        List<Supplier> suppliers = new ArrayList<>();
        suppliers.add(new Supplier(1L, "Supplier1", "Supplier1 description", true, "Address1", "11111111111", "someEmail@gmail.com", "http://some-web.com", "/uploads/folder/somePicture", testDate,
                testDate));
        suppliers.add(new Supplier(2L, "Supplier2", "Supplier2 description", true, "Address2", "11111111111", "someEmail@gmail.com", "http://some-web2.com", "/uploads/folder/somePicture2", testDate,
                testDate));

        when(supplierRepository.findAll()).thenReturn(suppliers);

        List<Supplier> returnSuppliers = supplierService.getAllSupplier();

        assertThat(returnSuppliers).hasSize(2);
        assertThat(returnSuppliers.get(0).getId()).isEqualTo(1L);
        assertThat(returnSuppliers.get(0).getFullName()).isEqualTo("Supplier1");
        assertThat(returnSuppliers.get(1).getId()).isEqualTo(2L);
        assertThat(returnSuppliers.get(1).getFullName()).isEqualTo("Supplier2");
    }

    @Test
    void testCreateSupplier() {
        Date testDate = new Date("01/01/1970");
        Supplier newSupplier = new Supplier(1L, "Supplier", "Supplier description", true, "Address1", "11111111111", "someEmail@gmail.com", "http://some-web.com", "/uploads/folder/somePicture", testDate,
                testDate);

        when(supplierRepository.save(any(Supplier.class))).thenAnswer(invocation -> {
            Supplier entity = invocation.getArgument(0);
            entity.setId(1L);
            return entity;
        });

        Supplier supplier = supplierService.createSupplier(newSupplier);

        assertThat(supplier.getId()).isEqualTo(1);
        assertThat(supplier.getFullName()).isEqualTo("Supplier");
    }

    @Test
    void testUpdateSupplier() {
        Long id = 1L;
        Date testDate = new Date("01/01/1970");
        Supplier supplier = new Supplier(1L, "Supplier", "Supplier1 description", true, "Address1", "11111111111", "someEmail@gmail.com", "http://some-web.com", "/uploads/folder/somePicture", testDate,
                testDate);

        when(supplierRepository.findById(id)).thenReturn(Optional.of(supplier));
        when(supplierRepository.save(any(Supplier.class))).thenAnswer(invocation -> invocation.getArgument(0));

        Supplier requestData = new Supplier(1L, "Supplier1", "Supplier1 description", true, "Address1", "11111111111", "someEmail@gmail.com", "http://some-web.com", "/uploads/folder/somePicture", testDate,
                testDate);

        Supplier updatedSupplier = supplierService.updateSupplier(id, requestData);

        assertThat(updatedSupplier.getId()).isEqualTo(id);
        assertThat(updatedSupplier.getFullName()).isEqualTo(requestData.getFullName());
    }

    @Test
    void testDeleteSupplier() {
        Long id = 1L;
        Date testDate = new Date("01/01/1970");
        Supplier supplier = new Supplier(1L, "Supplier1", "Supplier1 description", true, "Address1", "11111111111", "someEmail@gmail.com", "http://some-web.com", "/uploads/folder/somePicture", testDate,
                testDate);

        when(supplierRepository.findById(id)).thenReturn(Optional.of(supplier));
        when(supplierRepository.save(any(Supplier.class))).thenAnswer(invocation -> invocation.getArgument(0));

        supplierService.deleteSupplier(id);
        verify(supplierRepository, times(1)).findById(id);
        verify(supplierRepository, times(1)).save(supplier);

        Supplier result = supplierRepository.findById(id).get();
        assertThat(result.getActive()).isEqualTo(false);
    }
}
