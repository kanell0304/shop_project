package com.shop.shop.domain.Member;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class Member {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "member_id")
    private Long id;

    private String email;
    private String password;
    private String memberName;
    private String phoneNumber;
    private int stockMileage;
    private LocalDateTime joinDate;
    private boolean wtrSns;
    private boolean delFlag;

    @Enumerated(EnumType.STRING)
    private MemberShip memberShip;

}
