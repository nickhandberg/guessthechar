package com.nok.gtc;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import org.springframework.web.bind.annotation.RestController;


@SpringBootApplication
@RestController
@EnableMongoRepositories
public class GTCApp {

	public static void main(String[] args) {
		SpringApplication.run(GTCApp.class, args);
	}

}
