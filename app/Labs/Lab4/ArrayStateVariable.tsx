import { useState } from "react";
import { useSelector } from "react-redux";
import { ListGroup, ListGroupItem } from "react-bootstrap";

type Item = { id: string; value: number };
type Todo = { id: string; title: string };
type RootState = { todosReducer: { todos: Todo[] } };

export default function ArrayStateVariable() {
	const { todos } = useSelector<RootState, { todos: Todo[] }>(
		(state) => state.todosReducer
	);

	const [array, setArray] = useState<Item[]>([
		{ id: "1", value: 1 },
		{ id: "2", value: 2 },
		{ id: "3", value: 3 },
		{ id: "4", value: 4 },
		{ id: "5", value: 5 },
	]);

	const addElement = () => {
		const newItem: Item = {
			id: String(Date.now()) + "-" + Math.random().toString(36).slice(2),
			value: Math.floor(Math.random() * 100),
		};
		setArray((prev) => [...prev, newItem]);
	};

	const deleteElement = (id: string) => {
		setArray((prev) => prev.filter((item) => item.id !== id));
	};

	return (
		<div id="wd-array-state-variables">
			<h2>Array State Variable</h2>
			<button onClick={addElement}>Add Element</button>
			<ul>
				{array.map((item) => (
					<li key={item.id}>
						{item.value}
						<button onClick={() => deleteElement(item.id)}>
							Delete
						</button>
					</li>
				))}
			</ul>
			<hr />
			<ListGroup>
				{todos.map((todo: Todo) => (
					<ListGroupItem key={todo.id}>{todo.title}</ListGroupItem>
				))}
			</ListGroup>
			<hr />
		</div>
	);
}
