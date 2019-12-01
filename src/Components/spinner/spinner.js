import React from "react";
import "./spinner.css";
export const Spinner = () => {
  return (
    <>
      <div className="spinner">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </>
  );
};
