import React, {ButtonHTMLAttributes} from "react";

export interface MyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  children: React.ReactElement | string
  variant: 'primary' | 'secondary' | 'danger' | 'completed'
  isIcon?: boolean
}
