
import React, { useReducer, createContext } from "react";

export const DataContext = createContext();

const initialState = {
  data: [],
  filterData:[],
  modalViewData:[],
  loading: false,
  error: null
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_DATA":
      return {
       ...state,filterData:[...action.payload],data:[...action.payload]
      };
      case "FILTER":
        return {
         ...state,filterData:[...action.payload]
        };
        case "SELECTED_IMG":
          return {
           ...state,modalViewData:[...action.payload]
          };
    case "START":
      return {
          ...state,
        loading: true
      };
    case "COMPLETE":
      return {
        ...state,
        loading: false
      };
    default:
      throw new Error();
  }
};

export const DataContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DataContext.Provider value={[state, dispatch]}>
      {props.children}
    </DataContext.Provider>
  );
};