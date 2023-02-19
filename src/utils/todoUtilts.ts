import {ITodo} from "../types/ITodo";


export function createNewTodo(title: string, body: string) {
  const fullDate = new Date()
  const [date, time] = fullDate.toLocaleString().split(', ')
  const newTodo: ITodo = {
    id: Date.now(),
    title,
    body,
    completed: false,
    dateOfCreate: {
      date,
      time,
    }
  }
  return newTodo
}

export function getSortedTodos(todos: ITodo[], selector: string) {
  switch (selector) {
    case 'title':
      return [...todos].sort((a, b) => a.title.localeCompare(b.title))
    case 'body':
      return [...todos].sort((a, b) => a.body.localeCompare(b.body))
    case 'ready':
      return todos.filter(todo => todo.completed)
    case 'unready':
      return todos.filter(todo => !todo.completed)
    default:
      return [...todos]
  }
}

export function getSearchTodos(todos: ITodo[], searchValue: string) {
  return searchValue
    ? todos.filter(todo => todo.title.toLowerCase().includes(searchValue.toLowerCase()))
    : todos
}

