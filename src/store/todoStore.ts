import {makeAutoObservable} from "mobx";
import {ITodo} from "../types/ITodo";

class TodoStore {
  todos: ITodo[] = [
    {id: 1, body: 'fsfjsadflksdaklf jsaldkf lksadj fls', title: 'title', completed: false, dateOfCreate: {date: '12,321,421', time: '21 32'}},
    {id: 2, body: 'fsfjsadflksdaklf jsaldkf lksadj fls', title: 'title', completed: false, dateOfCreate: {date: '12,321,421', time: '21 32'}},
    {id: 3, body: 'fsfjsadflksdaklf jsaldkf lksadj fls', title: 'title', completed: false, dateOfCreate: {date: '12,321,421', time: '21 32'}},
  ]
  isEditId: null | number = null

  constructor() {
    makeAutoObservable(this)
  }


  getTodos(){
    return this.todos
  }

  addTodo(todo: ITodo){
    this.todos = [todo, ...this.todos]
  }

  removeTodo(id: number){
    this.todos = this.todos.filter(todo => todo.id !== id)
  }

  completedTodo(id: number){
    this.todos.forEach(todo => todo.id === id? todo.completed = !todo.completed: false)
  }

  editTodo(id: number, title: string, body: string){
    this.todos.forEach(todo => {
      if(todo.id === id){
        todo.title = title
        todo.body = body
      }
    })
    this.isEditId = null
  }

  setIsEditId(id: number | null){
    this.isEditId = id
  }

}

export default new TodoStore()