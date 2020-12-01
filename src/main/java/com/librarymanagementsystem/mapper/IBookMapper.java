package com.librarymanagementsystem.mapper;

import com.librarymanagementsystem.pojo.Book;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IBookMapper {

    List<Book> selectByBooks(String user_name, String user_type);
}
