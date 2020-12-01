package com.librarymanagementsystem.pojo;

import java.math.BigDecimal;
import java.sql.Timestamp;
import java.util.Date;

public class Book {
    private int id;
    private String book_name;
    private String book_num;
    private Timestamp book_createtime;
    private Timestamp book_deletetime;
    private String book_address;
    private String book_from;
    private BigDecimal book_price;
    private int book_amount;
    private int book_typeid;
    private String book_type;
    private int book_borrowamount;
    private String book_text;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getBook_name() {
        return book_name;
    }

    public void setBook_name(String book_name) {
        this.book_name = book_name;
    }

    public String getBook_num() {
        return book_num;
    }

    public void setBook_num(String book_num) {
        this.book_num = book_num;
    }

    public Date getBook_createtime() {
        return book_createtime;
    }

    public void setBook_createtime(Timestamp book_createtime) {
        this.book_createtime = book_createtime;
    }

    public Date getBook_deletetime() {
        return book_deletetime;
    }

    public void setBook_deletetime(Timestamp book_deletetime) {
        this.book_deletetime = book_deletetime;
    }

    public String getBook_address() {
        return book_address;
    }

    public void setBook_address(String book_address) {
        this.book_address = book_address;
    }

    public String getBook_from() {
        return book_from;
    }

    public void setBook_from(String book_from) {
        this.book_from = book_from;
    }

    public BigDecimal getBook_price() {
        return book_price;
    }

    public void setBook_price(BigDecimal book_price) {
        this.book_price = book_price;
    }

    public int getBook_amount() {
        return book_amount;
    }

    public void setBook_amount(int book_amount) {
        this.book_amount = book_amount;
    }

    public int getBook_typeid() {
        return book_typeid;
    }

    public void setBook_typeid(int book_typeid) {
        this.book_typeid = book_typeid;
    }

    public String getBook_type() {
        return book_type;
    }

    public void setBook_type(String book_type) {
        this.book_type = book_type;
    }

    public int getBook_borrowamount() {
        return book_borrowamount;
    }

    public void setBook_borrowamount(int book_borrowamount) {
        this.book_borrowamount = book_borrowamount;
    }

    public String getBook_text() {
        return book_text;
    }

    public void setBook_text(String book_text) {
        this.book_text = book_text;
    }

    @Override
    public String toString() {
        return "Book{" +
                "id=" + id +
                ", book_name='" + book_name + '\'' +
                ", book_num='" + book_num + '\'' +
                ", book_createtime=" + book_createtime +
                ", book_deletetime=" + book_deletetime +
                ", book_address='" + book_address + '\'' +
                ", book_from='" + book_from + '\'' +
                ", book_price=" + book_price +
                ", book_amount=" + book_amount +
                ", book_typeid=" + book_typeid +
                ", book_type='" + book_type + '\'' +
                ", book_borrowamount=" + book_borrowamount +
                ", book_text='" + book_text + '\'' +
                '}';
    }
}
