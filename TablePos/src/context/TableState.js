import React, { useReducer } from "react";
import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from "./table-actions";

import DataContex from "./table-context";
import PosReducer from "./table-reducer";

const TableState = (props) => {
  const initialState = {
    todos: [],
  };
  const [state, dispatch] = useReducer(PosReducer, initialState);

  //add todos
  const addTodo = (todo) => {
    dispatch({
      type: ADD_TODO,
      payload: todo,
    });
  };

  //toggle todos
  const toggleTodo = (todoID) => {
    dispatch({
      type: TOGGLE_TODO,
      payload: todoID,
    });
  };

  //remove todos
  const deleteTodd = (todoID) => {
    dispatch({
      type: DELETE_TODO,
      payload: todoID,
    });
  };

  return (
    <DataContex.Provider
      value={{ todos: state.todos, addTodo, toggleTodo, deleteTodd }}
    >
      {props.children}
    </DataContex.Provider>
  );
};

export default TableState;
