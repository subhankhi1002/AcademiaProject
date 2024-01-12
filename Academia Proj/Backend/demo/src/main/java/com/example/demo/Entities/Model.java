package com.example.demo.Entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Model {
    private Integer orgId;
    private Integer hrId;
    private String firstName;
    private String lastName;
    private String email;
    private Integer phone;
    private String name;
    private String address;
    //private Organization organization;


    private List<HR> hrs;

}