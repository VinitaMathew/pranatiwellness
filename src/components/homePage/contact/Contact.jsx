import React from "react";
import "./Contact.scss";
import { useInView } from "react-intersection-observer";
import Divider from "../../../assets/divider.svg";

const Contact = React.forwardRef((props, contactRef) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  return (
    <div className="contact-wrapper" ref={contactRef}>
      <div
        style={{ marginTop: "2.3rem" }}
        ref={ref}
        className={inView ? "slide-up content" : "hidden content"}
      >
        <div className="message">YOU DON'T HAVE TO NAVIGATE THIS ALONE.</div>
        <p>Reach out to begin a conversation about therapy.</p>
        <ul>
          <li>Call us @ 8884629182</li>
          <li className="line">|</li>
          <li className="divider">
            <img src={Divider}></img>
          </li>
          <li>Email us @ pranatiwellness@gmail.com</li>
          <li className="line">|</li>
          <li className="divider">
            <img src={Divider}></img>
          </li>
          <li>Follow us on Instagram @PranathiWellness</li>
        </ul>
      </div>
    </div>
  );
});

export default Contact;
