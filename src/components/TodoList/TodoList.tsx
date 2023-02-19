import React, {FC} from 'react';
import {TodoListProps} from "./TodoListProps";
import TodoItem from "../TodoItem/TodoItem";
import styles from './TodoList.module.css'
import clsx from "clsx";

const TodoList: FC<TodoListProps> = ({todos}) => {
  return (
    <section className={clsx(styles.todoList)}>
      {todos.map(todo =>
        <TodoItem todo={todo} key={todo.id}/>
      )}
    </section>
  );
};

export default TodoList;