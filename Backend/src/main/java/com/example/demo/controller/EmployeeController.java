package com.example.demo.controller;
import com.example.demo.dto.EmployeeDTO;
import com.example.demo.dto.ResponseDTO;
import com.example.demo.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import util.VarList;

import java.util.List;

@RestController
@RequestMapping("api/v1/employee")
public class EmployeeController {
    @Autowired
    EmployeeService employeeService;

    @Autowired
    private ResponseDTO responseDTO;
    @PostMapping(value = "/saveEmployee")
    public ResponseEntity saveEmployee(@RequestBody EmployeeDTO employeeDTO) {
        try {
            String res = employeeService.saveEmployee(employeeDTO);
            if (res.equals("00")){
                responseDTO.setCode(VarList.RSP_SUCCESS);
                responseDTO.setMessage("Success");
                responseDTO.setContent(employeeDTO);
                return new ResponseEntity(responseDTO, HttpStatus.CREATED); // 201 for new resource
            } else if (res.equals("01")) {
                responseDTO.setCode(VarList.RSP_DUPLICATE);
                responseDTO.setMessage("Employee already exists");
                responseDTO.setContent(null);
                return new ResponseEntity(responseDTO, HttpStatus.BAD_REQUEST); // 400 for duplicate
            } else {
                responseDTO.setCode(VarList.RSP_FAIL);
                responseDTO.setMessage("Error");
                responseDTO.setContent(null);
                return new ResponseEntity(responseDTO, HttpStatus.BAD_REQUEST); // 400 for other failures
            }
        } catch (Exception ex) {
            responseDTO.setCode(VarList.RSP_FAIL);
            responseDTO.setMessage(ex.getMessage());
            responseDTO.setContent(null);
            return new ResponseEntity(responseDTO, HttpStatus.INTERNAL_SERVER_ERROR); // 500 for exceptions
        }
    }

    @PutMapping(value = "/UPDATEEmployee")
    public ResponseEntity updateEmployee(@RequestBody EmployeeDTO employeeDTO) {
        try {
            String res = employeeService.updateEmployee(employeeDTO);
            if (res.equals("00")) {
                responseDTO.setCode(VarList.RSP_SUCCESS);
                responseDTO.setMessage("Success");
                responseDTO.setContent(employeeDTO);
                return new ResponseEntity(responseDTO, HttpStatus.ACCEPTED); // 201 for new resource
            } else if (res.equals("01")) {
                responseDTO.setCode(VarList.RSP_DUPLICATE);
                responseDTO.setMessage("NOT A Registered user");
                responseDTO.setContent(null);
                responseDTO.setContent(employeeDTO);
                return new ResponseEntity(responseDTO, HttpStatus.BAD_REQUEST); // 400 for duplicate
            } else {
                responseDTO.setCode(VarList.RSP_FAIL);
                responseDTO.setMessage("Error");
                responseDTO.setContent(null);
                return new ResponseEntity(responseDTO, HttpStatus.BAD_REQUEST); // 400 for other failures
            }
        } catch (Exception ex) {
            responseDTO.setCode(VarList.RSP_FAIL);
            responseDTO.setMessage(ex.getMessage());
            responseDTO.setContent(null);
            return new ResponseEntity(responseDTO, HttpStatus.INTERNAL_SERVER_ERROR); // 500 for exceptions
        }
    }

    @GetMapping("/getAllEmployees")
    public ResponseEntity getAllEmployees() {
        try {
           List<EmployeeDTO> employeeDTOList = employeeService.getAllEmployees();
           responseDTO.setCode(VarList.RSP_SUCCESS);
           responseDTO.setMessage("Success");
           responseDTO.setContent(employeeDTOList);
           return new ResponseEntity(responseDTO, HttpStatus.ACCEPTED);
        } catch (Exception ex){
            responseDTO.setCode(VarList.RSP_FAIL);
            responseDTO.setMessage(ex.getMessage());
            responseDTO.setContent(null);
            return new ResponseEntity(responseDTO, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/searchEmployee/{empID}")
    public ResponseEntity searchEmployee(@PathVariable int empID) {
        try {
            EmployeeDTO employeeDTO = employeeService.searchEmployee(empID);
            if (employeeDTO != null) {
                responseDTO.setCode(VarList.RSP_SUCCESS);
                responseDTO.setMessage("Success");
                responseDTO.setContent(employeeDTO);
                return new ResponseEntity(responseDTO, HttpStatus.ACCEPTED);
            } else {
                responseDTO.setCode(VarList.RSP_NO_DATA_FOUND);
                responseDTO.setMessage("No Employee Available for this empID");
                responseDTO.setContent(null);
                return new ResponseEntity(responseDTO, HttpStatus.BAD_REQUEST);
            }
        } catch (Exception ex) {
            responseDTO.setCode(VarList.RSP_ERROR);
            responseDTO.setMessage(ex.getMessage());
            responseDTO.setContent(ex);
            return new ResponseEntity(responseDTO, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/deleteEmployee/{empID}")
    public ResponseEntity deleteEmployee(@PathVariable int empID) {
        try {
            String res = employeeService.deleteEmployee(empID);
            if (res.equals("00")) {
                responseDTO.setCode(VarList.RSP_SUCCESS);
                responseDTO.setMessage("Success");
                responseDTO.setContent(null);
                return new ResponseEntity(responseDTO, HttpStatus.ACCEPTED);
            } else {
                responseDTO.setCode(VarList.RSP_NO_DATA_FOUND);
                responseDTO.setMessage("No Employee Available for this empID");
                responseDTO.setContent(null);
                return new ResponseEntity(responseDTO, HttpStatus.BAD_REQUEST);
            }
        } catch (Exception ex) {
            responseDTO.setCode(VarList.RSP_ERROR);
            responseDTO.setMessage(ex.getMessage());
            responseDTO.setContent(ex);
            return new ResponseEntity(responseDTO, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
