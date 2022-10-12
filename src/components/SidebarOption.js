import React from "react";
import "./SidebarOption.css";

function SidebarOption({ text, Icon }) {
  return (
    <div className="sidebar-option">
      {Icon && <Icon className="sidebar-option-icon" />}
      {Icon ? <h4>{text}</h4> : <p>{text}</p>}
    </div>
  );
}

export default SidebarOption;
