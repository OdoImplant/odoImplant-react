import React from "react";
import LazyVideo from "../components/LazyVideo.jsx";
import "../css/testimonials.css";
import testimoni1 from "../assets/testimoni1.mp4";
import testimoni2 from "../assets/testimoni2.mp4";
import testimoni3 from "../assets/testimoni3.mp4";
import testimoni4 from "../assets/testimoni4.mp4";
import testimoni5 from "../assets/testimoni5.mp4";
import testimoni6 from "../assets/testimoni6.mp4";
import testimoni7 from "../assets/testimoni7.mp4";
import testimoni8 from "../assets/testimoni8.mp4";

function Testimonials() {
  return (
    <section id="video-container" class="bg-gray-100 ">
      <section className="vid-sect">
        <div className="video">
          <LazyVideo videoSrc={testimoni1} thumbnail="" />
        </div>
        <div className="video">
          <LazyVideo videoSrc={testimoni2} thumbnail="" />
        </div>
        <div className="video">
          <LazyVideo videoSrc={testimoni3} thumbnail="" />
        </div>
        <div className="video">
          <LazyVideo videoSrc={testimoni4} thumbnail="" />
        </div>
      </section>
      <section className="vid-sect">
        <div className="video">
          <LazyVideo videoSrc={testimoni5} thumbnail="" />
        </div>
        <div className="video">
          <LazyVideo videoSrc={testimoni6} thumbnail="" />
        </div>
        <div className="video">
          <LazyVideo videoSrc={testimoni7} thumbnail="" />
        </div>
        <div className="video">
          <LazyVideo videoSrc={testimoni8} thumbnail="" />
        </div>
      </section>
    </section>
  );
}
export default Testimonials;
