package com.korea.todo.todo;

import com.korea.todo.page.PageRequestDTO;
import com.korea.todo.page.PageResponseDTO;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Sort;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@Transactional // 클래스나 메서드에 트랜잭션 적용
@Log4j2
@RequiredArgsConstructor
public class TodoServiceImpl implements TodoService{

    // 창고에 이미 생성된 객체 자동주입
    private final ModelMapper modelMapper;
    private final TodoRepository todoRepository;

    // 등록기능
    @Override
    public Long register(TodoDTO todoDTO){
        log.info("-----@@-----");
        // DTO 객채를 엔티티로(Todo.class) 변환하고, todo에 저장
        // todo를 db에 저장 - 객체가 savedTodo에 저장
        Todo todo = modelMapper.map(todoDTO, Todo.class);
        Todo sevedTodo = todoRepository.save(todo);
        return null;
    }

    //조회
    @Override
    public TodoDTO get(Long tno){
        Optional<Todo> result =  todoRepository.findById(tno);
        Todo todo = result.orElseThrow();
        TodoDTO dto = modelMapper.map(todo, TodoDTO.class);
        return dto;
    }

    // 수정
    @Override
    public void modify(TodoDTO todoDTO){
        Optional<Todo> result =  todoRepository.findById(todoDTO.getTno());
        Todo todo = result.orElseThrow();
        todo.changeTitle(todoDTO.getTitle());
        todo.changeComplete(todoDTO.isComplete());
        todo.changeDueDate(todoDTO.getDueDate());

        todoRepository.save(todo);
    }

    // 삭제
    public void remove(Long tno){
        todoRepository.deleteById(tno);
    }



    @Override
    public PageResponseDTO<TodoDTO> list(PageRequestDTO pageRequestDTO) {

        // 페이지 정보 설정( 몇 페이지, 갯수, 정렬기준)
        Pageable pageable = PageRequest.of(
                        pageRequestDTO.getPage() - 1 ,  // 1페이지가 0이므로 주의
                        pageRequestDTO.getSize(),
                        Sort.by("tno").descending());

        // 게시물 조회 -> 엔티티 상태
        Page<Todo> result = todoRepository.findAll(pageable); // Page<클래스>
        // get(), orElse(), OrElseThorw(), getContent()....
        
        // 조회한 게시물을 엔티티 -> 스트림 변환 -> 엔티티 -> DTO-> 리스트 형식
        List<TodoDTO> dtoList = result.getContent().stream() // 스트임변환
                .map(todo -> modelMapper.map(todo, TodoDTO.class)) // 엔티티->dto변환
                .collect(Collectors.toList()); // 리스트로 변환

        long totalCount = result.getTotalElements(); // 전체 갯수

        // public PageResponseDTO(List<E> dtolist, PageRequestDTO pageRequestDTO, int totalCount)
        PageResponseDTO<TodoDTO> responseDTO = PageResponseDTO.<TodoDTO>withAll()
                .dtoList(dtoList)
                .pageRequestDTO(pageRequestDTO)
                .totalCount((int)totalCount)
                .build();

        return responseDTO;
    }


}
