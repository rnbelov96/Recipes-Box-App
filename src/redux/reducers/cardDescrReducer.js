import { RETURNLIST, CHANGETAB } from "../actions/actionTypes";

const initialState = {
  currentTab: 'ingredients' 
}

export default function (state = initialState, action) {
  switch (action.type) {
    case RETURNLIST:
      return {
        ...state,
        currentTab: 'ingredients'
      }

    case CHANGETAB:
      return {
        ...state,
        currentTab: action.payload
      }
    default:
      return state
  }
}