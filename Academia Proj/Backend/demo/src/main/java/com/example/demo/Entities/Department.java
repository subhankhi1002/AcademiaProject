package com.example.demo.Entities;


import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@Data
@Table(name = "Department")
public class Department {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer dno;

    @Column(nullable = false)
    private String deptName;

    @Column(nullable = false)
    private Integer capacity;


    @OneToMany(mappedBy = "department")
    private List<Employee> employees;

}
