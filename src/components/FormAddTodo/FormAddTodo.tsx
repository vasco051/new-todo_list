import React, {FC} from 'react';
import MyInput from "../UI/input/MyInput";
import MyTextarea from "../UI/textarea/MyTextarea";
import clsx from "clsx";
import MyButton from "../UI/button/MyButton";
import {useFormik} from "formik";
import todoState from "../../store/todoStore";
import {FormAddTodoProps, FormValues} from "./FormAddTodoProps";
import styles from './FormAddTodo.module.css'
import {createNewTodo} from "../../utils/todoUtilts";

const FormAddTodo: FC<FormAddTodoProps> = ({setIsOpen}) => {
  const formik = useFormik({
    initialValues: {
      title: '',
      body: ''
    },
    onSubmit: (values, {resetForm}) => {
      todoState.addTodo(createNewTodo(values.title, values.body))
      resetForm()
      setIsOpen(false)
    },
    validate: values => {
      const errors: FormValues = {}
      if (!values.title) {
        errors.title = 'Not title'
      }
      return errors
    }
  })

  return (
    <form onSubmit={formik.handleSubmit} className={styles.form}>
      <div className={styles.formItem}>
        <label className={styles.formLabel} htmlFor="title">Title</label>
        <MyInput
          type="text"
          name='title'
          id='title'
          value={formik.values.title}
          onChange={formik.handleChange}
          className={styles.formInput}
        />
        {formik.errors.title && formik.touched.title &&
          <div className={styles.formError}>{formik.errors.title}</div>
        }
      </div>

      <div className={styles.formItem}>
        <label className={styles.formLabel} htmlFor="body">Body</label>
        <MyTextarea
          name='body'
          id='body'
          value={formik.values.body}
          onChange={formik.handleChange}
          className={clsx(styles.formInput, styles.formTextarea)}
        />
      </div>

      <MyButton className={styles.formButton} type='submit' variant='primary'>Add todo</MyButton>
    </form>
  );
};

export default FormAddTodo;