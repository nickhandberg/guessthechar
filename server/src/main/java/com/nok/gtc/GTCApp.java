package com.nok.gtc;

import com.nok.gtc.model.Char;
import com.nok.gtc.repository.CharRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@SpringBootApplication
@RestController
@EnableMongoRepositories
public class GTCApp {

	@Autowired
	CharRepository charRepository;

	public static void main(String[] args) {
		SpringApplication.run(GTCApp.class, args);
	}

	@GetMapping
	public List<Char> test() {
		return charRepository.findAll();
	}

}
