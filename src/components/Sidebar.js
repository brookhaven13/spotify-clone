import React from "react";
import "./Sidebar.css";

const image = require("./../assets/img/spotify-logo-white.png");

function Sidebar() {
  return (
    <div className="sidebar">
      <img className="sidebar-logo" src={image} alt="logo" />
    </div>
  );
}

export default Sidebar;
