import React from "react";
const Button = ({ handleMemeChange, InputClicked }) => {
  return (
    <div className="buttonDiv">
      <button onClick={handleMemeChange} className="generate">
        Change Meme
      </button>
      <button className="inputBox" onClick={InputClicked}>
        Type Text
      </button>
    </div>
  );
};

export default Button;
