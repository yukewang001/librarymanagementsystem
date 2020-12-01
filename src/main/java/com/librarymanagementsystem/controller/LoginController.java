package com.librarymanagementsystem.controller;

import com.alibaba.fastjson.JSON;
import com.librarymanagementsystem.pojo.User;
import com.librarymanagementsystem.service.IUserService;
import com.librarymanagementsystem.util.RedisService;
import com.librarymanagementsystem.util.TokenService;
import io.swagger.annotations.*;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.util.List;

@Api(value = "UserController", tags = {"用户操作接口"})
@Controller
public class LoginController {
    private final IUserService userService;
    private final TokenService tokenService;
    private final RedisService redisService;


    public LoginController(IUserService userService, TokenService tokenService, RedisService redisService) {
        this.userService = userService;
        this.tokenService = tokenService;
        this.redisService = redisService;
    }

    @ApiOperation(value = "直接跳转到登录页面")
    @GetMapping("/")
    public String login() {
        return "login";
    }

    @ApiOperation(value = "用户登录")
    @ApiImplicitParams(
            {@ApiImplicitParam(name = "username", value = "用户名",required = true),
                    @ApiImplicitParam(name = "password", value = "密码",required = true)
            })
    @PostMapping(value = "/loginUser")
    @ResponseBody
    public String loginUser(HttpServletRequest request, HttpServletResponse response, String username, String password) {
        //判断用户名是否存在
        String user_name = userService.selectByUsername(username);
        //判断密码是否正确
        List<User> userList = userService.selectByUserPassword(username, password);
        if (userList.size() == 1) {
            User user = new User();
            user.setUser_name(userList.get(0).getUser_name());
            user.setUser_type(userList.get(0).getUser_type());
            //生成token
            String token = tokenService.getToken(userList.get(0));
            //生成session
            HttpSession httpSession = request.getSession();
            httpSession.setAttribute("user", username + "-" + user.getUser_type());
            //生成cookie
            Cookie cookie = new Cookie("usernum", token);
            response.addCookie(cookie);
            //token 存入redis
            redisService.set("usernum", token);
            return JSON.toJSONString(user);
        } else {
            return "user_password";
        }


    }

}
