import React from "react";
import "./video.css";

function Video() {
  return (
    <div className="video">
      <video
        className="video__player"
        controls
        loop
        src="./src/mp4/cremosinho.mp4"
      ></video>
    </div>
  );
}

export default Video;
