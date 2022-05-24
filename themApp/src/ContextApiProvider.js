import { createContext } from "react";

export const initialState = {
  count: 0,
};
export const CounterContext = createContext(initialState);

// Actions
export const IncreaseCount = () => {
  return {
    type: "INCREMENT_COUNT",
  };
};
export const DecreaseCount = () => {
  return {
    type: "DECREMENT_COUNT",
  };
};

//Reducer

export const counter = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT_COUNT":
      return {
        ...state,
        count: state.count + 1,
      };
    case "DECREMENT_COUNT":
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
      break;
  }
};
