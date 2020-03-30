import React from 'react';
import Header from './components/Header';
import Cards from './components/Cards';
import CardDescr from './components/CardDescr';
import { connect } from "react-redux";
import List from './components/List';
import './style/main.sass'

function App({currentRecipe, cardsPresent}) {
  return (
    <>
      <Header/>
      {currentRecipe ? <CardDescr/> : cardsPresent ? <Cards/> : <List/>}
    </>
  )
}

function mapStateToProps(state) {
  return {
    currentRecipe: state.recipesReducer.currentRecipe,
    cardsPresent: state.recipesReducer.cardsPresent
  };
}

// function mapDispatchToProps(dispatch) {
//   return {
//     onChange: (id) => dispatch(changeTodoStatus(id)),
//     onDelete: (id) => dispatch(deleteTodo(id))
//   };
// }

export default connect(mapStateToProps, null)(App);
