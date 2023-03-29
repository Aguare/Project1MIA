package com.aguare.backendapi.Entitys;

import jakarta.persistence.*;
import lombok.Data;

import java.io.Serializable;

@Entity
@Data
@Table(name = "branch")
public class Branch implements Serializable {

    @Id
    @Column(name = "id_branch")
    private Long idBranch;

    @Column(name = "name_b")
    private String nameB;
    private String address;
    private String phone;
}
