import React from "react";
import "./Contact.scss";
import { useInView } from "react-intersection-observer";
import Divider from "../../../assets/divider.svg";
import Arrow from "../../../assets/arrow-up-right.svg";

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
          <li>
            <a href="tel:+918884629182">
              Call us @ 8884629182{" "}
              <img style={{ marginBottom: "-5px" }} src={Arrow}></img>
            </a>
          </li>
          <li className="line">|</li>
          <li className="divider">
            <img src={Divider}></img>
          </li>
          <li>
            <a href="mailto:pranatiwellness@gmail.com">
              Email us @ pranatiwellness@gmail.com{" "}
              <img style={{ marginBottom: "-6px" }} src={Arrow}></img>
            </a>
          </li>
          <li className="line">|</li>
          <li className="divider">
            <img src={Divider}></img>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.instagram.com/pranatiwellness?igsh=MTJmdjh0b3VlZHk2YQ%3D%3D"
            >
              Follow us on Instagram @pranatiwellness{" "}
              <img style={{ marginBottom: "-6px" }} src={Arrow}></img>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
});

export default Contact;
