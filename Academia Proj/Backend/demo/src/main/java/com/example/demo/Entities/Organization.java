package com.example.demo.Entities;

import jakarta.persistence.*;
import lombok.Data;

import java.io.Serializable;
import java.util.List;

@Entity
@Data
@Table(name = "Organization")
public class Organization implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer orgId;

    @Column(nullable = false)
    private String name;


    private String address;

    @OneToMany(mappedBy = "organization")
    private List<HR> hrs;



}
