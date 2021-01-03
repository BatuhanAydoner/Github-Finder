import React, { useReducer } from "react";
import AlertReducer from "./alertReducer";
import AlertContext from './alertContext';

const AlertState = (props) => {
  const initialState = null;

  const [alert, dispatch] = useReducer(AlertReducer, initialState);

  const setupAlert = (msg, type) => {
    dispatch({ type: "SET_ALERT", payload: { msg, type } });
    setTimeout(() => {
      dispatch({ type: "REMOVE_ALERT" });
    }, 3000);
  };

  return (
      <AlertContext.Provider value={{alert: alert, setupAlert}}>
          {props.children}
      </AlertContext.Provider>
  )
};


export default AlertState