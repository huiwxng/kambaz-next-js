"use client";
import React from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
import { ListGroup } from "react-bootstrap";

interface Todo {
  id: string | number;
  title: string;
  text?: string;
  completed?: boolean;
}

interface TodosState {
  todos: Todo[];
}

export default function TodoList() {
  const todos = useSelector((state: { todosReducer: TodosState }) => state.todosReducer.todos);
  return (
    <div id="wd-todo-list-redux">
      <h2>Todo List</h2>
      <ListGroup>
        <TodoForm />
        {todos.map((todo: Todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ListGroup>
      <hr/>
    </div>
  );
}
