import {makeAutoObservable} from "mobx";

import {SELECT_OPTIONS} from "../consts/constsTodoPage";

class SearchAndSelectStore {
  searchValue: string = ''
  selectValue: string = SELECT_OPTIONS[0].value

  constructor() {
    makeAutoObservable(this)
  }

  getSelectValue() {
    return this.selectValue
  }

  setSelectValue(value: string) {
    this.selectValue = value
  }


  getSearchValue() {
    return this.searchValue
  }

  setSearchValue(value: string) {
    this.searchValue = value
  }
}

export default new SearchAndSelectStore()