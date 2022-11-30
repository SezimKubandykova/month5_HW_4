import {types} from "./types";

const changeTitleAction = () => {
  return {
    type: types.CHANGE_TITLE
  }
}

export const changeTitleSetTimeAction = () => {
  return function (dispatch) {
    setTimeout (() => {dispatch(changeTitleAction())}, 3000)
  }
}