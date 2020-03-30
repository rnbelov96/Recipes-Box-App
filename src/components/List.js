import React from "react";
import { connect } from "react-redux";
import { openDetails } from "../redux/actions/actions";

const List = props => {
  return (
    <div className="container">
      <div className="list">
        {props.recipes.map((el, index) => {
          return (
            <h1 className="list__item" onClick={() => props.onClick(el)} key={index}>
              {el.name}
            </h1>
          );
        })}
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    recipes: state.recipesReducer.recipes
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onClick: recipe => dispatch(openDetails(recipe))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
