package com.shop.shop.service;

import org.springframework.transaction.annotation.Transactional;
import com.shop.shop.domain.member.Member;
import com.shop.shop.dto.MemberDTO;
import com.shop.shop.dto.MemberModifyDTO;

import java.util.stream.Collectors;

@Transactional
public interface MemberService {

    MemberDTO getKakaoMember(String accessToken);
    void modifyMember(MemberModifyDTO memberModifyDTO);

    default MemberDTO entityToDTO(Member member) {
        MemberDTO dto = new MemberDTO(
                member.getEmail(),
                member.getPassword(),
                member.getMemberName(),
                member.getPhoneNumber(),
                member.getStockMileage(),
                member.getJoinDate(),
                member.isWtrSns(),
                member.isSocial(),
                member.isDelFlag(),
                member.getMemberShip(),
                member.getMemberRoleList().stream()
                        .map(memberRole -> memberRole.name())
                        .collect(Collectors.toList())
        );
        return dto;
    }

}
