import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./TodosReducer";
import { ListGroupItem, Button } from "react-bootstrap";

interface Todo {
	id: string | number;
	title: string;
	// add other fields if needed
}

interface Props {
	todo: Todo;
}

export default function TodoItem({ todo }: Readonly<Props>) {
	const dispatch = useDispatch();
	return (
		<ListGroupItem key={todo.id}>
			<Button
				onClick={() => dispatch(deleteTodo(todo.id))}
				id="wd-delete-todo-click"
			>
				Delete
			</Button>
			<Button
				onClick={() => dispatch(setTodo(todo))}
				id="wd-set-todo-click"
			>
				Edit
			</Button>
			{todo.title}
		</ListGroupItem>
	);
}
