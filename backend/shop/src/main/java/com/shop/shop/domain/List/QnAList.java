package com.shop.shop.domain.List;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.shop.shop.domain.Item.Item;
import com.shop.shop.domain.Member.Member;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class QnAList {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "qna_list_id")
    private Long id;

    private String title;
    private String writer;
    private int score;
    private LocalDateTime date;
    private boolean answer;

    @Lob
    private String content;

    @JsonIgnore // 순환참조 방지
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "parent_id")
    private QnAList parent;

    @OneToMany(mappedBy = "parent")
    @Builder.Default
    private List<QnAList> child = new ArrayList<>();

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id")
    private Member member;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "item_id")
    private Item item;

}
