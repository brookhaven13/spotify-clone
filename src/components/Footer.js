import React from "react";
import "./Footer.css";
import { Grid, Slider } from "@mui/material";
import PlayCircleOutlineRoundedIcon from "@mui/icons-material/PlayCircleOutlineRounded";
import ShuffleRoundedIcon from "@mui/icons-material/ShuffleRounded";
import SkipPreviousRoundedIcon from "@mui/icons-material/SkipPreviousRounded";
import SkipNextRoundedIcon from "@mui/icons-material/SkipNextRounded";
import RepeatRoundedIcon from "@mui/icons-material/RepeatRounded";
import PlaylistPlayRoundedIcon from "@mui/icons-material/PlaylistPlayRounded";
import VolumeDownRoundedIcon from "@mui/icons-material/VolumeDownRounded";
import VolumeUpRoundedIcon from "@mui/icons-material/VolumeUpRounded";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-left">
        <span>Album and song details</span>
      </div>
      <div className="footer-center">
        <ShuffleRoundedIcon />
        <SkipPreviousRoundedIcon />
        <PlayCircleOutlineRoundedIcon />
        <SkipNextRoundedIcon />
        <RepeatRoundedIcon />
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
          <Grid item>
            <VolumeUpRoundedIcon />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
