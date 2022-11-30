import {types} from "../types";

const initialState = {
  title: "старый текст"
}

export const titleReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CHANGE_TITLE:
      return {...state, title: "новый текст"}
    default: return state
  }
}