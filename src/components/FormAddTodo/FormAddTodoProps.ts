export interface FormValues{
  title?: string
  body?: string
}

export interface FormAddTodoProps {
  setIsOpen: (isOpen: boolean) => void
}