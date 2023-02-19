import {ChangeEvent, useState} from "react";

export function useInput(initialValue: string){
  const [value, setValue] = useState<string>(initialValue)

  const onChange = (e: ChangeEvent<HTMLInputElement & HTMLTextAreaElement>) => {
    setValue(e.target.value)
  }

  return {onChange, value, setValue}
}
