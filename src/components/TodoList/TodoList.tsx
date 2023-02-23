import {FC} from 'react';

import {TodoListProps} from "./TodoListProps";

import TodoItem from "../TodoItem/TodoItem";

import styles from './TodoList.module.css'

const TodoList: FC<TodoListProps> = ({todos}) => {
  return (
    <section className={styles.todoList}>
      {todos.length
        ?
        todos.map(todo =>
          <TodoItem todo={todo} key={todo.id}/>
        )
        :
        <h2>Todos not found</h2>
      }
    </section>
  );
};

export default TodoList;