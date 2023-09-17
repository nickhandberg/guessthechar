package com.nok.gtc.repository;

import com.nok.gtc.model.Char;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface CharRepository extends MongoRepository<Char, String> {

    List<Char> findAll();
}
