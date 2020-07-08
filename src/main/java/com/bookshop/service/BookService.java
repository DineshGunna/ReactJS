package com.bookshop.service;

import com.bookshop.model.Book;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

public interface BookService {

    public Page<Book> filterBooks(Pageable pageable,String searchText);

    public Page<Book> getAllBooks(Pageable pageable);

    public Book getByBookid(Long bookid);

    public Book addBook(Book book);

    public Book updateBook(Book book);

    public Long deleteById(Long bookid);


}
