/*
package com.librarymanagementsystem.util;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import javax.annotation.Resource;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class AuthInterceptor implements HandlerInterceptor {

    @Resource
    private RedisService redisService;
    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {

    }

    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {

    }

    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        response.setCharacterEncoding("UTF-8");
        response.setContentType("text/html;charset=utf-8");
        String token = request.getHeader("token");
        //通过cookie获取token
        Cookie[] cookies = request.getCookies();
        String tokenValue = "";
        Boolean falg = false;
        if (cookies != null) {
            for (Cookie cookie : cookies) {
                if (cookie.getName().equals("usernum")) {
                    tokenValue = cookie.getValue();
                }
            }
        }
        boolean isExist = redisService.exists("usernum");
        if (isExist) {
            //判断两个token是否一样
            if (redisService.get("usernum").equals(tokenValue))
            {
                falg = true;
            }
            response.getWriter().print("用户未登录，请登录后操作！");
        }

        return falg;
    }
}
*/
