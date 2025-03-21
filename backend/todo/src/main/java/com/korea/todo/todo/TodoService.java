package com.korea.todo.todo;

import com.korea.todo.page.PageRequestDTO;
import com.korea.todo.page.PageResponseDTO;

public interface TodoService {

    Long register(TodoDTO todoDTO); // 등록
    TodoDTO get(Long tno); // 조회
    void modify(TodoDTO todoDTO); // 수정
    void remove(Long tno); // 삭제

    // 목록 페이지 처리
    PageResponseDTO<TodoDTO> list(PageRequestDTO pageRequestDTO);

}
