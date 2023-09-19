package com.nok.gtc.repository;

import com.nok.gtc.model.Char;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface CharRepository extends MongoRepository<Char, String> {

    List<Char> findAll();

    Char findCharById(int id);
}
