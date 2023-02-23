export interface ISearchAndSelect{
  _searchValue: string
  _selectValue: string

  get selectValue(): string
  get searchValue(): string

  setSelectValue(value: string): void
  setSearchValue(value: string): void
}
