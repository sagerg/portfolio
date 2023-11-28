import React from "react";
import "../../assets/link.css"

const Link = ({ children, url = "#", onClick = undefined, color = "violet", opensOnNewTab = true }) => {
  return (
    <span data-testid="link-test">
      <a className="link"
        href={url}
        onClick={onClick}
        style={{ color : color }}
        target={opensOnNewTab ? "_blank" : null}
      >
        {children}
      </a>
    </span>
  );
};

export default Link;