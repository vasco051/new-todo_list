import {FC} from 'react';

import {MySelectProps} from "./MySelectProps";

import styles from './MySelect.module.css'

const MySelect: FC<MySelectProps> = ({defaultValue, options, value, onChange}) => {
  return (
    <select value={value} onChange={onChange} className={styles.mySelect}>
      <option value="default" disabled className={styles.mySelectOption}>{defaultValue}</option>
      {options.map(option =>
        <option value={option.value} key={option.value} className={styles.mySelectOption}>{option.name}</option>
      )}
    </select>
  );
};

export default MySelect;