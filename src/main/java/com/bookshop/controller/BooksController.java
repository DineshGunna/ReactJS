package com.bookshop.controller;

import com.bookshop.model.Book;
import com.bookshop.service.BookServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;
import java.util.Set;
import java.util.TreeSet;

@RestController
@CrossOrigin("http://localhost:3000")
public class BooksController {

    @Autowired
    BookServiceImpl bookserviceimpl;
    @GetMapping("/books/search/{searchText}")
    public Page<Book> filterBooks(Pageable pageable,@PathVariable String searchText){

        return bookserviceimpl.filterBooks(pageable,searchText);

    }
    @GetMapping("/books")
    public Page<Book> getAllBooks(int pageNumber, int pageSize,String sortBy, String sortDir ) {

        return  bookserviceimpl.getAllBooks(
                PageRequest.of(
                        pageNumber, pageSize,
                        sortDir.equalsIgnoreCase("asc") ? Sort.by(sortBy).ascending() : Sort.by(sortBy).descending()
                )
        );
    }
    @GetMapping("/book/{bookid}")
    public Book getByBookid(@PathVariable Long bookid) {

        return  bookserviceimpl.getByBookid(bookid);
    }

    @GetMapping("/book/languages")
    public  ResponseEntity<Set<String>> findAllLanguages() {
        return new ResponseEntity<>(new TreeSet<>(Arrays.asList("French", "Portuguese", "English", "Russian", "Hindi", "Arabic", "Spanish", "Telugu","Korean")), HttpStatus.OK);
   }
    @GetMapping("/book/genre")
    public  ResponseEntity<Set<String>> findAllGenre() {
        return new ResponseEntity<>(new TreeSet<>(Arrays.asList("Technology", "Science", "History", "Fantasy", "Biography", "Horror", "Romance")), HttpStatus.OK);
    }

    @PostMapping("/books")
    public Book addBook(@RequestBody Book book) {

        return  bookserviceimpl.addBook(book);
    }
    @PutMapping("/books")
    public Book updateBook(@RequestBody Book book) {

        return bookserviceimpl.updateBook(book);
    }
    @DeleteMapping("/book/{bookid}")
    public Long deleteById( @PathVariable Long bookid) {

        return bookserviceimpl.deleteById(bookid);
    }
}
