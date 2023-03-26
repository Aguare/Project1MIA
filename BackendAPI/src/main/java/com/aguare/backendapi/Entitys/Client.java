package com.aguare.backendapi.Entitys;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

import java.io.Serializable;

@Entity
@Data
@Table(name = "client")
public class Client implements Serializable {

    @Id
    private String NIT;

    private String nameC;
    private String addres;
}
