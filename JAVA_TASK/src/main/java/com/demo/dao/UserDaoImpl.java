package com.demo.dao;

import com.demo.model.User;
import com.demo.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class UserDaoImpl {

    @Autowired
    UserRepo userRepoImpl;


    public User loginUser(String userEmailId, String userPassword){
        User user = userRepoImpl.findByUserEmailId(userEmailId);
        if(user != null && user.getUserPassword().equals(userPassword)){
            return user;
        }
        return null;
    }

    public User registerUser(User user){
        User existingUser = userRepoImpl.findByUserEmailId(user.getUserEmailId());
        if(existingUser == null){
            User newUser = new User();
            newUser.setUserName(user.getUserName());
            newUser.setUserAddress(user.getUserAddress());
            newUser.setRole(user.getRole());
            newUser.setUserEmailId(user.getUserEmailId());
            newUser.setUserPassword(user.getUserPassword());
            return userRepoImpl.save(newUser);
        }
        return null;
    }

    public List<User> getAllUsers(){
        return userRepoImpl.findAll();
    }

    public User getUserById(int userId){
        return userRepoImpl.findById(userId).orElse(null);
    }
}
