import React from "react";
import "./Landing.scss";
import ArrowRight from "../../../assets/arrow-right.svg";
import { useInView } from "react-intersection-observer";

const Landing = React.forwardRef((props, beginRef) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const [ref2, inView2] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  return (
    <div className="landing-wrapper">
      <section className="landing-section">
        <div
          ref={ref}
          className={inView ? "slide-up content" : "hidden content"}
        >
          <div className="info-tag">
            In-person in Bangalore | Online therapy across India
          </div>
          <div className="heading">
            Trauma-Informed Psychotherapy for Adults
          </div>
          <p style={{ color: "#302D33", lineHeight: "150%" }} ref={beginRef}>
            Pranati Wellness is a psychotherapy practice in Bangalore offering
            depth-oriented, trauma-informed therapy for adults navigating
            anxiety, relationship difficulties, sexual trauma, and persistent
            emotional patterns.
          </p>
          <button onClick={props.scrollToBegin}>
            Let’s begin{" "}
            <img src={ArrowRight} alt="" style={{ marginBottom: "-5px" }} />
          </button>
        </div>
      </section>
      <section className="unresolved-section">
        <div
          ref={ref2}
          className={inView2 ? "slide-up content" : "hidden content"}
        >
          <div style={{ color: "white", letterSpacing: "20%" }}>
            WHEN SOMETHING STILL FEELS UNRESOLVED
          </div>
          <p className="description">
            You may have insight into your patterns—and still feel unable to
            shift them.
          </p>
        </div>
      </section>
    </div>
  );
});

export default Landing;
