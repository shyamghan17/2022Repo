import React, { useReducer } from "react";
import { SELECT_TABLE, ADD_ITEMS } from "./constant";

import DataContex from "./table-context";
import PosReducer from "./table-reducer";

const TableState = (props) => {
  const initialState = {
    items: [], // id, item, tableNum,
  };
  const [state, dispatch] = useReducer(PosReducer.initialState);

  //select table
  const selectTable = () => {
    dispatch({
      type: SELECT_TABLE,
      payload: "table",
    });
  };
  const addItems = (items) => {
    dispatch({
      type: ADD_ITEMS,
      payload: items,
    });
  };
  console.log(state.items, "state . items");

  return (
    <DataContex.Provider value={{ selectTable, addItems }}>
      {props.children}
    </DataContex.Provider>
  );
};

export default TableState;
