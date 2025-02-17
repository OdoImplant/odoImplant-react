import React from "react";
import LazyVideo from "../components/LazyVideo.jsx";
import "../css/testimonials.css";

function Testimonials() {
  return (
    <section id="video-container" class="bg-gray-100 ">
      <div className="video">
        <LazyVideo videoSrc="src/assets/testimoni1.mp4" thumbnail="" />
      </div>
      <div className="video">
        <LazyVideo videoSrc="src/assets/testimoni2.mp4" thumbnail="" />
      </div>
      <div className="video">
        <LazyVideo videoSrc="src/assets/testimoni3.mp4" thumbnail="" />
      </div>
      <div className="video">
        <LazyVideo videoSrc="src/assets/testimoni4.mp4" thumbnail="" />
      </div>
      <div className="video">
        <LazyVideo videoSrc="src/assets/testimoni5.mp4" thumbnail="" />
      </div>
    </section>
  );
}
export default Testimonials;
