package com.aguare.backendapi.Entitys;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

import java.io.Serializable;
import java.sql.Date;

@Entity
@Data
@Table(name = "employee")
public class Employee implements Serializable {
    @Id
    private String DPI;
    private String names;
    private String lastNames;
    private Date dateBirthday;
    private int idBranch;

}
