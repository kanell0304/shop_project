package com.shop.shop.service;

import com.shop.shop.domain.member.Address;
import com.shop.shop.domain.member.Member;
import com.shop.shop.domain.member.MemberRole;
import com.shop.shop.domain.member.MemberShip;
import com.shop.shop.dto.MemberDTO;
import com.shop.shop.dto.MemberModifyDTO;
import com.shop.shop.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponents;
import org.springframework.web.util.UriComponentsBuilder;

import java.time.LocalDateTime;
import java.util.LinkedHashMap;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Log4j2
public class MemberServiceImpl implements MemberService{

    private final MemberRepository memberRepository;
    private final PasswordEncoder passwordEncoder;

    // 문제
    @Override
    public MemberDTO getKakaoMember(String accessToken) {
        String email = getEmailFromKakaoAccessToken(accessToken); // accessToken 으로 이메일 추출
        Optional<Member> result = Optional.ofNullable(memberRepository.findByEmail(email)); // 이메일로 db에서 엔티티 조회

        if (result.isPresent()) { // 값이 있으면 -> 기존회원
            MemberDTO memberDTO = entityToDTO(result.get()); // dto 변환해서 반환
            return memberDTO;
        }

        Member socialMember = makeSocialMember(email); // 신규 회원 생성
        memberRepository.save(socialMember); // 엔티티 db에 저장

        MemberDTO memberDTO = entityToDTO(socialMember); // DTO 반환 후 반환
        return memberDTO;
    }

    // 문제
    private String getEmailFromKakaoAccessToken(String accessToken) {
        String kakaoGetUserURL = "https://kapi.kakao.com/v2/user/me";

        if (accessToken == null) {
            throw new RuntimeException("Access Token is null");
        }

        RestTemplate restTemplate = new RestTemplate(); // http 요청을 보내기 위한 객체

        HttpHeaders headers = new HttpHeaders(); // 헤더 설정
        headers.add("Authorization", "Bearer " + accessToken);
        headers.add("Content-Type", "application/x-www-form-urlencoded");

        // http 요청 or 응답을 나타내는 객체 생성 - header 만 설정하고 body 가 없는 상태
        HttpEntity<String> entity = new HttpEntity<>(headers);

        // URL 을 동적으로 생성 - 이것을 기반으로 URI 객체 생성
        UriComponents uriBuilder = UriComponentsBuilder.fromHttpUrl(kakaoGetUserURL).build();

        // RestTemplate 으로 get 요청을 보냄
        // Json 응답을 -> LinkedHashMap 객체로 받음
        ResponseEntity<LinkedHashMap> response = restTemplate.exchange(
                uriBuilder.toString(), // 요청 url
                HttpMethod.GET, // 요청 메서드
                entity, // 요청 헤더 정보
                LinkedHashMap.class // 응답(json)을 LinkedHashMap 타입으로 변환
        );

        // 작성x
        LinkedHashMap<String, LinkedHashMap> bodyMap = response.getBody();

        LinkedHashMap<String, String> kakaoAcount = bodyMap.get("kakao_account");

        return kakaoAcount.get("email");
    }

    private String makeTempPassword() {
        StringBuffer buffer = new StringBuffer();
        for (int i = 0; i < 10; i++) {
            buffer.append((char)((int)(Math.random()*55) + 65));
            // 아스키 코드표 : 65~119 사이의 문자가 랜덤으로 10자리 생성 -> 임시비밀번호
        }
        return buffer.toString();
    }

    private Member makeSocialMember(String email) {
        String tempPassword = makeTempPassword();
        log.info("tempPassword : " + tempPassword);
        int randomId = (int) (Math.random()*1000 + 1);
        String memberName = "소셜회원#" + randomId;

        Member member = Member.builder()
                .email(email)
                .password(passwordEncoder.encode(tempPassword))
                .memberName(memberName)
                .phoneNumber("설정되지 않음")
                .joinDate(LocalDateTime.now())
                .memberShip(MemberShip.BRONZE)
                .address(new Address("설정되지 않음", "설정되지 않음", "설정되지 않음"))
                .wtrSns(false)
                .social(true)
                .delFlag(false)
                .build();
        member.addRole(MemberRole.USER);

        return member;
    }

    // 회원정보 수정
    @Override
    public void modifyMember(MemberModifyDTO memberModifyDTO) {
        Member result = memberRepository.findByEmail(memberModifyDTO.getEmail());
//        Member member = result.orElseThrow();
        log.info("SNS 동의 여부 " + memberModifyDTO.isWtrSns());

        result.changePassword(passwordEncoder.encode(memberModifyDTO.getPassword()));
//        result.changePassword(memberModifyDTO.getPassword());
        result.changePhoneNumber(memberModifyDTO.getPhoneNumber());
        result.changeWtrSns(memberModifyDTO.isWtrSns());
        result.getAddress().setZip_code(memberModifyDTO.getZip_code());
        result.getAddress().setDefault_address(memberModifyDTO.getDefault_address());
        result.getAddress().setDetailed_address(memberModifyDTO.getDetailed_address());

        memberRepository.save(result);
    }

}
