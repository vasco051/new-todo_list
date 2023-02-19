import React, {FC, useState} from 'react';
import styles from './TodoForm.module.css'
import FormAddTodo from "../FormAddTodo/FormAddTodo";
import MySelect from "../UI/select/MySelect";
import {SELECT_OPTIONS} from "../../consts/constsTodoPage";
import selectStore from "../../store/searchAndSelectStore";
import selectState from "../../store/searchAndSelectStore";
import {observer} from "mobx-react-lite";


const TodoForm: FC = observer(() => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <section className={styles.todoForm}>
      <button onClick={() => setIsOpen(prev => !prev)}>{isOpen? 'close' : 'open'}</button>

      {isOpen
        ? <FormAddTodo setIsOpen={setIsOpen}/>
        : <MySelect
          defaultValue='Sort on'
          options={SELECT_OPTIONS}
          value={selectStore.getSelectValue()}
          onChange={(e) => selectState.setSelectValue(e.target.value)}
        />
      }
    </section>
  )
});

export default TodoForm;