package com.aguare.backendapi.Entitys;

import jakarta.persistence.Embeddable;

import java.io.Serializable;

@Embeddable
public class IdInventory implements Serializable {
    private Long idProduct;
    private Long idBranch;
}
