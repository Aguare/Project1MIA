package com.aguare.backendapi.Entitys;

import jakarta.persistence.*;
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

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "Fk_DPI", insertable = false, updatable = false)
    private Employee fk_dpi;
}
