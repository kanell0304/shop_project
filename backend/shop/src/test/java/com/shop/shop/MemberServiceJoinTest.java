package com.shop.shop;

import com.shop.shop.domain.member.Address;
import com.shop.shop.domain.member.Member;
import com.shop.shop.domain.member.MemberRole;
import com.shop.shop.domain.member.MemberShip;
import com.shop.shop.dto.MemberDTO;
import com.shop.shop.repository.MemberRepository;
import com.shop.shop.service.MemberService;
import lombok.extern.log4j.Log4j2;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
@Transactional
@Log4j2
public class MemberServiceJoinTest {

    @Autowired
    private MemberService memberService;

    @Autowired
    private MemberRepository memberRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @BeforeEach
    void cleanUp() {
        memberRepository.deleteAll();
    }

    @Test
    @DisplayName("회원 가입 성공")
    void testMemberJoin() {
        // given
        MemberDTO memberDTO = MemberDTO.builder()
                .email("join@example.com")
                .password(passwordEncoder.encode("1234"))
                .memberName("가입유저")
                .phoneNumber("010-0000-0000")
                .address(new Address("12345", "서울시 강남구", "102동"))
                .wtrSns(false)
                .social(false)
                .delFlag(false)
                .memberShip(MemberShip.BRONZE)
                .roleNames(List.of(MemberRole.USER.name()))
                .build();

        // when
        memberService.makeMember(memberDTO);

        // then
        Member saved = memberRepository.findByEmail("join@example.com");
        assertThat(saved).isNotNull();
        assertThat(saved.getMemberName()).isEqualTo("가입유저");
        assertThat(saved.getAddress().getZip_code()).isEqualTo("12345");
        assertThat(saved.getMemberRoleList()).contains(MemberRole.USER);

        log.info("가입된 회원 정보: {}", saved);
    }
}
