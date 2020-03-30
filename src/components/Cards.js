import React from "react";
import { connect } from "react-redux";
import { openDetails } from "../redux/actions/actions";

const Cards = props => {
  return (
    <div className="container d-flex flex-wrap justify-content-around cards">
      {props.recipes.map((el, index) => {
        return (
          <div key={index} className="card">
            <img src={el.imageURL} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{el.name}</h5>
              <button
                onClick={() => props.onClick(el)}
                className="btn btn-primary"
              >
                More
              </button>
            </div>
          </div>
        );
      })}
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

export default connect(mapStateToProps, mapDispatchToProps)(Cards);
