package com.librarymanagementsystem.mapper;

import com.librarymanagementsystem.pojo.User;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Repository
public interface IUserMapper {
    String selectByUsername(String user_name);

    User selectByUserId(int id);

    List<User> selectByUserPassword(String user_name, String user_password);

    List<User> selectByUsers(String user_name, String user_type);

    List<Map<String, Object>> getOptions();

    int addUser(User user);

    int updateUser(User userObject);


}
