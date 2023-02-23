import {FC, useEffect, useMemo, useState} from 'react';
import {observer} from "mobx-react-lite";

import {ITodo} from "../../types/ITodo";

import TodoForm from "../../components/TodoForm/TodoForm";
import TodoSearch from "../../components/TodoSearch/TodoSearch";
import TodoList from "../../components/TodoList/TodoList";

import todoStore from "../../store/todoStore/todoStore";
import searchAndSelectStore from "../../store/searchAndSelectStore/searchAndSelectStore";
import {getSearchTodos, getSortedTodos} from "../../utils/todoUtilts";

import styles from './TodoPage.module.css'
import clsx from "clsx";


const TodoPage: FC = observer(() => {
  const [todos, setTodos] = useState<ITodo[]>([])

  const sortedTodos = useMemo(() => {
    return getSortedTodos(todoStore.todoList, searchAndSelectStore.selectValue)
  }, [todoStore.todoList, searchAndSelectStore.selectValue])

  useEffect(() => {
    setTodos(getSearchTodos(sortedTodos, searchAndSelectStore.searchValue))
  }, [sortedTodos, searchAndSelectStore.searchValue])

  return (
    <main className={clsx(styles.todoPage, 'container')}>
      <TodoSearch/>
      <TodoForm/>
      <TodoList todos={todos}/>
    </main>
  );
});

export default TodoPage;