package com.nok.gtc.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Suggestion {



    private final String name;

    public Suggestion( String name){

        this.name    = name;
    }

    public String getName() {
        return name;
    }
}
