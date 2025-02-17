import React from "react";
import LazyLoad from "react-lazyload";

const LazyVideo = ({ videoSrc, thumbnail }) => {
  return (
    <LazyLoad height={300} offset={100} once>
      <video controls width="100%" poster={thumbnail}>
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </LazyLoad>
  );
};

export default LazyVideo;
