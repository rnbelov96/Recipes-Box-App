import recipes from '../../data/recipes.js';
import { OPENDETAILS, RETURNLIST, CHANGEPRESENT } from '../actions/actionTypes.js';

const initialState = {
  recipes,
  currentRecipe: null,
  cardsPresent: true
}

export default function (state = initialState, action) {
  switch (action.type) {
    case OPENDETAILS:
      return {
        ...state,
        currentRecipe: action.payload
      }
    
    case RETURNLIST:
      return {
        ...state,
        currentRecipe: null
      }

    case CHANGEPRESENT:
      return {
        ...state,
        cardsPresent: !state.cardsPresent
      }
    default:
      return state
  }
}
