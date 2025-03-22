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
    private String member_name;
    private String phone_number;
    private int stock_mileage;
    private LocalDateTime join_date;
    private boolean wtr_sns;
    private boolean del_flag;

}
