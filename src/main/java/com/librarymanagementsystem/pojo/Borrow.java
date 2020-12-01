package com.librarymanagementsystem.pojo;

import java.math.BigDecimal;
import java.sql.Timestamp;
import java.util.Date;

public class Borrow {
    private int id;
    private int borrow_use_id;
    private int borrow_bookid;
    private String borrow_bookname;
    private int borrow_typeid;
    private String borrow_type;
    private int borrow_times;
    private Timestamp borrow_starttime;
    private Timestamp borrow_endtime;
    private int borrow_moretime;
    private BigDecimal borrow_price;
    private BigDecimal borow_moreprice;
    private BigDecimal borrow_amountprice;
    private String borrow_text;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getBorrow_use_id() {
        return borrow_use_id;
    }

    public void setBorrow_use_id(int borrow_use_id) {
        this.borrow_use_id = borrow_use_id;
    }

    public int getBorrow_bookid() {
        return borrow_bookid;
    }

    public void setBorrow_bookid(int borrow_bookid) {
        this.borrow_bookid = borrow_bookid;
    }

    public String getBorrow_bookname() {
        return borrow_bookname;
    }

    public void setBorrow_bookname(String borrow_bookname) {
        this.borrow_bookname = borrow_bookname;
    }

    public int getBorrow_typeid() {
        return borrow_typeid;
    }

    public void setBorrow_typeid(int borrow_typeid) {
        this.borrow_typeid = borrow_typeid;
    }

    public String getBorrow_type() {
        return borrow_type;
    }

    public void setBorrow_type(String borrow_type) {
        this.borrow_type = borrow_type;
    }

    public int getBorrow_times() {
        return borrow_times;
    }

    public void setBorrow_times(int borrow_times) {
        this.borrow_times = borrow_times;
    }

    public Timestamp getBorrow_starttime() {
        return borrow_starttime;
    }

    public void setBorrow_starttime(Timestamp borrow_starttime) {
        this.borrow_starttime = borrow_starttime;
    }

    public Timestamp getBorrow_endtime() {
        return borrow_endtime;
    }

    public void setBorrow_endtime(Timestamp borrow_endtime) {
        this.borrow_endtime = borrow_endtime;
    }

    public int getBorrow_moretime() {
        return borrow_moretime;
    }

    public void setBorrow_moretime(int borrow_moretime) {
        this.borrow_moretime = borrow_moretime;
    }

    public BigDecimal getBorrow_price() {
        return borrow_price;
    }

    public void setBorrow_price(BigDecimal borrow_price) {
        this.borrow_price = borrow_price;
    }

    public BigDecimal getBorow_moreprice() {
        return borow_moreprice;
    }

    public void setBorow_moreprice(BigDecimal borow_moreprice) {
        this.borow_moreprice = borow_moreprice;
    }

    public BigDecimal getBorrow_amountprice() {
        return borrow_amountprice;
    }

    public void setBorrow_amountprice(BigDecimal borrow_amountprice) {
        this.borrow_amountprice = borrow_amountprice;
    }

    public String getBorrow_text() {
        return borrow_text;
    }

    public void setBorrow_text(String borrow_text) {
        this.borrow_text = borrow_text;
    }

    @Override
    public String toString() {
        return "borrow{" +
                "id=" + id +
                ", borrow_use_id=" + borrow_use_id +
                ", borrow_bookid=" + borrow_bookid +
                ", borrow_bookname='" + borrow_bookname + '\'' +
                ", borrow_typeid=" + borrow_typeid +
                ", borrow_type='" + borrow_type + '\'' +
                ", borrow_times=" + borrow_times +
                ", borrow_starttime=" + borrow_starttime +
                ", borrow_endtime=" + borrow_endtime +
                ", borrow_moretime=" + borrow_moretime +
                ", borrow_price=" + borrow_price +
                ", borow_moreprice=" + borow_moreprice +
                ", borrow_amountprice=" + borrow_amountprice +
                ", borrow_text='" + borrow_text + '\'' +
                '}';
    }
}
