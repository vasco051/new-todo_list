export interface IOption{
  value: string
  label: string
}

export interface MySelectProps {
  options: IOption[]
  callback: (value: string) => void
}