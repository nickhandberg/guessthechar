package com.nok.gtc.controller;

import com.nok.gtc.model.Char;
import com.nok.gtc.repository.CharRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping()
public class CharController {

    private final String origin = "http://localhost:4200";

    private final CharRepository charRepository;

    @Autowired
    public CharController(CharRepository charRepository){
        this.charRepository = charRepository;
    }

//    @GetMapping
//    public List<Char> getAllChars() {
//        return charRepository.findAll();
//    }

    @CrossOrigin(origins = origin)
    @GetMapping()
    public Char getCharById(@RequestParam() int id) {
        return charRepository.findCharById(id);
    }

    @CrossOrigin(origins = origin)
    @GetMapping("/last")
    public int getLastCharId() {
        List<Char> list = charRepository.findAll();
        return list.get(list.size()-1).getId();
    }
}
