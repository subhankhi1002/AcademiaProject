package com.example.demo.Entities;


import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "Employee")
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer empId;

    @Column(nullable = false)
    private String firstName;


    private String lastName;

    @Column(nullable = false, unique = true)
    private String email;

    private String title;


    @ManyToOne
    @JoinColumn(name="dno")
    @JsonIgnore
    private Department department;


    private String password;
}
