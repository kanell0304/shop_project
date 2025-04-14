package com.shop.shop.repository;

import com.shop.shop.domain.order.Order;
import com.shop.shop.dto.OrderDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface OrderRepository extends JpaRepository<Order, Long> {

    // 회원 Id를 기준으로 주문 내역 모두 조회
    @Query("SELECT o FROM Order o WHERE o.member.id = :memberId AND o.delFlag = false")
    public List<OrderDTO> findAllByMemberId(@Param("memberId") Long memberId);

//    // 배달 Id를 기준으로 주문 내역 조회
//    @Query("SELECT o FROM Order o WHERE o.delivery.id = :deliveryId AND o.delFlag = false")
//    public OrderDTO findByDeliveryId(@Param("deliveryId") Long deliveryId);

    // 특정 기간동안의 주문내역 조회
    @Query("SELECT o FROM Order o WHERE o.orderDate BETWEEN :orderDate1 AND :orderDate2")
    public List<OrderDTO> findByDuringPeriod(@Param("orderDate1") LocalDateTime orderDate1, @Param("orderDate2") LocalDateTime orderDate2);

    // 특정 회원의 특정 기간동안의 주문 내역 조회
    @Query("SELECT o FROM Order o WHERE o.member.id = :memberId AND o.orderDate BETWEEN :orderDate1 AND :orderDate2")
    public List<OrderDTO> findByDuringPeriodFromMemberId(@Param("memberId") Long memberId, @Param("orderDate1") LocalDateTime orderDate1, @Param("orderDate2") LocalDateTime orderDate2);

}
