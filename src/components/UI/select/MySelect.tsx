import {FC} from 'react';

import Select from "react-select";

import {MySelectProps} from "./MySelectProps";

const MySelect: FC<MySelectProps> = ({options, callback}) => {
  const onChange = (newValue: any) => {
    callback(newValue.value)
  }

  return (
    <Select options={options} onChange={onChange} defaultValue={options[0]}/>
  );
};

export default MySelect;