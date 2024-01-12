package com.example.demo.Repository;

import com.example.demo.Entities.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.io.Serializable;
import java.util.List;

public interface IEmployeeRepository extends JpaRepository<Employee, Serializable> {

    @Query("SELECT e FROM Employee e JOIN Department d ON e.department.dno = d.dno WHERE e.department.dno = 102 AND e.email = :email AND e.password = :password")
    Employee findByEmailAndPassword(@Param("email") String email, @Param("password") String password);

    @Query("select e from Employee e where e.email= :email")
    Employee getUser(@Param("email") String email);
}