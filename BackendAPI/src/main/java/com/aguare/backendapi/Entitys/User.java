package com.aguare.backendapi.Entitys;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

import java.io.Serializable;

@Data
@Entity
@Table(name = "user_acces")
public class User implements Serializable {
    @Id
    private String username;
    private String password;
    private String email;
    private String role;
}
