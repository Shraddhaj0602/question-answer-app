package com.example.questionapp.controllers;



import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Mycontroller {

    @GetMapping("/")
    public String hello() {
        return "Hello from port 9090!";
    }
}


