import {ChangeEvent} from "react";

export interface SearchProps{
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement >) => void
}
