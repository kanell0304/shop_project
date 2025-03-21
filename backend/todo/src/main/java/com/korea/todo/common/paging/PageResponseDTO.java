package com.korea.todo.common.paging;

import lombok.Builder;
import lombok.Data;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

@Data
public class PageResponseDTO<E> {

    private List<E> dtoList; // 실제 데이터 리스트
    private List<Integer> pageNumList; // 현재 페이지 그룹의 번호 리스트 [1,2,3,...10]
    private PageRequestDTO pageRequestDTO;
    // 요청받은 페이지 번호와 갯수가 담겨 있는 객체 = page, size를 담는 객체
    private boolean prev, next; // 이전, 다음 페이지 존재여부
    private int totalCount, prevPage, nextPage, totalPage, current;
    // 전체 데이터 갯수, 이전 페이지, 다음 페이지, 전체 페이지수, 현재 페이지


    // 생성자
    @Builder(builderMethodName = "withAll") // 메서드 이름 지정
    public PageResponseDTO(List<E> dtoList, PageRequestDTO pageRequestDTO, int totalCount) {
        this.dtoList = dtoList;
        this.pageRequestDTO = pageRequestDTO;
        this.totalCount = totalCount;

        // 페이지 정보 생성하는 로직
        int end = (int)(Math.ceil(pageRequestDTO.getPage()/10.0)) *  10;
        int start = end - 9;
        int last = (int)(Math.ceil( (totalCount / (double)pageRequestDTO.getSize()))) ;

        end = (end > last) ? last : end;

        // 이전, 다음 페이지 존재여부
        // end 페이지 끝이 , 전체 데이터 범위 초과하지 않으면 - 다음 페이지 그룹 있음
        this.prev = start > 1; // start가 1 미만이면? 이전 페이지 없음
        this.next = totalCount > end * pageRequestDTO.getSize();

        // 1~8페이지 : 리스트화 시킴
        // IntStream.rangeClosed(start,end) - 시작번호, 끝번호까지 숫자 생성
        // boxed() : 기본자료형 int -> Integer로 벼환
        // 생성된 숫자를 list로 변환
        this.pageNumList = IntStream.rangeClosed(start,end).boxed().collect(Collectors.toList());

        // 이전페이지 번호 저장
        if(prev){
            this.prevPage = start - 1;
        }

        // 다음 페이지 번호 저장
        if(next) {
            this.nextPage = end + 1;
        }

        this.totalPage = this.pageNumList.size(); // 총 페이지 갯수 18페이지 (11~18 - 8개)
        this.current = pageRequestDTO.getPage(); // 현재페이지
    }

}


/*
        전체데이터 : 187개
        현재 페이지가 : 15페이지이면
        15페이지 : 기준으로 시작페이지 11번 / 종료페이지는 20번으로 계산됨
        5페이지  : 1번 / 종료 10번으로 계산된다.

            1) end = 마지막 페이지 번호 계산
                EX ) Page = 15;
                Math.ceil ( 15 / 10.0) ->  1.5를 올림 = 2.0
                (int) 2.0 = 2 * 10  = 20
                종료 : 10
            2) start = 10 - 9 = 1
                시작 : 1 ~ 종료 : 10
            3) last
                totalCount = 75, size = 10
                95 / 10 = 7.5 올림 => 8
                마지막 : 8페이지

         */

 /*
    클라이언트 요청: (PageRequestDTO)
        현재 페이지: 15
        페이지 크기: 10
    계산 결과: (PageResponseDTO)
        전체 데이터 수: 105
        start: 11, end: 20
        prev: true, next: true
        prevPage: 10, nextPage: 21
        pageNumList: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
        totalPage: 10
        current: 15
    * */

