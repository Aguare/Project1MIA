package com.aguare.backendapi.Entitys;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;

import java.io.Serializable;

@Embeddable
public class IdInventory implements Serializable {
    @Column(name = "Fk_id_Product")
    private Long idProduct;

    @Column(name = "Fk_id_Branch")
    private Long idBranch;
}
