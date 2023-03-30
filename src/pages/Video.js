import React from "react";
import "./video.css";
import mp4 from "./mp4/Cremosinho.mp4";


function Video() {
  return (
    <div className="video">
      <video
        className="video__player"
        controls
        loop
        src={mp4}
      ></video>
    </div>
  );
}

export default Video;
