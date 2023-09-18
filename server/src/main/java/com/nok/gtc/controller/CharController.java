package com.nok.gtc.controller;

import com.nok.gtc.model.Char;
import com.nok.gtc.repository.CharRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping()
public class CharController {

    private final CharRepository charRepository;

    @Autowired
    public CharController(CharRepository charRepository){
        this.charRepository = charRepository;
    }

    @GetMapping
    public List<Char> getAllChars() {
        return charRepository.findAll();
    }

    @GetMapping("/last")
    public int getLastCharId() {
        List<Char> list = charRepository.findAll();
        int id = list.get(list.size()-1).getId();
        return id;
    }
}
