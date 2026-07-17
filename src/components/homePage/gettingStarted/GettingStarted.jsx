import "./GettingStarted.scss";
import GettingStartedImg from "../../../assets/getting-started.svg";
import { useInView } from "react-intersection-observer";

export default function GettingStarted(props) {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const [ref2, inView2] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  return (
    <div className="getting-started-wrapper">
      <div className="getting-started">
        <div
          ref={ref}
          className={inView ? "slide-up content" : "hidden content"}
        >
          <div className="heading">GETTING STARTED</div>
          <div className="title">Considering therapy?</div>
          <div className="description">
            The first step is a brief consultation where we can get to know each
            other, understand your needs, and explore whether we're the right
            fit for your journey.
          </div>
          <button onClick={props.scrollToContact}>
            Schedule a Consultation
          </button>
        </div>
        <img src={GettingStartedImg} alt="" />
      </div>
      <div ref={ref2} className={inView2 ? "slide-up target" : "hidden target"}>
        <div className="heading">WHO THIS IS FOR</div>
        <div className="title">Adults (25 - 45) who:</div>
        <ul className="description">
          <li>Are reflective and self aware</li>
          <li style={{ marginLeft: "7.438rem" }}>
            Function well externally but struggle internally
          </li>
          <li style={{ marginLeft: "5.875rem" }}>
            Are open to depth-oriented work
          </li>
        </ul>
      </div>
    </div>
  );
}
