package com.librarymanagementsystem.pojo;

import java.io.Serializable;
import java.sql.Timestamp;
import java.util.Date;

public class User implements Serializable {
    private int id;
    private String user_name;
    private String user_password;
    private String user_num;
    private Timestamp user_createtime;
    private Timestamp user_deletetime;
    private int user_typeid;
    private String user_type;
    private String user_text;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUser_name() {
        return user_name;
    }

    public void setUser_name(String user_name) {
        this.user_name = user_name;
    }

    public String getUser_password() {
        return user_password;
    }

    public void setUser_password(String user_password) {
        this.user_password = user_password;
    }

    public String getUser_num() {
        return user_num;
    }

    public void setUser_num(String user_num) {
        this.user_num = user_num;
    }

    public Date getUser_createtime() {
        return user_createtime;
    }

    public void setUser_createtime(Timestamp user_createtime) {
        this.user_createtime = user_createtime;
    }

    public Date getUser_deletetime() {
        return user_deletetime;
    }

    public void setUser_deletetime(Timestamp user_deletetime) {
        this.user_deletetime = user_deletetime;
    }

    public int getUser_typeid() {
        return user_typeid;
    }

    public void setUser_typeid(int user_typeid) {
        this.user_typeid = user_typeid;
    }

    public String getUser_type() {
        return user_type;
    }

    public void setUser_type(String user_type) {
        this.user_type = user_type;
    }

    public String getUser_text() {
        return user_text;
    }

    public void setUser_text(String user_text) {
        this.user_text = user_text;
    }

}
