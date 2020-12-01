package com.librarymanagementsystem.service;

import com.librarymanagementsystem.mapper.IBookMapper;
import com.librarymanagementsystem.pojo.Book;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookServiceImpl implements IBookService {
    private final IBookMapper bookMapper;

    public BookServiceImpl(IBookMapper bookMapper) {
        this.bookMapper = bookMapper;
    }

    @Override
    public List<Book> selectByBooks(String user_name, String user_type) {
        return bookMapper.selectByBooks(user_name,user_type);
    }
}
