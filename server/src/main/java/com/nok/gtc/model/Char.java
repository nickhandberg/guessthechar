package com.nok.gtc.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Char {

    @Id
    private String id;

    private String name;
    private String game;
    private String[] hints;
    private String[] imageLinks;

    public Char(String id, String name, String game, String[] hints, String[] imageLinks){
        super();
        this.id = id;
        this.name = name;
        this.game = game;
        this.hints = hints;
        this.imageLinks = imageLinks;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getGame() {
        return game;
    }

    public void setGame(String game) {
        this.game = game;
    }

    public String[] getHints() {
        return hints;
    }

    public void setHints(String[] hints) {
        this.hints = hints;
    }

    public String[] getImageLinks() {
        return imageLinks;
    }

    public void setImageLinks(String[] imageLinks) {
        this.imageLinks = imageLinks;
    }
}
