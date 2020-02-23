import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// Initial state
const initialState = {
  tasks: [
    { id: 1, text: "Study" },
    { id: 2, text: "Clean my room" },
    { id: 1, text: "Read a book" }
  ]
};

// Create a  context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <GlobalContext.Provider
      value={{
        tasks: state.tasks
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
