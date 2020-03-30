import React from 'react';
import { connect } from "react-redux";
import { changePresent } from '../redux/actions/actions';

const Header = (props) => {
  return (
    <header className="d-flex justify-content-between align-items-center p-5 bg-success header">
      <div className="header__text">Recipes box <i className="fas fa-utensils"></i></div>
      <div className="header__button" onClick={props.onChange}>
        {props.cardsPresent ? <i className="fas fa-th"></i> : <i className="fas fa-align-justify"></i>}
      </div>
    </header>
  )
}

function mapStateToProps(state) {
  return {
    cardsPresent: state.recipesReducer.cardsPresent
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onChange: () => dispatch(changePresent())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);