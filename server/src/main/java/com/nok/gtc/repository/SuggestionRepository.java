package com.nok.gtc.repository;

import com.nok.gtc.model.Suggestion;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface SuggestionRepository extends MongoRepository<Suggestion, String> {

    @Query(value = "{'name': {$regex : '^?0', $options: 'i'}}")
    List<Suggestion> findSuggestionsByName(String name, PageRequest pr);

}
