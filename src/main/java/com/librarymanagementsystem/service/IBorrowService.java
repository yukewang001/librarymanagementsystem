package com.librarymanagementsystem.service;


import com.librarymanagementsystem.pojo.Borrow;

import java.util.List;

public interface IBorrowService {
    List<Borrow> selectByBorrows(String user_name, String user_type);
}
