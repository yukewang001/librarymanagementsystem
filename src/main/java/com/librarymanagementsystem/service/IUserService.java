package com.librarymanagementsystem.service;

import com.librarymanagementsystem.pojo.User;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;


public interface IUserService {

    String selectByUsername(String user_name);

    List<User> selectByUserPassword(String user_name, String user_password);

    List<User> selectByUsers(String user_name,String user_type);

    List<Map<String,Object>> getOptions();

    int addUser(User user);

    int updateUser(User userObject);

    User selectByUserId(int id);
}
