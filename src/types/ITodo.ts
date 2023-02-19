export interface ITodo{
  id: number
  title: string
  body: string
  completed: boolean
  dateOfCreate: {
    time: string
    date: string
  }
}