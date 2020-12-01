package com.librarymanagementsystem.util;

import io.swagger.annotations.ApiOperation;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;


@Configuration
public class Swagger3Config {
    @Bean
    public Docket createRestApi() {

        return new Docket(DocumentationType.OAS_30)

                .apiInfo(apiInfo())

                .select()

                .apis(RequestHandlerSelectors.withMethodAnnotation(ApiOperation.class))

                .paths(PathSelectors.any())

                .build();

    }

    private ApiInfo apiInfo() {

        return new ApiInfoBuilder()

                .title("Swagger3接口文档")

                .description("图书管理系统")

                .contact(new Contact("于克旺", "http://localhost:8080/", "111111@qq.com"))

                .version("1.0")

                .build();

    }
}
