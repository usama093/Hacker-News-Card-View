import React from "react";

const SpinnerPage = () => {
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

export default SpinnerPage;
