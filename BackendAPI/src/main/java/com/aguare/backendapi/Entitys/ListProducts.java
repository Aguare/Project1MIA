package com.aguare.backendapi.Entitys;

import jakarta.persistence.*;
import lombok.Data;

import java.io.Serializable;

@Data
@Entity
@Table(name = "list_products")
public class ListProducts implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idListProducts;
    private Long idSale;
    private Long idProduct;
    private int quantity;
    private Double subtotal;
}
