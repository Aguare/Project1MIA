package com.aguare.backendapi.Entitys;

import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

import java.io.Serializable;

@Data
@Entity
@Table(name = "inventory")
public class Inventory implements Serializable {
    @EmbeddedId
    private IdInventory idS;
    private int quantity;
}
