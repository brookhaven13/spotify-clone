import React from "react";
import "./Footer.css";
import { Grid, Slider } from "@mui/material";
import PlayCircleFilledRoundedIcon from "@mui/icons-material/PlayCircleFilledRounded";
import ShuffleRoundedIcon from "@mui/icons-material/ShuffleRounded";
import SkipPreviousRoundedIcon from "@mui/icons-material/SkipPreviousRounded";
import SkipNextRoundedIcon from "@mui/icons-material/SkipNextRounded";
import RepeatRoundedIcon from "@mui/icons-material/RepeatRounded";
import PlaylistPlayRoundedIcon from "@mui/icons-material/PlaylistPlayRounded";
import VolumeDownRoundedIcon from "@mui/icons-material/VolumeDownRounded";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-left">
        <img
          className="footer-album-photo"
          src="https://upload.wikimedia.org/wikipedia/en/8/85/Adele_-_Hello_%28Official_Single_Cover%29.png"
          alt="album_photo"
        />

        <div className="footer-song-info">
          <h4>Hello</h4>
          <p>Adele</p>
        </div>
      </div>

      <div className="footer-center">
        <ShuffleRoundedIcon className="footer-icon" />
        <SkipPreviousRoundedIcon className="footer-icon" />
        <PlayCircleFilledRoundedIcon className="footer-icon large" />
        <SkipNextRoundedIcon className="footer-icon" />
        <RepeatRoundedIcon className="footer-icon" />
      </div>

      <div className="footer-right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayRoundedIcon />
          </Grid>
          <Grid item>
            <VolumeDownRoundedIcon />
          </Grid>
          <Grid item xs>
            <Slider />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
