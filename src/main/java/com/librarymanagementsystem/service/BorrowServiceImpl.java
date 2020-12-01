package com.librarymanagementsystem.service;

import com.librarymanagementsystem.mapper.IBorrowMapper;
import com.librarymanagementsystem.pojo.Borrow;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BorrowServiceImpl implements IBorrowService {
    private final IBorrowMapper borrowMapper;

    public BorrowServiceImpl(IBorrowMapper borrowMapper) {
        this.borrowMapper = borrowMapper;
    }

    @Override
    public List<Borrow> selectByBorrows(String user_name, String user_type) {
        return borrowMapper.selectByBorrows(user_name,user_type);
    }
}
