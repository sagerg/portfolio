import React from "react";
import "../../assets/link.css"

const Link = ({ children, url = "#", onClick = undefined, color = "violet" }) => {
  return (
    <span>
      <a className="link"
        href={url}
        onClick={onClick}
        style={{ color : color }}
      >
        {children}
      </a>
    </span>
  );
};

export default Link;