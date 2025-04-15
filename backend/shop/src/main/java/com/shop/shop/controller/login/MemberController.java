package com.shop.shop.controller.login;

import com.shop.shop.dto.MemberDTO;
import com.shop.shop.repository.MemberRepository;
import com.shop.shop.service.MemberService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.modelmapper.ModelMapper;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequiredArgsConstructor
@Log4j2
@RequestMapping("/api/member")
public class MemberController {

    private final MemberService memberService;
    private final MemberRepository memberRepository;
    private final ModelMapper modelMapper;

    @PostMapping("/register")
    public Map<String, String> registerMember(@RequestBody MemberDTO memberDTO) {
        memberService.makeMember(memberDTO);
        return Map.of("result", "create");
    }

    // 모든 회원 조회
    @GetMapping("/list") // 기본 주소로 동작 -> /api/members
    public ResponseEntity<List<MemberDTO>> getAllMembers() {
        return ResponseEntity.ok(memberService.getAllMembers());
    }

    //     특정 회원 조회 (ID 기준)
//     /api/members/login 접속하게 되면 아래의 메서드에 매핑이 될 수 있다. --> 에러
//     /api/members/id/3 == 이렇게 처리
    @GetMapping("/id/{id}")
    public ResponseEntity<MemberDTO> getMember(@PathVariable Long id) {
        return ResponseEntity.ok(memberService.getMemberById(id));
    }

    // 이메일로 조회
    @GetMapping("/get/{email}")
    public ResponseEntity<MemberDTO> getMemberByEmail(@PathVariable String email) {
        return ResponseEntity.ok(memberService.getMemberByEmail(email));
    }

    // 회원 삭제
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteMember(@PathVariable Long id) {
        memberService.deleteMember(id);
        return ResponseEntity.noContent().build();
    }

    // 특정 이름으로 회원 검색
    @GetMapping("/search")
    public ResponseEntity<List<MemberDTO>> getMembersByName(@RequestParam String name) {
        return ResponseEntity.ok(memberService.getMembersByName(name));
    }

    // 회원 존재 여부 확인
    @GetMapping("/{id}/exists")
    public ResponseEntity<Boolean> existsById(@PathVariable Long id) {
        return ResponseEntity.ok(memberService.existsById(id));
    }

}
