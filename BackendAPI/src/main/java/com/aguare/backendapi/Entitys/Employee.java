package com.aguare.backendapi.Entitys;

import jakarta.persistence.*;
import lombok.Data;

import java.io.Serializable;
import java.sql.Date;

@Entity
@Data
@Table(name = "employee")
public class Employee implements Serializable {
    @Id
    private Long DPI;
    @Column(name = "names_e")
    private String names;
    @Column(name = "last_names")
    private String lastNames;
    @Column(name = "date_of_birth")
    private Date dateBirthday;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "FK_id_Branch")
    private Branch branch;

}
