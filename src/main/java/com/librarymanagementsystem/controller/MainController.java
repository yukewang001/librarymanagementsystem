package com.librarymanagementsystem.controller;

import com.alibaba.fastjson.JSON;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.HashMap;
import java.util.Map;

@Controller
public class MainController {
    @RequestMapping("/main")
    public String main() {
        return "main";
    }

    @RequestMapping("/getSession")
    @ResponseBody
    public String getSession(HttpServletRequest request) {
        //获取session
        HttpSession session = request.getSession();
        String sessionStr = (String) session.getAttribute("user");
        Map<String, String> userMap = new HashMap<>();
        if (sessionStr != null) {
            String[] sessionStrAttr = sessionStr.split("-");
            userMap.put("username", sessionStrAttr[0]);
            userMap.put("usertype", sessionStrAttr[1]);
            return JSON.toJSONString(userMap);
        }else {
            return JSON.toJSONString("fail");
        }

    }
    @RequestMapping("/mainContent")
    public String loadMainContent()
    {
        return "main-content";
    }
    @RequestMapping("/settings")
    public String loadSettings()
    {
        return "settings";
    }
    @RequestMapping("/userSetting")
    public String loadUserSetting()
    {
        return "user";
    }
    @RequestMapping("/bookSetting")
    public String loadBookSetting()
    {
        return "book";
    }
    @RequestMapping("/bookBorrow")
    public String loadBookBorrow()
    {
        return "borrow";
    }
    @RequestMapping("/systemSearch")
    public String loadSystemSearch()
    {
        return "systemsearch";
    }
    @RequestMapping("/updateKey")
    public String loadUpdateKey()
    {
        return "updatekey";
    }
    @RequestMapping("/exitSystem")
    public String loadExitSystem()
    {
        return "";
    }
}
