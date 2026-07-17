import React from "react";
import "./MeetSurabhi.scss";
import Surabhi from "../../../assets/surabhi.svg";
import Design from "../../../assets/meet-design.svg";
import { useInView } from "react-intersection-observer";

const MeetSurabhi = React.forwardRef((props, aboutRef) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  return (
    <div className="meet-surabhi" ref={aboutRef}>
      <img src={Design} alt="" className="design" />
      <div ref={ref} className={inView ? "slide-up content" : "hidden content"}>
        <div className="title">Meet Surabhi</div>
        <div className="description">
          Surabhi Dinakar is a Counselling Psychologist based in Bangalore, with
          a Master's in Counselling Psychology. She practices queer and kink
          aware psychotherapy.
        </div>
      </div>
      <img src={Surabhi} alt="" className="profile-img" />
    </div>
  );
});

export default MeetSurabhi;
