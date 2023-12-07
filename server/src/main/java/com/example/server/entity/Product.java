package com.example.server.entity;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import jakarta.persistence.*;

@Entity
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String fullName;

    @Column(nullable = false, length = 500)
    private String description;

    private String picture;

    @ManyToOne
    @JoinColumn(name = "supplier_id")
    private Supplier supplier;

    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category category;

    @Column(nullable = false)
    private Float price;

    @Column(nullable = false)
    private Integer stocks;

    private Float discount;

    private Boolean discountAvailable;

    private Integer ranking;

    private String notes;

    private Boolean active;

    private Date createdAt;

    private Date updatedAt;

    @OneToMany(mappedBy = "product")
    private Set<OrderDetails> orderDetails = new HashSet<>();

    public Product() {
    }

    public Product(String fullName, String description, String picture, Supplier supplier, Category category,
            Float price, Integer stocks, Float discount, Boolean discountAvailable, Integer ranking, String notes,
            Boolean active,
            Date createAt, Date updatedAt) {
        this.fullName = fullName;
        this.description = description;
        this.picture = picture;
        this.supplier = supplier;
        this.category = category;
        this.price = price;
        this.stocks = stocks;
        this.discount = discount;
        this.discountAvailable = discountAvailable;
        this.ranking = ranking;
        this.notes = notes;
        this.active = active;
        this.createdAt = createAt;
        this.updatedAt = updatedAt;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getPicture() {
        return picture;
    }

    public void setPicture(String picture) {
        this.picture = picture;
    }

    public Supplier getSupplier() {
        return supplier;
    }

    public void setSupplier(Supplier supplier) {
        this.supplier = supplier;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public Float getPrice() {
        return price;
    }

    public void setPrice(Float price) {
        this.price = price;
    }

    public Integer getStocks() {
        return stocks;
    }

    public void setStocks(Integer stocks) {
        this.stocks = stocks;
    }

    public Float getDiscount() {
        return discount;
    }

    public void setDiscount(Float discount) {
        this.discount = discount;
    }

    public Boolean getDiscountAvailable() {
        return discountAvailable;
    }

    public void setDiscountAvailable(Boolean discountAvailable) {
        this.discountAvailable = discountAvailable;
    }

    public Integer getRanking() {
        return ranking;
    }

    public void setRanking(Integer ranking) {
        this.ranking = ranking;
    }

    public String getNotes() {
        return notes;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }

    public Boolean getActive() {
        return active;
    }

    public void setActive(Boolean active) {
        this.active = active;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }

    public Date getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(Date updatedAt) {
        this.updatedAt = updatedAt;
    }
}
