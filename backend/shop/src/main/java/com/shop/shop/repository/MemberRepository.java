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

    // 권한과 함께 회원 조회
    @EntityGraph(attributePaths = {"memberRoleList"})
    @Query("select m from Member m where m.email = :email")
    Member getWithRoles(@Param("email") String email);

    // 이메일로 조회
    @Query("select m from Member m where m.email = :email AND m.delFlag = false")
    Member findByEmail(@Param("email") String email);

    // 이름으로 회원 조회
    List<Member> findByMemberName(String memberName);

    // 회원 여부 검사
    boolean existsByEmail(String email);

}
