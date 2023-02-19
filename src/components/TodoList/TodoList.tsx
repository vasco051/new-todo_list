import React, {FC} from 'react';
import {TodoListProps} from "./TodoListProps";
import TodoItem from "../TodoItem/TodoItem";
import styles from './TodoList.module.css'
import clsx from "clsx";

const TodoList: FC<TodoListProps> = ({todos}) => {
  return (
    <section className={clsx(styles.todoList)}>
      {todos.length
        ?
        todos.map(todo =>
          <TodoItem todo={todo} key={todo.id}/>
        )
        :
        <h2>Todo not find</h2>
      }
    </section>
  );
};

export default TodoList;