// this is the data layer
// we need this to track the basket

import React, { useContext, createContext, useReducer } from "react";

// this is the data layer
export const StateContext = createContext();

// Build a provider

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// this is how we use it inside the component

export const useStateValue = () => useContext(StateContext);
