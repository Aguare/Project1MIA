package com.aguare.backendapi.Entitys;

import jakarta.persistence.*;
import lombok.Data;

import java.io.Serializable;

@Data
@Entity
@Table(name = "inventory")
public class Inventory implements Serializable {

    @EmbeddedId
    private IdInventory idInventory;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "Fk_id_Product", insertable = false, updatable = false)
    private Product product;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "Fk_id_Branch", insertable = false, updatable = false)
    private Branch branch;
    private int quantity;
}
