import React, { useRef } from "react";
import { BrowserRouter as Route, Routes, HashRouter } from "react-router-dom";
import Menu from "../Menu/Menu";
import "./Routing.scss";
import HomePage from "../homePage/HomePage";

export default function Routing() {
  const contactRef = useRef(null);
  const processRef = useRef(null);
  const aboutRef = useRef(null);
  const beginRef = useRef(null);

  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToProcess = () => {
    processRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToBegin = () => {
    beginRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="routingContainer">
      <HashRouter>
        <div className="menu-container">
          <Menu
            scrollToContact={scrollToContact}
            scrollToProcess={scrollToProcess}
            scrollToAbout={scrollToAbout}
          />
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                contactRef={contactRef}
                processRef={processRef}
                aboutRef={aboutRef}
                beginRef={beginRef}
                scrollToContact={scrollToContact}
                scrollToBegin={scrollToBegin}
              />
            }
          />
        </Routes>
      </HashRouter>
    </div>
  );
}
