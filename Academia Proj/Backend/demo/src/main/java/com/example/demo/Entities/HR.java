package com.example.demo.Entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;


@Entity
@Data
@Table(name = "Hr")
public class HR {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer hrId;

    @Column(nullable = false)
    private String firstName;


    private String lastName;

    @Column(nullable = false, unique = true)
    private String email;


    private Integer phone;

    @ManyToOne
    @JoinColumn(name="orgId")
    @JsonIgnore
    private Organization organization;
}
