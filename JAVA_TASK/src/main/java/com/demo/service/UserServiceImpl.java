package com.demo.service;

import com.demo.dao.UserDaoImpl;
import com.demo.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl {

    @Autowired
    UserDaoImpl userDao;

    public User loginUser(String userEmailId, String userPassword){

        return userDao.loginUser(userEmailId,userPassword);
    }

    public User registerUser(User user){

        return userDao.registerUser(user);
    }

    public List<User> getAllUsers(){
        return userDao.getAllUsers();
    }

    public User getUserById(int userId){
        return userDao.getUserById(userId);
    }
}
