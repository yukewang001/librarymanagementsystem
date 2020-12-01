package com.librarymanagementsystem.controller;

import com.alibaba.fastjson.JSON;
import com.librarymanagementsystem.pojo.User;
import com.librarymanagementsystem.service.IUserService;
import com.librarymanagementsystem.util.RedisService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.Collections;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("/user")
public class UserController {
    private final IUserService userService;
    private final RedisService redisService;

    public UserController(IUserService userService, RedisService redisService) {
        this.userService = userService;
        this.redisService = redisService;
    }

    @RequestMapping("/selectByUsers")
    @ResponseBody
    public String selectByUsers(String user_name, String user_type) {
        //查询缓存中是否存在
        boolean hasKey = redisService.exists("user_table");

        if (hasKey) {
            List<Object> userListRedis = redisService.lRange("user_table", 0, -1);
            return JSON.toJSONString(userListRedis.get(0));
        } else {
            List<User> userList = userService.selectByUsers(user_name, user_type);
            //写入缓存
            redisService.lPush("user_table", userList);
            return JSON.toJSONString(userList);
        }

    }

    @RequestMapping("/getOptions")
    @ResponseBody
    public String getOptions() {
        List<Map<String, Object>> objects = userService.getOptions();
        return JSON.toJSONString(objects);
    }

    @RequestMapping("/addUser")
    @ResponseBody
    public String addUser(@RequestBody User userObject) {
        //查询缓存中是否存在
        boolean hasKey = redisService.exists("user_" + userObject.getUser_num());
        if (hasKey) {
            return "success";
        } else {
            List<User> userList = userService.selectByUsers(userObject.getUser_name(), userObject.getUser_type());
            if (userList.size() == 1) {
                return "用户名_" + userObject.getUser_name() + "已存在，不能添加";
            } else {
                int id = userService.addUser(userObject);
                return "success";
            }
        }


    }

    @RequestMapping("/updateUser")
    @ResponseBody
    public String updateUser(@RequestBody User userObject) {
        User user = userService.selectByUserId(userObject.getId());
        if (user.toString().equals(userObject.toString())) {
            return userObject.getUser_name() + "没有可更新的数据";
        } else {
            int id = userService.updateUser(userObject);
            return "success";
        }
    }
}
