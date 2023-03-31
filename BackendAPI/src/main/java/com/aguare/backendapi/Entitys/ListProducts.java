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

    @Column(name = "fk_id_sale")
    private Long idSale;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "fk_id_product")
    private Product idProduct;

    @Column(name = "fk_id_branch")
    private Long idBranch;

    private int quantity;
    private Double subtotal;
}
