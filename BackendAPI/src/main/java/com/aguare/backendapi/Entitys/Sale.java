package com.aguare.backendapi.Entitys;

import jakarta.persistence.*;
import lombok.Data;

import java.io.Serializable;
import java.sql.Date;

@Data
@Entity
@Table(name = "sale")
public class Sale implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idSale;
    private Date date;
    private Double total;
    private Long idBranch;
    private String DPI;
    private String NIT;
}
