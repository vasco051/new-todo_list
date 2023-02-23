import {FC, useState} from 'react';
import {observer} from "mobx-react-lite";

import FormAddTodo from "../FormAddTodo/FormAddTodo";

import {SELECT_OPTIONS} from "../../consts/constsTodoPage";
import selectStore from "../../store/searchAndSelectStore/searchAndSelectStore";


import styles from './TodoForm.module.css'
import MySelect from "../UI/select/MySelect";


const TodoForm: FC = observer(() => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  console.log(selectStore.selectValue)

  return (
    <section className={styles.todoForm}>
      <button onClick={() => setIsOpen(prev => !prev)}>{isOpen ? 'close' : 'Add todo'}</button>
      {isOpen
        ? <FormAddTodo setIsOpen={setIsOpen}/>
        : <MySelect
          options={SELECT_OPTIONS}
          callback={(value: string) => selectStore.setSelectValue(value)}
        />
      }
    </section>
  )
});

export default TodoForm;