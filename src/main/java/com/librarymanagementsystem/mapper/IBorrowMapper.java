package com.librarymanagementsystem.mapper;

import com.librarymanagementsystem.pojo.Borrow;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IBorrowMapper {
    List<Borrow> selectByBorrows(String user_name, String user_type);
}
