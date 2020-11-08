import React from "react";
import "../style/button.css";

function Button({ onClick, title, bold }) {
  return (
    <button
      className="button"
      style={{ fontWeight: bold ? "800" : "" }}
      onClick={onClick}
    >
      {title}
    </button>
  );
}

export default Button;
