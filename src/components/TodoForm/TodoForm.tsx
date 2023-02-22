import {FC, useState} from 'react';
import {observer} from "mobx-react-lite";

import FormAddTodo from "../FormAddTodo/FormAddTodo";
import MySelect from "../UI/select/MySelect";

import {SELECT_OPTIONS} from "../../consts/constsTodoPage";

import selectStore from "../../store/searchAndSelectStore";
import selectState from "../../store/searchAndSelectStore";

import styles from './TodoForm.module.css'



const TodoForm: FC = observer(() => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <section className={styles.todoForm}>
      <button onClick={() => setIsOpen(prev => !prev)}>{isOpen? 'close' : 'Add todo'}</button>
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