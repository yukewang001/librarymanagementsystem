package com.librarymanagementsystem.controller;

import com.alibaba.fastjson.JSON;
import com.librarymanagementsystem.pojo.Book;
import com.librarymanagementsystem.service.IBookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
@RequestMapping("/book")
public class BookController {
    private final IBookService bookService;

    public BookController(IBookService bookService) {
        this.bookService = bookService;
    }

    @RequestMapping("/selectByBooks")
    @ResponseBody
    public String selectByBooks(String user_name,String user_type){
        List<Book> bookList = bookService.selectByBooks(user_name,user_type);
        return JSON.toJSONString(bookList);
    }
}
