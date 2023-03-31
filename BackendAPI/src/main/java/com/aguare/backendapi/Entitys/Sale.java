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

    @Column(name = "fk_id_branch")
    private Long idBranch;

    @Column(name = "fk_dpi")
    private Long dpi;

    @Column(name = "fk_nit")
    private String nit;
}
