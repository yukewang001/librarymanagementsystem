package com.librarymanagementsystem.service;

import com.librarymanagementsystem.pojo.Book;

import java.util.List;

public interface IBookService {

    List<Book> selectByBooks(String user_name, String user_type);
}
