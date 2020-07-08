package com.bookshop;

import com.bookshop.model.Book;
import com.bookshop.service.BookServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class BookApiApplication implements CommandLineRunner {

	@Autowired
	private  BookServiceImpl bookserviceimpl;;

	public static void main(String[] args) {
		SpringApplication.run(BookApiApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {

		Book book1 = new Book();
		book1.setTitle("Prince Caspean");
		book1.setAuthor("C.S.Lewis");
		book1.setLanguage("English");
		book1.setPrice(745.0 );
		book1.setGenre("Fantasy");
		bookserviceimpl.addBook(book1);

		Book book2 = new Book();
		book2.setTitle("Narnia");
		book2.setAuthor("Arturo Mark");
		book2.setLanguage("Spanish");
		book2.setPrice(866.0 );
		book2.setGenre("Horror");
		bookserviceimpl.addBook(book2);

		Book book3 = new Book();
		book3.setTitle("Prince of carribean");
		book3.setAuthor("Stephen Jhonson");
		book3.setLanguage("German");
		book3.setPrice(2499.0 );
		book3.setGenre("Fiction");
		bookserviceimpl.addBook(book3);

		Book book4 = new Book();
		book4.setTitle("Story Tales");
		book4.setAuthor("Louis Philip");
		book4.setLanguage("Japanese");
		book4.setPrice(250.0 );
		book4.setGenre("Fantasy");
		bookserviceimpl.addBook(book4);

	}
}
