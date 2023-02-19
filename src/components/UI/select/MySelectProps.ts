import {ChangeEvent} from "react";

interface IOption{
  name: string
  value: string
}

export interface MySelectProps{
  defaultValue: string
  options: IOption[]
  value: string
  onChange: (e : ChangeEvent<HTMLSelectElement>) => void
}
