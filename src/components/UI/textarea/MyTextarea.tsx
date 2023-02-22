import {FC} from 'react';

import {MyTextareaProps} from "./MyTextareaProps";

import styles from './MyTextarea.module.css'
import clsx from "clsx";

const MyTextarea: FC<MyTextareaProps> = ({className, ...props}) => {
  return (
    <textarea {...props} className={clsx(styles.textarea, className)}></textarea>
  );
};

export default MyTextarea;