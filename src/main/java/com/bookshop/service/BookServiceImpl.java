package com.bookshop.service;

import com.bookshop.model.Book;
import com.bookshop.repository.BooksRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class BookServiceImpl implements BookService{
    @Autowired
    BooksRepository bookrepository;

    @Override
    public Page<Book> filterBooks(Pageable pageable,String searchText){
        return bookrepository.filterBooks(pageable,searchText);
    }
    @Override
    public Page<Book> getAllBooks(Pageable pageable){
        List<Book> books = new ArrayList<Book>();
        return bookrepository.findAll(pageable);
    }

    @Override
    public Book getByBookid(Long bookid) {

        return bookrepository.findById(bookid).get();

    }

    @Override
    public Book addBook(Book book) {

        bookrepository.save(book);
        return book;
    }

    @Override
    public Book updateBook(Book book) {
        bookrepository.save(book);
        return book;
    }

    @Override
    public Long deleteById(Long bookid)
    {
        bookrepository.deleteById(bookid);
        return bookid;

    }
}
