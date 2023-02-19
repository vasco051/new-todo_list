import React, {FC, useEffect, useMemo, useState} from 'react';
import TodoForm from "../../components/TodoForm/TodoForm";
import TodoList from "../../components/TodoList/TodoList";
import {ITodo} from "../../types/ITodo";
import todoStore from "../../store/todoStore";
import {observer} from "mobx-react-lite";
import TodoSearch from "../../components/TodoSearch/TodoSearch";
import {getSearchTodos, getSortedTodos} from "../../utils/todoUtilts";
import searchAndSelectStore from "../../store/searchAndSelectStore";
import styles from './TodoPage.module.css'
import clsx from "clsx";


const TodoPage: FC = observer(() => {
  const [todos, setTodos] = useState<ITodo[]>(todoStore.getTodos())

  const sortedTodos = useMemo(() => {
    return getSortedTodos(todoStore.getTodos(), searchAndSelectStore.selectValue)
  }, [todoStore.getTodos(), searchAndSelectStore.getSelectValue()])

  useEffect(() => {
    setTodos(getSearchTodos(sortedTodos, searchAndSelectStore.searchValue))
  }, [sortedTodos, searchAndSelectStore.getSearchValue()])


  return (
    <main className={clsx(styles.todoPage, 'container')}>
      <TodoSearch/>
      <TodoForm/>
      <TodoList todos={todos}/>
    </main>
  );
});

export default TodoPage;