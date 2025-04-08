package com.example.demo.service;

import com.example.demo.dto.EmployeeDTO;
import com.example.demo.entity.Employee;
import com.example.demo.repo.EmployeeRepo;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;

import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;
import util.VarList;

@Service
@Transactional
public class EmployeeService {
    @Autowired
    private ModelMapper modelMapper;
    @Autowired
    private EmployeeRepo employeeRepo;

    public String saveEmployee(EmployeeDTO employeeDTO) {
        if(employeeRepo.existsById( employeeDTO.getEmpID())){
            return VarList.RSP_DUPLICATE;
        }else{
            employeeRepo.save(modelMapper.map(employeeDTO, Employee.class));
            return VarList.RSP_SUCCESS;
        }
    }

}
