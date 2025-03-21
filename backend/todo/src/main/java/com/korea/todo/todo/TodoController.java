package com.korea.todo.todo;

import com.korea.todo.page.PageRequestDTO;
import com.korea.todo.page.PageResponseDTO;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@Log4j2
@RequestMapping("/api/todo")
public class TodoController {

    private final TodoService service;

    // localhost:8080/api/todo/33
    @GetMapping("/{tno}")
    public TodoDTO get(@PathVariable(name = "tno") Long tno){

        return service.get(tno);
    }

    // localhost:8080/api/todo/list?page=3&size=10
    @GetMapping("/list")
    public PageResponseDTO<TodoDTO> get(PageRequestDTO pageRequestDTO){

        log.info(pageRequestDTO);
        return service.list(pageRequestDTO);
    }
}
