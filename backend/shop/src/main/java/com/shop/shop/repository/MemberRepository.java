package com.shop.shop.repository;

import com.shop.shop.domain.member.Member;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

//@DataJpaTest
@Repository
public interface MemberRepository extends JpaRepository<Member, Long> {

    @EntityGraph(attributePaths = {"memberRoleList"})
    @Query("select m from Member m where m.email = :email")
    Member getWithRoles(@Param("email") String email);

    @Query("select m from Member m where m.email = :email and m.delFlag = false")
    Member findByEmail(@Param("email") String email);

    List<Member> findByMemberName(String memberName);

    boolean existsByEmail(String email);

}
