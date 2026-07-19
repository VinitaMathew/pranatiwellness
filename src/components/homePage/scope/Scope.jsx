import "./Scope.scss";
import Tick from "../../../assets/tick.svg";
import Cross from "../../../assets/cross.svg";
import Info from "../../../assets/info.svg";
import { useInView } from "react-intersection-observer";

export default function Scope(props) {
  const helpWith = [
    "Childhood trauma therapy (adults)",
    "Therapy for emotional neglect",
    "Attachment & relationship patterns",
    "Therapy for sexual trauma",
    "Emotional regulation & identity development",
  ];
  const outsideServices = [
    "Psychiatric diagnosis",
    "Psychological assessments or testing",
    "Prescription to medication",
  ];

  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const [ref2, inView2] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  return (
    <div className="scope-wrapper">
      <div ref={ref} className={inView ? "slide-up content" : "hidden content"}>
        <div className="title">Scope of Practice</div>
        <div className="description">
          At Pranati Wellness, psychotherapy services are provided by
          Counselling Psychologists with a focus on emotional well-being,
          self-awareness, and personal growth.
        </div>
      </div>
      <div
        ref={ref2}
        className={
          inView2 ? "slide-up additional-info" : "hidden additional-info"
        }
      >
        <div className="info-item">
          <div className="info-title" style={{ backgroundColor: "#77928C" }}>
            What we help with
          </div>
          <ul className="info-description">
            {helpWith.map((item, index) => (
              <li key={index}>
                <div className="img-wrapper" style={{ background: "#77928c" }}>
                  <img src={Tick} alt="" />
                </div>
                <div>{item}</div>
              </li>
            ))}
          </ul>
        </div>
        <div className="right-section">
          <div className="info-item" style={{ paddingBlockEnd: "0.5rem" }}>
            <div className="info-title" style={{ backgroundColor: "#927777" }}>
              Outside our services
            </div>
            <ul className="info-description">
              {outsideServices.map((item, index) => (
                <li key={index}>
                  <div
                    className="img-wrapper"
                    style={{ background: "#927777" }}
                  >
                    <img src={Cross} alt="" />
                  </div>
                  <div>{item}</div>
                </li>
              ))}
            </ul>
          </div>
          <div className="contact-wrapper">
            <div className="img-wrapper" style={{ background: "#77928c" }}>
              <img src={Info} alt="" />
            </div>
            <div>
              Need psychiatric evaluation, testing, or medication support? We
              can help connect you with the appropriate professionals.{" "}
              <span onClick={props.scrollToContact}>Contact us</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
