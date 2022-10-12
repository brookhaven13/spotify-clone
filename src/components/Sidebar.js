import React from "react";
import "./Sidebar.css";
import { useDataLayerValue } from "../DataLayer";
import SidebarOption from "./SidebarOption";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import LibraryMusicRoundedIcon from "@mui/icons-material/LibraryMusicRounded";

const image = require("./../assets/img/spotify-logo-white.png");

function Sidebar() {
  const [{ playlists }, dispatch] = useDataLayerValue();

  return (
    <div className="sidebar">
      <div>
        <img className="sidebar-logo" src={image} alt="logo" />
      </div>

      <div>
        <SidebarOption Icon={HomeRoundedIcon} text="Home" />
        <SidebarOption Icon={SearchRoundedIcon} text="Search" />
        <SidebarOption Icon={LibraryMusicRoundedIcon} text="Your Library" />
      </div>

      <div>
        <span className="sidebar-title">PLAYLISTS</span>
        <hr />

        {playlists?.items?.map((playlist) => (
          <SidebarOption text={playlist.name} />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
