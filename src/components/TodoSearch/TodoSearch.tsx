import React, {FC} from 'react';
import {TodoSearchProps} from "./TodoSearchProps";
import Search from "../UI/seacrh/Search";
import styles from './TodoSearch.module.css'
import searchStore from "../../store/searchAndSelectStore";
import {observer} from "mobx-react-lite";

const TodoSearch: FC<TodoSearchProps> = observer(() => {
  return (
    <section className={styles.todoSearch}>
      <Search value={searchStore.getSearchValue()} onChange={(e) => searchStore.setSearchValue(e.target.value)}/>
    </section>
  );
});

export default TodoSearch;