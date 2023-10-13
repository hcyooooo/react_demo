const initialState = {
  name: "hcyoo",
};

const nameReducer = (state = initialState, action) => {
  switch (action.type) {
    case "changeName":
      return { ...state, name: "djq" };
    default:
      return state;
  }
};

export default nameReducer;
