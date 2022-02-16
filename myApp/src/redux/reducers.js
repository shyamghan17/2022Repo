import React, { useReducer } from "react";
import { SET_USER_AGE, SET_USER_NAME } from "./action";

const initialState = {
  name: "",
  age: 0
};
function useReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER_AGE:
      return { ...state, age: action.payload };
    case SET_USER_NAME:
      return { ...state, name: action.payload };
    default:
      return state;
  }
}

export default useReducer;
