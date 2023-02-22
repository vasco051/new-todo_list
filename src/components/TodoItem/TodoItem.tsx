import {FC} from 'react';
import {TodoItemProps} from "./TodoItemProps";
import {observer} from "mobx-react-lite";

import todoState from "../../store/todoStore";
import todoStore from "../../store/todoStore";

import {useInput} from "../../hooks/useInput";
import MyInput from "../UI/input/MyInput";
import MyTextarea from "../UI/textarea/MyTextarea";
import MyButton from "../UI/button/MyButton";

import clsx from "clsx";
import styles from './TodoItem.module.css'


const TodoItem: FC<TodoItemProps> = observer(({todo}) => {
  const {setValue: setEditTitle, ...editTitle} = useInput(todo.title)
  const {setValue: setEditBody, ...editBody} = useInput(todo.body)

  const agreeEdit = () => {
    todoStore.editTodo(todo.id, editTitle.value, editBody.value)
  }

  const disagreeEdit = () => {
    todoStore.setIsEditId(null)
    setEditTitle(todo.title)
    setEditBody(todo.body)
  }

  return (
    <div className={clsx(styles.todo, todo.completed && styles.completed)}>
      <div className={styles.todoContent}>
        <div>Added in: {todo.dateOfCreate.time}</div>
        {todoStore.isEditId === todo.id
          ?
          // При редактировании
          <>
            <div className={styles.todoTitle}><MyInput {...editTitle}/></div>
            <div className={styles.todoBody}><MyTextarea {...editBody}/></div>
          </>
          // В нормальном состоянии
          :
          <>
            <div className={styles.todoTitle}><h3>{todo.title}</h3></div>
            <div className={styles.todoBody}><p>{todo.body}</p></div>
          </>
        }

      </div>

      <div className={styles.todoButtons}>
        {todoStore.isEditId === todo.id
          ?
          // Кнопки при редактировании
          <>
            <MyButton
              variant='primary' onClick={agreeEdit} isIcon
            ><span>да</span></MyButton>

            <MyButton
              variant='danger' onClick={disagreeEdit} isIcon
            ><span>нет</span></MyButton>
          </>

          :
          // Кнопки в обычном состоянии
          <>
            <MyButton
              variant='primary' onClick={() => todoState.completedTodo(todo.id)} isIcon
            ><span>{todo.completed ? <>&#9745;</> : <>&#9744;</>}</span></MyButton>

            <MyButton
              variant='secondary' onClick={() => todoState.setIsEditId(todo.id)} isIcon
            ><span>&#9998;</span></MyButton>

            <MyButton
              variant='danger' onClick={() => todoState.removeTodo(todo.id)} isIcon
            ><span>&#10006;</span></MyButton></>
        }
      </div>
    </div>
  );
});

export default TodoItem;