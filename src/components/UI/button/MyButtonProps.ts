import React, {ButtonHTMLAttributes} from "react";

export interface MyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  children: React.ReactNode
  variant: 'primary' | 'secondary' | 'danger' | 'completed'
  isIcon?: boolean
}
