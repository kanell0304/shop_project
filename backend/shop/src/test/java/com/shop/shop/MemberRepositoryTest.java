package com.shop.shop;

import com.shop.shop.domain.member.Address;
import com.shop.shop.domain.member.Member;
import com.shop.shop.domain.member.MemberRole;
import com.shop.shop.domain.member.MemberShip;
import com.shop.shop.repository.MemberRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@Transactional
@Repository
public class MemberRepositoryTest {

    @Autowired
    private MemberRepository memberRepository;

    @BeforeEach
    void setup() {
        // 테스트 전에 DB 초기화
        memberRepository.deleteAll();
    }

    @Test
    @DisplayName("회원 이메일로 조회(getWithRoles) 테스트")
    void testGetWithRoles() {
        // 1️⃣ 테스트용 회원 데이터 생성
        Member member = Member.builder()
                .email("test@example.com")
                .password("$2a$10$EwqvO8c....") // 암호화된 비밀번호
                .memberName("테스트 유저")
                .phoneNumber("010-1234-5678")
                .address(new Address("12345", "서울시 강남구", "101호"))
                .wtrSns(false)
                .social(false)
                .delFlag(false)
                .memberShip(MemberShip.BRONZE)
                .memberRoleList(List.of(MemberRole.USER)) // 역할 추가
                .build();

        // 2️⃣ 저장
        memberRepository.save(member);

        // 3️⃣ 이메일로 조회 테스트
        Member foundMember = memberRepository.getWithRoles("test@example.com");

        // 4️⃣ 검증
        assertThat(foundMember).isNotNull();
        assertThat(foundMember.getEmail()).isEqualTo("test@example.com");
        assertThat(foundMember.getMemberRoleList()).isNotEmpty(); // 역할이 존재하는지 확인
    }

}
