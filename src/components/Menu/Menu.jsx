import { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import Logo from "../../assets/logo.svg";
import "./Menu.scss";

//const Logo = require("../../assets/logo.png");
const MenuIcon = require("../../assets/hamburger-icon.png");
const CloseIcon = require("../../assets/close-icon.png");

export default function Menu(props) {
  const [isTab] = useState(
    window.matchMedia("only screen and (max-width:1024px)").matches,
  );
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState(
    window.location.href.split("/").pop(),
  );
  const [scrollY, setScrollY] = useState(0);

  const navigate = useNavigate();
  const [shouldRunFn, setShouldRunFn] = useState(false);

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

  const handleMenuClick = () => {
    window.scrollTo(0, 0);
    setCurrentPath(window.location.href.split("/").pop());
    setIsMenuOpen(false);
  };

  useEffect(() => {
    setCurrentPath(window.location.href.split("/").pop());
    window.scrollTo(0, 0);
  }, [location]);

  return (
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
          ? "#3d3d3e"
          : scrollY > 0
            ? "#ECEADE"
            : "#ECEADE",
      }}
    >
      <Container>
        <div className="common-container">
          <div>
            <NavLink
              end
              to="/"
              className="logoLink"
              onClick={() => {
                handleMenuClick();
              }}
            >
              <img src={Logo} alt="" className="logo" />
            </NavLink>
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
          {isTab && isMenuOpen ? (
            <div
              onClick={() => setIsMenuOpen(false)}
              style={{
                position: "fixed",
                inset: 0,
                background: "rgba(0,0,0,0.4)",
                zIndex: -1,
                height: "100vh",
              }}
            ></div>
          ) : null}
          {(isTab && isMenuOpen) || !isTab ? (
            <>
              <div className="menu-list">
                <ul className="nav-links">
                  <li
                    className="nav-link"
                    onClick={() => {
                      handleMenuClick();
                    }}
                  >
                    <NavLink end to="/" className="link">
                      Home
                    </NavLink>
                  </li>
                  <li
                    onClick={() => props.scrollToProcess()}
                    className="nav-link"
                  >
                    The process
                  </li>
                  <li
                    className="nav-link"
                    onClick={() => {
                      props.scrollToAbout();
                    }}
                  >
                    About us
                  </li>
                  <button onClick={() => props.scrollToContact()}>
                    Contact
                  </button>
                </ul>
              </div>
            </>
          ) : null}
        </div>
      </Container>
    </div>
  );
}
