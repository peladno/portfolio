import React from "react";

function Button({ children }) {
  return (
    <>
      <button className="mainButton">
        {children}
      </button>
    </>
  );
}

export default Button;