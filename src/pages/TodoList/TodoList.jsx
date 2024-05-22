import { useState } from "react";

const TodoList = () => {
	const [todos, setTodos] = useState([]);

	const handleSubmit = (e) => {
		e.preventDefault();
		const newTodo = e.target.todos.value;

		// setTodos([...todos, newTodo]);
		setTodos((prev) => [...prev, newTodo]);
		e.target.todos.value = "";
	};
	return (
		<>
			<form onSubmit={handleSubmit}>
				<div className="flex gap-2 w-4/5 mx-auto">
					<input type="text" id="todos" name="todos" rows="1" placeholder="Write your todo" className="bg-gray-100  rounded w-full" />
					<button className="btn bg-blue-400 p-3 rounded-md">+</button>
				</div>
			</form>
			{todos.length > 0 && todos?.map((todo, index) => <p key={index}>{todo}</p>)}
		</>
	);
};

export default TodoList;
