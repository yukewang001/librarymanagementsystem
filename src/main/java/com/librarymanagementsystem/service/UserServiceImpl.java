package com.librarymanagementsystem.service;

import com.librarymanagementsystem.mapper.IUserMapper;
import com.librarymanagementsystem.pojo.User;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Map;

@Service
public class UserServiceImpl implements IUserService {

    private final IUserMapper userMapper;

    public UserServiceImpl(IUserMapper userMapper) {
        this.userMapper = userMapper;
    }

    @Override
    public String selectByUsername(String user_name) {
        return userMapper.selectByUsername(user_name);
    }

    @Override
    public List<User> selectByUserPassword(String user_name, String user_password) {
        return userMapper.selectByUserPassword(user_name, user_password);
    }

    @Override
    public List<User> selectByUsers(String user_name ,String user_type) {
        return userMapper.selectByUsers(user_name,user_type);
    }

    @Override
    public List<Map<String,Object>> getOptions() {
        return userMapper.getOptions();
    }

    @Override
    public int addUser(User user) {
        return userMapper.addUser(user);
    }

    @Override
    public int updateUser(User userObject) {
        return userMapper.updateUser(userObject);
    }

    @Override
    public User selectByUserId(int id) {
        return userMapper.selectByUserId(id);
    }
}
