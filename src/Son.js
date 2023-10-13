import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import reduxUI from "redux-ui";

const Son = (props) => {
  const { ui, uiKey, updateUI } = props;

  return <button onClick={() => updateUI({ name: "han" })}>click</button>;
};

const mapStateToProps = (state) => {
  return { ui: state.ui };
};

const connector = compose(connect(mapStateToProps, null), reduxUI());

export default connector(Son);
