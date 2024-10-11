import React from "react";
import "./style.css";

const ButtonComponent = ({ text, onClick }) => {
  return (
    <button className="component-button" onClick={onClick}>
      {text}
    </button>
  );
};

export default ButtonComponent;
