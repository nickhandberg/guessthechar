package com.nok.gtc.controller;

import com.mongodb.BasicDBObject;
import com.nok.gtc.model.Suggestion;
import com.nok.gtc.repository.SuggestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

@RestController
@RequestMapping("/autocomplete")
public class SuggestionController {

    private final SuggestionRepository suggestionRepository;

    @Autowired
    public SuggestionController(SuggestionRepository suggestionRepository){
        this.suggestionRepository = suggestionRepository;
    }

    @GetMapping
    public List<Suggestion> getSuggestions(@RequestParam() String ac) {
        return ac.equals("") ? null : suggestionRepository.findSuggestionsByName(ac, PageRequest.of(0, 15));
    }

}
