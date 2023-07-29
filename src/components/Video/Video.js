import React from "react";
import classes from "./Video.module.css";
import { videoData } from "./../../helpers/videoData";
import YouTube from 'react-youtube';

const Video = () => {
  const opts={
    height: '250',
    width: '300',
  } 
  return (
    <>
      {videoData.map((item, index) => {
        return (
          <div className={classes.video__card} 
          key={index}
          >
            <YouTube className={classes.video}
            videoId={item.sourceId}
            opts={opts} 
            // SameSite="strict"
            />
          </div>
        );
      })}
    </>
  );
};

export default Video;
