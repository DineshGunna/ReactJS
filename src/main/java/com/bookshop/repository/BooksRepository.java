package com.bookshop.repository;

import com.bookshop.model.Book;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface BooksRepository extends PagingAndSortingRepository<Book,Long> {

    @Query("From Book b Where b.title=:searchText OR b.author=:searchText OR b.language=:searchText OR b.genre=:searchText ORDER BY b.price DESC ")
     Page<Book> filterBooks(Pageable pageable,@Param("searchText") String searchText);

}
