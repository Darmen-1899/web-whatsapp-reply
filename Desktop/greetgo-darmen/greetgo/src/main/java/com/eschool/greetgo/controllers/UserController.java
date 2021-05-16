package com.eschool.greetgo.controllers;

import com.eschool.greetgo.models.User;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*")
@RequestMapping("/")
@RestController
public class UserController {

    @PostMapping("/login")
    public Object login(@RequestBody User user)
    {
        if (user.getUsername().equals("admin") && user.getPassword().equals("123")){
            return ResponseEntity.ok().body(user.getUsername() + " is loged.");
        }
        else
        {

            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }

}
