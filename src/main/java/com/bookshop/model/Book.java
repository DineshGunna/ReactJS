package com.bookshop.model;

import com.sun.istack.NotNull;

import javax.persistence.*;

@Entity
@Table
public class Book {


    @Id
    @Column
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long bookid;
    @Column
    private String title;
    @Column
    private String author;
    @Column
    private Double price;
    @Column
    @NotNull
    private String language;
    @Column
    @NotNull
    private String genre;

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    public Long getBookid() {
        return bookid;
    }

    public void setBookid(Long bookid) {
        this.bookid = bookid;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public String getLanguage() {
        return language;
    }

    public void setLanguage(String language) {
        this.language = language;
    }




}
