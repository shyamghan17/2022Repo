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
    dispatch();
  };

  //toggle todos
  const toggleTodo = (todoID) => {
    dispatch();
  };

  //remove todos
  const deleteTodd = (todoID) => {
    dispatch();
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
