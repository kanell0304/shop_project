package com.shop.shop.controller;

import com.shop.shop.dto.MemberDTO;
import com.shop.shop.dto.MemberModifyDTO;
import com.shop.shop.service.MemberService;
import com.shop.shop.util.JWTUtil;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequiredArgsConstructor
@Log4j2
public class SocialController {

    private final MemberService memberService;

    // 문제
    @GetMapping("/api/member/kakao")
    public Map<String, Object> getMemberFromKakao(String accessToken) {
        MemberDTO memberDTO = memberService.getKakaoMember(accessToken); // 회원 정보 조회 -> 반환 or 생성 -> 반환
        Map<String, Object> claims = memberDTO.getClaims(); // map 형식 변환

        String jwtAccessToken = JWTUtil.generateToken(claims, 10);
        String jwtRefreshToken = JWTUtil.generateToken(claims, 60*24);

        // 현재 내 서버에서 accessToken, refreshToken 발급 받아서 추가
        claims.put("accessToken", jwtAccessToken);
        claims.put("refreshToken", jwtRefreshToken);

        return claims; // 사용자 정보 최종 반환 : 기본 정보 조회 + 토큰 생성해서 첨부
    }

    @PutMapping("api/member/modify")
    public Map<String, String> modify(@RequestBody MemberModifyDTO memberModifyDTO) {
        memberService.modifyMember(memberModifyDTO);
        return Map.of("result", "modified");
    }

}
