import {FC} from 'react';

import {SearchProps} from "./SearchProps";

import MyInput from "../input/MyInput";

import styles from './Search.module.css'
import { ReactComponent as SearchIcon } from "./SearchIcon.svg";

const Search: FC<SearchProps> = ({value, onChange}) => {
  return (
    <div className={styles.search}>
      <label htmlFor="search" className={styles.searchLabel}>
        <SearchIcon/>
      </label>
      <MyInput value={value} onChange={onChange} id='search' className={styles.searchInput} placeholder='Search...'/>
    </div>
  );
};

export default Search;