package com.example.demo.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@Data
@NoArgsConstructor

public class EmployeeDTO{
    private int empID;
    private String empName;
    private String empAddress;
    private String empNumber;
}
