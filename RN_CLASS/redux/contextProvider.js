import { createContext } from "react";

export const initialState = {
  count: 10010,
  data: [
    {
      color: "Red",
    },
    {
      color: "Blue",
    },
    {
      color: "Green",
    },
    {
      color: "Yello",
    },
    {
      color: "purple",
    },
    {
      color: "voilet",
    },
  ],
};
export const CounterContext = createContext(initialState);
