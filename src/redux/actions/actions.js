import { OPENDETAILS, RETURNLIST, CHANGEPRESENT, CHANGETAB } from "./actionTypes";

export const openDetails = (recipe) => {
  return {
    type: OPENDETAILS,
    payload: recipe
  }
};

export const returnList = () => {
  return {
    type: RETURNLIST
  }
};

export const changePresent = () => {
  return {
    type: CHANGEPRESENT
  }
}

export const changeTab = (chosenTab) => {
  return {
    type: CHANGETAB,
    payload: chosenTab 
  }
}
