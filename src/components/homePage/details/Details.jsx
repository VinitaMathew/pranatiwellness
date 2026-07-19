import "./Details.scss";
import NotEqual from "../../../assets/not-equal.svg";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

const Details = () => {
  const [isTab] = useState(
    window.matchMedia("only screen and (min-width:1024px)").matches,
  );
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
  let symptoms = [
    "Anxiety, overthinking, or emotional overwhelm",
    "Repeating relationship patterns",
    "Difficulty trusting or feeling secure in relationships",
    "Persistent self-criticism or emotional disconnection",
    "Feeling fine outside, unsettled inside",
  ];
  let questions = [
    "Why do I feel disconnected in relationships",
    "Signs of emotional neglect in adults",
    "Why do I keep choosing unavailable partners",
  ];
  return (
    <>
      <div
        ref={ref}
        className={
          inView ? "slide-up clients-wrapper" : "hidden clients-wrapper"
        }
      >
        <div
          style={{
            fontSize: "1rem",
            marginBottom: "4rem",
            color: "#023A3A",
            letterSpacing: "20%",
          }}
          className="title"
        >
          MANY CLIENTS WHO REACH OUT TO US ARE:
        </div>
        <div>Functioning well in daily life </div>
        <div>Self-aware and reflective</div>
        <div className="not-equal">
          <img src={NotEqual} alt="" />
        </div>
        {isTab ? (
          <>
            <div>Yet repeatedly encountering similar</div>
            <div>emotional or relational difficulties</div>
          </>
        ) : (
          <div style={{ lineHeight: "150%" }}>
            Yet repeatedly encountering similar emotional or relational
            difficulties
          </div>
        )}
      </div>
      <div
        ref={ref2}
        className={
          inView2 ? "slide-up symptoms-wrapper" : "hidden symptoms-wrapper"
        }
      >
        <div className="heading">This may show up as</div>
        <div className="symptoms-list">
          {symptoms.map((symptom, index) => (
            <div key={index} className="symptom">
              {symptom}
            </div>
          ))}
        </div>
      </div>
      <div
        ref={ref3}
        className={
          inView3 ? "slide-up questions-wrapper" : "hidden questions-wrapper"
        }
      >
        <div
          style={{
            fontSize: "1rem",
            marginBottom: "5.5rem",
            color: "#023A3A",
            letterSpacing: "20%",
          }}
          className="title"
        >
          IF YOU HAVE FOUND YOURSELF QUESTIONING
        </div>
        <div className="questions-list">
          {questions.map((question, index) => (
            <div key={index} className="question">
              {question}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Details;
