import React from "react";
import NewTodoForm from "./NewTodoForm";
import TodoListItem from './TodoListItem';
import './TodoList.css';

const TodoList = ({ todos = [{text: "Hello" }] }) => (
    <div className="list-wrapper">
        <NewTodoForm />
        {todos.map((todo, i) => <TodoListItem key={i} todo={todo} />)}
    </div>
);

export default TodoList;