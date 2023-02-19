import {makeAutoObservable} from "mobx";
import {ITodo} from "../types/ITodo";

class TodoStore {
  todos: ITodo[] = [
    {id: 1, title: 'Lorem ipsum dolor sit amet.', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed massa nulla, imperdiet ac venenatis varius, blandit at lorem. Nam nec ipsum faucibus, finibus leo pretium, egestas lectus. Morbi suscipit dui a purus vulputate efficitur. Mauris at justo ultricies purus pellentesque.', completed: false, dateOfCreate: {date: '21/12/2002', time: '21:12'}},
    {id: 2, title: 'Lorem ipsum dolor.', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed massa nulla, imperdiet ac venenatis varius, blandit at lorem.', completed: false, dateOfCreate: {date: '21/12/2002', time: '21:21'}},
    {id: 3, title: 'Lorem ipsum dolor sit.', body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed massa nulla, imperdiet ac venenatis varius, blandit at lorem. Mauris at justo ultricies purus pellentesque.', completed: false, dateOfCreate: {date: '21/12/2002', time: '22:32'}},
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