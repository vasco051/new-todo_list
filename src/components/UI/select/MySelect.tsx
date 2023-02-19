import React, {FC} from 'react';
import {MySelectProps} from "./MySelectProps";
import {observer} from "mobx-react-lite";

const MySelect: FC<MySelectProps> = ({defaultValue, options, value, onChange}) => {
  return (
    <select value={value} onChange={onChange}>
      <option value="default" disabled>{defaultValue}</option>
      {options.map(option =>
        <option value={option.value} key={option.value}>{option.name}</option>
      )}
    </select>
  );
};

export default MySelect;