package com.shop.shop.repository;

import com.shop.shop.domain.cart.WishList;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface WishListRepository extends JpaRepository<WishList, Long> {

//    @EntityGraph(attributePaths = {"item"})
//    @Query("SELECT wl FROM WishList wl WHERE wl.member.id = :memberId")
//    List<WishList> findAllByMemberId(@Param("memberId") Long memberId);

    @Query("SELECT wl FROM WishList wl " +
            "JOIN FETCH wl.item i " +
            "LEFT JOIN FETCH i.images " +
            "WHERE wl.member.id = :memberId")
    List<WishList> findWithItemImagesByMemberId(@Param("memberId") Long memberId);

    @Query("SELECT wl FROM WishList wl " +
            "JOIN FETCH wl.item i " +
            "LEFT JOIN FETCH i.images " +
            "WHERE wl.member.id = :memberId")
    Page<List<WishList>> findWithItemImagesByMemberId(Pageable pageable, @Param("memberId") Long memberId);

    @Query("SELECT wl FROM WishList wl WHERE wl.item.id = :itemId")
    WishList findByItemId(@Param("itemId") Long itemId);

    @Query("SELECT wl FROM WishList wl WHERE wl.item.id = :itemId AND wl.member.id = :memberId")
    WishList existsByItemIdAndMemberId(@Param("itemId") Long itemId, @Param("memberId") Long memberId);

}
