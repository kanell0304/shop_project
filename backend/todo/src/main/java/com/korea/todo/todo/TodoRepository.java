package com.korea.todo.todo;

import org.springframework.data.jpa.repository.JpaRepository;

// JpaRepository < 앤티티, Primary Key 자료형>
public interface TodoRepository extends JpaRepository<Todo, Long> {
}
