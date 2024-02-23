import { createContext, useContext, useReducer } from "react";

// Prepare data layer

export const StateContext = createContext();

// wrap the app and provider with data layer

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);


export const useStateValue = () => useContext(StateContext);