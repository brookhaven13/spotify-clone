import React, { createContext, useContext, useReducer } from "react";

const DataLayerContext = createContext();

export const DataLayer = ({ initialState, reducer, children }) => {
  return (
    <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </DataLayerContext.Provider>
  );
};

// export default DataLayerContext;
export const useDataLayerValue = () => useContext(DataLayerContext);
