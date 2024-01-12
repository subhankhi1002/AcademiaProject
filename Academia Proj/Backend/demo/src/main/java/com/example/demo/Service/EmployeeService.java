package com.example.demo.Service;

import com.example.demo.Entities.Employee;
import com.example.demo.Repository.IEmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeService {
    @Autowired
    private IEmployeeRepository iLoginRepository;

    public Employee authenticate(Employee employee) {
        try {
            return iLoginRepository.findByEmailAndPassword(employee.getEmail(), employee.getPassword());
        } catch (Exception e) {
            e.printStackTrace();
        }
        return iLoginRepository.findByEmailAndPassword(employee.getEmail(), employee.getPassword());
    }

    public Employee getUser(Employee e) {
        return iLoginRepository.getUser(e.getEmail());
    }
}