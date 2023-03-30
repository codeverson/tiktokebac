import React, { useRef, useState } from "react";
import "./video.css";
import mp4 from "../mp4/Cremosinho.mp4";

function Video() {
  const videoRef = useRef(null);
  const [play, setPlay] = useState(false);

  function handleStart() {
    if (play) {
      videoRef.current.pause();
      setPlay(false);
    } else {
      videoRef.current.play();
      setPlay(true);
    }
  }

  return (
    <div className="video">
      <video
        className="video__player"
        ref={videoRef}
        onClick={handleStart}
        loop
        src={mp4}
      ></video>
    </div>
  );
} 

export default Video;
