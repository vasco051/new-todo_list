import React, {FC} from 'react';
import MyButton from "../UI/button/MyButton";
import {TodoItemProps} from "./TodoItemProps";
import todoState from "../../store/todoStore";
import {observer} from "mobx-react-lite";
import clsx from "clsx";
import styles from './TodoItem.module.css'
import todoStore from "../../store/todoStore";
import MyInput from "../UI/input/MyInput";
import MyTextarea from "../UI/textarea/MyTextarea";
import {useInput} from "../../hooks/useInput";

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
      <div className={clsx(styles.todoContent)}>
        <div>Added in: {todo.dateOfCreate.time}</div>
        {todoStore.isEditId === todo.id
          ?
          // При редактировании
          <>
            <div className={clsx(styles.todoTitle)}><MyInput {...editTitle}/></div>
            <div className={clsx(styles.todoBody)}><MyTextarea {...editBody}/></div>
          </>
          // В нормальном состоянии
          :
          <>
            <div className={clsx(styles.todoTitle)}><h3>{todo.title}</h3></div>
            <div className={clsx(styles.todoBody)}><p>{todo.body}</p></div>
          </>
        }

      </div>

      <div className={clsx(styles.todoButtons)}>
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