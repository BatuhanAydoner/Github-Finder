import React, { Component, useContext } from "react";
import AlertContext from '../context/alert/alertContext';

const Alert = (props) => {
  const {alert} = useContext(AlertContext);
  return (
    <div>
      {alert != null && (
        <div className="container my-2">
          <div
            className={`alert alert-${alert.type} alert-dismissible fade show`}
          >
            {alert.msg}
            <button
              type="button"
              className="close"
              data-dismiss="alert"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default Alert;
