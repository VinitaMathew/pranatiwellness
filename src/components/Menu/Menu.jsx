import { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import Logo from "../../assets/logo.svg";
import "./Menu.scss";

//const Logo = require("../../assets/logo.png");
const MenuIcon = require("../../assets/hamburger-icon.png");
const CloseIcon = require("../../assets/close-icon.png");

export default function Menu(props) {
  const scrollToHome = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const [isTab] = useState(
    window.matchMedia("only screen and (max-width:1024px)").matches,
  );
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    //prevent background scroll when mobile menu is open
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = ""; // cleanup
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.pageYOffset);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMenuIconClick = (isOpen) => {
    setIsMenuOpen(isOpen);
  };

  return (
    <>
      {isTab && isMenuOpen ? (
        <div
          onClick={() => setIsMenuOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.4)",
            zIndex: 1000,
            height: "100vh",
          }}
        ></div>
      ) : null}
      <div
        className={
          isTab
            ? "menu-container-mobile"
            : scrollY > 0
              ? "menu-container-desktop scrolled"
              : "menu-container-desktop"
        }
        style={{
          backgroundColor: isMenuOpen
            ? "#eceade"
            : scrollY > 0
              ? "#ECEADE"
              : "#ECEADE",
        }}
      >
        <Container>
          <div className="common-container">
            <div style={{ marginTop: "-0.7rem" }}>
              <div
                className="logoLink"
                onClick={() => {
                  scrollToHome();
                  setIsMenuOpen(false);
                }}
              >
                <img src={Logo} alt="" className="logo" />
              </div>
              {isTab ? (
                <div className="mobile-wrapper-menu">
                  <button
                    className="menu-button"
                    onClick={() => {
                      handleMenuIconClick(!isMenuOpen);
                    }}
                  >
                    <img src={MenuIcon} alt="toggle menu"></img>
                  </button>
                </div>
              ) : null}
            </div>
            {(isTab && isMenuOpen) || !isTab ? (
              <>
                <div className="menu-list">
                  <ul className="nav-links">
                    <li
                      className="nav-link"
                      onClick={() => {
                        scrollToHome();
                        setIsMenuOpen(false);
                      }}
                    >
                      Home
                    </li>
                    <li
                      onClick={() => {
                        props.scrollToProcess();
                        setIsMenuOpen(false);
                      }}
                      className="nav-link"
                    >
                      The process
                    </li>
                    <li
                      className="nav-link"
                      onClick={() => {
                        props.scrollToAbout();
                        setIsMenuOpen(false);
                      }}
                    >
                      About us
                    </li>
                    <button
                      className="contact-button"
                      onClick={() => {
                        props.scrollToContact();
                        setIsMenuOpen(false);
                      }}
                    >
                      Contact
                    </button>
                  </ul>
                </div>
              </>
            ) : null}
          </div>
        </Container>
      </div>
    </>
  );
}
