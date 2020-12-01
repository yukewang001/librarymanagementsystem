package com.librarymanagementsystem.controller;

import com.alibaba.fastjson.JSON;
import com.librarymanagementsystem.pojo.Borrow;
import com.librarymanagementsystem.service.IBorrowService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
@RequestMapping("/borrow")
public class BorrowController {
    private final IBorrowService borrowService;

    public BorrowController(IBorrowService borrowService) {
        this.borrowService = borrowService;
    }
    @RequestMapping("/selectByBorrows")
    @ResponseBody
    public String selectByBorrows(String user_name, String user_type) {
        List<Borrow> borrowList = borrowService.selectByBorrows(user_name, user_type);
        return JSON.toJSONString(borrowList);
    }

}
