import { createContext, useReducer } from "react";

const initialState = {
  ip: "",
  searchedPosition: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ip":
      return { ...state, ip: action.payload };
    case "position":
      return { ...state, searchedPosition: action.payload };
    default:
      return null;
  }
};

const Context = createContext();

const ContextProvider = ({ children }) => {
  const [{ ip, searchedPosition }, dispatch] = useReducer(
    reducer,
    initialState
  );
  return (
    <Context.Provider value={{ ip, searchedPosition, dispatch }}>
      {children}
    </Context.Provider>
  );
};

export { ContextProvider, Context };
