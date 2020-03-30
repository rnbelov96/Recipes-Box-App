import React from "react";
import { connect } from "react-redux";
import { returnList, changeTab } from "../redux/actions/actions";

const CardDescr = ({ currentRecipe, onBack, currentTab, onChange }) => {
  const ingredientsList = (
    <ul>
      {currentRecipe.ingredients.map((el, index) => (
        <li key={index}>{el.name}</li>
      ))}
    </ul>
  );

  const steps = (
    <ol>
      {currentRecipe.steps.map((el, index) => (
        <li key={index}>{el}</li>
      ))}
    </ol>
  );

  return (
    <div className="container d-flex justify-content-around align-items-start cardDescr">
      <img src={currentRecipe.imageURL} alt="..." className="cardDescr__img" />
      <div className="cardDescr__mainBlock">
        <h3 className="cardDescr__title">{currentRecipe.name}</h3>
        <div className="d-flex justify-content-between cardDescr__tabs">
          <div onClick={() => onChange("ingredients")}>Ingredients</div>
          <div onClick={() => onChange("steps")}>Steps</div>
          <a href={`${currentRecipe.originalURL}`}>
            Source
          </a>
        </div>
        <div className="cardDescr__info">
          {currentTab === "ingredients" ? ingredientsList : steps}
        </div>
        <div className="cardDescr__close" onClick={onBack}>
          X
        </div>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    currentRecipe: state.recipesReducer.currentRecipe,
    currentTab: state.cardDescrReducer.currentTab
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onBack: () => dispatch(returnList()),
    onChange: chosenTab => dispatch(changeTab(chosenTab))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CardDescr);
