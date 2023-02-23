import {makeAutoObservable, observable, values} from "mobx";

import {ITodoStore} from "./ITodoStore";
import {ITodo} from "../../types/ITodo";

class TodoStore implements ITodoStore {
  _todos = observable.map<number, ITodo>()
  _isIdEdit: number | null = null


  constructor() {
    makeAutoObservable(this)
  }


  get todoList() {
    return values(this._todos)
  }

  get isIdEdit() {
    return this._isIdEdit
  }


  addTodo(todo: ITodo) {
    this._todos.set(todo.id, todo)
  }

  removeTodo(id: number) {
    this._todos.delete(id)
  }

  changeCompleted(todo: ITodo) {
    this._todos.set(todo.id, {...todo, completed: !todo.completed})
  }

  changeIdEdit(id: number | null) {
    this._isIdEdit = id
  }

  editTodo(todo: ITodo, title: string, body: string) {
    this._todos.set(todo.id, {...todo, title, body})
    this.changeIdEdit(null)
  }
}

export default new TodoStore()