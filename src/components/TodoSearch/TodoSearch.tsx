import React, {ChangeEvent, FC, useCallback, useState} from 'react';
import {TodoSearchProps} from "./TodoSearchProps";
import Search from "../UI/seacrh/Search";
import styles from './TodoSearch.module.css'
import searchStore from "../../store/searchAndSelectStore";
import {observer} from "mobx-react-lite";
import debounce from "lodash.debounce";

const TodoSearch: FC<TodoSearchProps> = observer(() => {
  const [value, setValue] = useState(searchStore.getSearchValue())

  const debounceSearch = useCallback(debounce((searchValue: string) => {
    searchStore.setSearchValue(searchValue)
  }, 500), [])

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    debounceSearch(e.target.value)
  }

  return (
    <section className={styles.todoSearch}>
      <Search value={value} onChange={changeHandler}/>
    </section>
  );
});

export default TodoSearch;