package com.example.demo.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "api/v/user")
@CrossOrigin
public class userController {
@GetMapping("/getuser")
    public String getuser(){
        return "sharada";
    }
}
