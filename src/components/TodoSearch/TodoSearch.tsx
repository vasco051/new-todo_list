import {ChangeEvent, FC, useCallback, useState} from 'react';
import {observer} from "mobx-react-lite";

import {TodoSearchProps} from "./TodoSearchProps";

import Search from "../UI/seacrh/Search";

import searchStore from "../../store/searchAndSelectStore/searchAndSelectStore";
import debounce from "lodash.debounce";

import styles from './TodoSearch.module.css'


const TodoSearch: FC<TodoSearchProps> = observer(() => {
  const [value, setValue] = useState(searchStore.searchValue)

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