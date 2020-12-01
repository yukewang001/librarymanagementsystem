package com.librarymanagementsystem.util;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.librarymanagementsystem.pojo.User;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class TokenService {

    public String getToken(User user) {
        Date start = new Date();
        long currentTime = System.currentTimeMillis() + 60 * 60 * 1000;//一小时有效时间
        Date end = new Date(currentTime);
        String token = "";

        token = JWT.create().withAudience(user.getUser_name())//用户名
                .withIssuedAt(start)//token生成时间
                .withExpiresAt(end)//token到期时间
                .sign(Algorithm.HMAC256(user.getUser_password()));//密码加密;
        return token;
    }
}
