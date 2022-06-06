import * as ACTIONS from "./table-actions";

 const initialState = {
  selectedTable: 'Please Select Table',
  todos: []
};


const PosReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case "TOGGLE_TODO":
      return {};

    case " DELETE_TODO":
      return {};
    default:
      return state;
  }
};
export default PosReducer;
