package com.korea.todo;

import com.korea.todo.page.PageRequestDTO;
import com.korea.todo.page.PageResponseDTO;
import com.korea.todo.todo.Todo;
import com.korea.todo.todo.TodoDTO;
import com.korea.todo.todo.TodoRepository;
import com.korea.todo.todo.TodoService;
import lombok.extern.log4j.Log4j2;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

import java.time.LocalDate;
import java.util.Optional;

@SpringBootTest // 테스트 설정 관련 애노테이션
@Log4j2 // 로그 기록 = 개발 과정에서 디버깅이나 상태 확인 의한 로그 메시지 출력
public class TodoRepositoryTest {

    @Autowired
    private TodoRepository todoRepository;

    @Autowired
    private TodoService todoService;

    @Test
    public void test1(){
        log.info("-----@@@@@-----");
        log.info(todoRepository);
    }

//    @Test
//    public void testInsert(){
//        for(int i = 1; i <=100; i++){
//            Todo todo = Todo.builder()
//                    .title("Title..." + i)
//                    .dueDate(LocalDate.of(2025, 1, 1))
//                    .writer("user00")
//                    .build();
//            todoRepository.save(todo);
//        }
//    }

    @Test
    public void testRead(){
        Long tno = 3L;

        // 데이터 없으면 Optional.empty() 반환함
        // 있으면 해당 객체 반환
        Optional<Todo> result = todoRepository.findById(tno);
        Todo todo = result.orElseThrow();
        log.info(todo);

    }

    @Test
    public void testModify(){
        Long tno = 3L;
        Optional<Todo> result = todoRepository.findById(tno);
        Todo todo = result.orElseThrow();
        todo.changeTitle("Modified 3...");
        todo.changeComplete(true);
        todo.changeDueDate(LocalDate.of(2025,12,25));
        todoRepository.save(todo);
    }

    @Test
    public void testDelete(){
        Long tno = 1L;
        todoRepository.deleteById(tno);
    }

    @Test
    public void testPageing(){
        // 페이지 번호 : 1 (0부터 시작함)
        // 사이즈 : 10 (데이터를 10개씨 가져와라)
        // Sort.by (기준).descending(); - 내림차순
        Pageable pageable = PageRequest.of(9, 10, Sort.by("tno").descending());

        Page<Todo> result = todoRepository.findAll(pageable);
        log.info(result.getTotalElements());

        result.getContent()
                .stream().forEach( todo -> log.info(todo));
    }

    @Test
    public void testlist(){
        PageRequestDTO pageRequestDTO = PageRequestDTO.builder()
                .page(2)
                .size(10)
                .build();
        PageResponseDTO<TodoDTO> response = todoService.list(pageRequestDTO);
        log.info(response);
    }
}
