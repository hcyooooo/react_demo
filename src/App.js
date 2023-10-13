import React from "react";
import "./styles.css";
import { connect } from "react-redux";
import reduxUI from "redux-ui";
import { compose } from "redux";
import Son from "./Son";

function App(props) {
  const { ui } = props;
  const uiKey = "myApp";

  const methodDoesNotExist = () => {
    throw new Error("This method does not exist");
  };

  console.log(undefined.action);
  return (
    <div className="App">
      <h3>{ui.name}</h3>
      {/* <button onClick={changeName}>changeName</button> */}
      <button onClick={() => methodDoesNotExist()}>Break the world</button>
      <Son uiKey={uiKey} />
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  return { name: state.name.name, ui: state.ui };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeName: () => dispatch({ type: "changeName" }),
  };
};

const connector = compose(
  // connect(mapStateToProps, mapDispatchToProps),
  reduxUI({
    key: "myApp",
    state: {
      name: "Joe",
    },
    reducer: (state, action) => {
      console.log(action);
      return state;
    },
  })
);

export default connector(App);
