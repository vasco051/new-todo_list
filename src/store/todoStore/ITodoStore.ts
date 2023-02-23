import {ITodo} from "../../types/ITodo";
import {ObservableMap} from "mobx";

export interface ITodoStore {
  _todos: ObservableMap<number, ITodo>
  _isIdEdit: number | null

  get todoList(): readonly ITodo[]
  get isIdEdit(): number | null

  addTodo(todo: ITodo): void
  removeTodo(id: number): void
  changeCompleted(todo: ITodo): void
  changeIdEdit(id: number | null): void
  editTodo(todo: ITodo, title: string, body: string): void
}
