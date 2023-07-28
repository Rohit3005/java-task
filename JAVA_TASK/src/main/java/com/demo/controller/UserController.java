package com.demo.controller;

import com.demo.model.User;
import com.demo.service.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
@CrossOrigin
public class UserController {

    @Autowired
    UserServiceImpl userService;

    @PostMapping("/registerUser")
    public ResponseEntity<User> saveData(@RequestBody User user) {

        return new ResponseEntity<>(userService.registerUser(user), HttpStatus.CREATED);
    }

    @GetMapping("/loginUser/{userEmailId}/{userPassword}")
    public ResponseEntity<User> loginUser(@PathVariable String userEmailId, @PathVariable String userPassword) {
        return ResponseEntity.ok(userService.loginUser(userEmailId, userPassword));
    }

    @GetMapping("/getAllUsers")
    public ResponseEntity<List<User>> getAllUser() {
        return ResponseEntity.ok(userService.getAllUsers());
    }

    @GetMapping("/getUserById/{userId}")
    public ResponseEntity<User> getUserById(@PathVariable int userId) {
        return ResponseEntity.ok(userService.getUserById(userId));
    }


}
