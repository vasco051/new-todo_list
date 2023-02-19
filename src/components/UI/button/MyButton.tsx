import React, {FC} from 'react';
import {MyButtonProps} from "./MyButtonProps";
import styles from './MyButton.module.css'
import clsx from "clsx";


const MyButton: FC<MyButtonProps> = ({children, variant, isIcon, className, ...props}) => {
  return (
    <button {...props} className={clsx(styles.btn, styles[variant], isIcon && styles.icon, className)}>
      {children}
    </button>
  );
};

export default MyButton;