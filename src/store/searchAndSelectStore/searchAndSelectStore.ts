import {makeAutoObservable} from "mobx";

import {SELECT_OPTIONS} from "../../consts/constsTodoPage";
import {ISearchAndSelect} from "./ISearchAndSelect";

class SearchAndSelectStore implements ISearchAndSelect {
  _searchValue: string = ''
  _selectValue: string = SELECT_OPTIONS[0].value


  constructor() {
    makeAutoObservable(this)
  }


  get selectValue() {
    return this._selectValue
  }

  get searchValue() {
    return this._searchValue
  }


  setSelectValue(value: string) {
    this._selectValue = value
  }

  setSearchValue(value: string) {
    this._searchValue = value
  }
}

export default new SearchAndSelectStore()