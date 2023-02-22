import {FC} from 'react';

import {MyInputProps} from "./MyInputProps";

import styles from './MyInput.module.css'
import clsx from "clsx";

const MyInput: FC<MyInputProps> = ({ className, ...props}) => {
  return (
    <input {...props} className={clsx(styles.myInput, className)}/>
  );
};

export default MyInput;