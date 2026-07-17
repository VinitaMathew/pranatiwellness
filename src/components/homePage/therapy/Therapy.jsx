import React from "react";
import "./Therapy.scss";
import { useState, useRef, useEffect } from "react";
import Chair from "../../../assets/chair.svg";
import Arrow from "../../../assets/process-arrow.svg";
import Approach from "../../../assets/approach-img.svg";
import { useInView } from "react-intersection-observer";

const DOT_SIZE = 16;
const RAIL_WIDTH = 28;

const Therapy = React.forwardRef((props, processRef) => {
  let accordionItems = [
    {
      title: "Relational",
      content:
        "we understand therapy as a collaboration, between you, the client, and the therapist, as we explore how your relationships shape your emotions, patterns, and sense of self.",
    },
    {
      title: "Trauma informed",
      content:
        "we have a gentle approach to our work as we recognize the impact of past experiences and prioritize safety and compassion in the therapeutic space.",
    },
    {
      title: "Depth-oriented",
      content:
        "Depth-oriented: therapy goes beyond symptom management to understand the deeper emotional experiences influencing your life.",
    },
  ];

  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const [ref2, inView2] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const [ref3, inView3] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const [ref4, inView4] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const [ref5, inView5] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <>
      <div className="therapy-intro-wrapper">
        <div
          ref={ref}
          className={inView ? "slide-up content" : "hidden content"}
        >
          <div className="heading">
            THESE PATTERNS OFTEN HAVE DEEPER PSYCHOLOGICAL ROOTS
          </div>
          <div className="description">
            Therapy offers a space to understand and work through them.
          </div>
        </div>
        <img src={Chair} alt="" />
      </div>
      <div className="therapy-process-wrapper">
        <div
          ref={ref2}
          className={inView2 ? "slide-up content" : "hidden content"}
        >
          <div className="heading">HOW THERAPY WORKS</div>
          <div className="description">
            Therapy is a gradual, collaborative process that typically moves
            through two overlapping phases:
          </div>
        </div>
        <div
          ref={ref3}
          className={
            inView3 ? "slide-up process-steps" : "hidden process-steps"
          }
        >
          <div className="step">
            <div className="step-number">1</div>
            <div className="step-title">Working with current distress</div>
            <div className="step-description">
              Whether that’s anxiety, relationship difficulties, or periods of
              transition and uncertainty.
            </div>
          </div>
          <img src={Arrow} alt="" />
          <div className="step">
            <div className="step-number">2</div>
            <div className="step-title">Understanding Patterns</div>
            <div className="step-description">
              As therapy deepens, we explore attachment, trauma, emotional
              neglect, and recurring patterns.
            </div>
          </div>
        </div>
      </div>
      <div className="approach-wrapper" ref={processRef}>
        <div
          ref={ref4}
          className={inView4 ? "slide-up content" : "hidden content"}
        >
          <div className="heading">APPROACH TO PSYCHOTHERAPY</div>
          <div className="title">Therapy at Pranati Wellness is:</div>
          <div className="description">
            Approached as a thoughtful and collaborative process. The aim of
            therapy is not simply symptom relief, but a deeper understanding of
            emotional patterns and possibility of meaningful psychological
            change.
          </div>
        </div>
        <div
          ref={ref5}
          className={
            inView5 ? "slide-up approach-details" : "hidden approach-details"
          }
        >
          <img src={Approach} alt="" />
          <div style={{ marginTop: "4rem" }}>
            {accordionItems.map((item, index) => (
              <AccordionRow
                key={index}
                item={item}
                isLast={index === accordionItems.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
});
export default Therapy;

const AccordionRow = ({ item, isLast }) => {
  const [open, setOpen] = useState(false);
  const bodyRef = useRef(null);
  const [bodyHeight, setBodyHeight] = useState(0);

  const toggle = () => {
    if (!open && bodyRef.current) {
      setBodyHeight(bodyRef.current.scrollHeight);
    }
    setOpen((prev) => !prev);
  };

  useEffect(() => {
    setBodyHeight(bodyRef.current.scrollHeight);
    setOpen(true);
  }, []);

  return (
    <div style={s.row}>
      {/* ── Left rail ── */}
      <div style={s.rail}>
        <div style={s.dot} />
        {!isLast && (
          <div
            style={{
              ...s.line,
              // height: open
              //   ? `calc(100% - ${DOT_SIZE}px )`
              //   : `calc(50% - ${DOT_SIZE / 2}px)`,
            }}
          />
        )}
      </div>

      {/* ── Content ── */}
      <div style={s.content}>
        {/* Header */}
        <div style={s.header} onClick={toggle}>
          <span style={s.title}>{item.title}</span>
          <span
            style={{
              ...s.arrow,
              transform: open ? "rotate(180deg)" : "rotate(0deg)",
              marginBottom: open ? "-1rem" : "0px",
            }}
          >
            &#8964;
          </span>
        </div>

        {/* Animated body */}
        <div
          style={{
            overflow: "hidden",
            maxHeight: open ? bodyHeight : 0,
            transition: "max-height 300ms ease",
          }}
        >
          <div ref={bodyRef} style={s.body}>
            {item.content}
          </div>
        </div>

        {/* Bottom border — after content */}
        <div style={s.bottomBorder} />
      </div>
    </div>
  );
};

const s = {
  row: {
    display: "flex",
    alignItems: "stretch",
    marginBottom: 16,
  },
  rail: {
    width: RAIL_WIDTH,
    flexShrink: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 14,
    position: "relative",
  },
  dot: {
    width: DOT_SIZE,
    height: DOT_SIZE,
    borderRadius: "50%",
    // border: "2px solid #D1D5DB",
    backgroundColor: "#77928C",
    flexShrink: 0,
    zIndex: 1,
    marginBottom: 0,
  },
  line: {
    width: 1,
    backgroundColor: "#C8C8C8",
    marginTop: 0,
    transition: "height 300ms ease",
    flex: 1,
    position: "absolute",
    top: "1.875rem",
    bottom: "-2.5rem",
  },
  content: {
    flex: 1,
    minWidth: 0,
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0rem 0 0.625rem 0.75rem",
    cursor: "pointer",
    userSelect: "none",
  },
  title: {
    fontWeight: 400,
    fontSize: 32,
    color: "#302D33",
    fontFamily: "EB Garamond",
  },
  arrow: {
    fontSize: 22,
    lineHeight: 1,
    color: "#302D33",
    transition: "transform 300ms ease",
    flexShrink: 0,
    marginLeft: 8,
  },
  body: {
    padding: "0.5rem 0 1rem 0.75rem",
    fontSize: "1rem",
    color: "#302D33",
    lineHeight: 1.6,
  },
  bottomBorder: {
    borderBottom: "1px solid #C8C8C8",
  },
};
