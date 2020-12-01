package com.librarymanagementsystem;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import springfox.documentation.oas.annotations.EnableOpenApi;

@EnableOpenApi
@SpringBootApplication
@MapperScan("com.librarymanagementsystem.mapper")
public class LibrarymanagementsystemApplication {

    public static void main(String[] args) {
        SpringApplication.run(LibrarymanagementsystemApplication.class, args);
    }

}
