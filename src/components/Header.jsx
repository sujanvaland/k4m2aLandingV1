import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import EmailForm from "./ui/EmailForm";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation(); // Get the current location
  const isResearchPage = location.pathname === "/research"; // Check if the current route is /research

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? "auto" : "hidden";
  };

  const handleClick = (e, path, isMobile) => {
    e.stopPropagation();
    if (isMobile) {
      toggleMenu();
    }
    // Reload the page when the "Home" link is clicked
    // if (location.pathname === "/") {
    if (window.location.pathname === path) {
      // If it is, reload the page
      window.location.href = window.location.pathname; // Use href to reload the page
    }

    // }
  };

  useEffect(() => {
    const handleBackButton = () => {
      if (isMenuOpen) {
        setIsMenuOpen(false);
        document.body.style.overflow = "auto"; // Reset body overflow
      }
    };

    window.addEventListener("popstate", handleBackButton);

    return () => {
      window.removeEventListener("popstate", handleBackButton);
    };
  }, [isMenuOpen]);

  return (
    <nav
      className={`nav ${isResearchPage ? "blacknav" : ""} ${
        isMenuOpen ? "open" : ""
      }`}
    >
      <div className="page-padding">
        <div className="container">
          <div className="nav-inner">
            <div className="nav-left">
              <Link
                to="/"
                className="nav-logo"
                onClick={(e) => handleClick(e, "/")}
              >
                <div className="svg-embed cc-logo-word">
                  {isResearchPage ? (
                    <>
                      <img
                        src="/images/logo-main-wh.svg"
                        className="whitelogo desktop"
                      />
                      <img
                        src="/images/logo.png"
                        alt="K4M2A Logo"
                        className="menumobile"
                      />
                    </>
                  ) : (
                    <img src="/images/logo.png" alt="K4M2A Logo" />
                  )}
                </div>
              </Link>
              <div className="nav-menu" onClick={(e) => handleClick(e, "/")}>
                <Link
                  to="/"
                  className={`nav-link ${
                    location.pathname === "/" ? "w--current" : ""
                  }`}
                >
                  Home
                </Link>
                <Link
                  to="/manifesto"
                  className={`nav-link ${
                    location.pathname === "/manifesto" ? "w--current" : ""
                  }`}
                  onClick={(e) => handleClick(e, "/manifesto")}
                >
                  Manifesto
                </Link>
                <Link
                  to="/research"
                  className={`nav-link ${isResearchPage ? "w--current" : ""}`}
                  onClick={(e) => handleClick(e, "/research")}
                >
                  Research
                </Link>
                {/* <Link to="/careers" target="_blank" className="nav-link">
                  Careers
                </Link> */}
              </div>
            </div>
            <div className="nav-right">
              <Link to="/signin" className="cta cc-nav">
                <div className="cta-bg u-rainbow u-blur-perf"></div>
                <div className="cta-inner cc-nav">Sign in</div>
              </Link>
              <button className="nav-mobile-btn" onClick={toggleMenu}>
                <div className="hamburger_1_wrap">
                  <div className="hamburger_1_line"></div>
                  <div
                    className="hamburger_embed w-embed"
                    style={{ height: 7, position: "relative" }}
                  ></div>
                  <div className="hamburger_1_line"></div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="nav-mobile-menu">
        <div className="nav-mobile-menu-top"></div>
        <div className="page-padding">
          <div className="container">
            <div className="mobile-menu-inner">
              <div className="mobile-menu-fade">
                <Link
                  to="/"
                  className={`nav-mobile-link ${
                    location.pathname === "/" ? "w--current" : ""
                  }`}
                  onClick={(e) => handleClick(e, "/", true)}
                >
                  Home
                </Link>
              </div>
              <div className="mobile-menu-fade">
                <Link
                  to="/manifesto"
                  className={`nav-mobile-link ${
                    location.pathname === "/manifesto" ? "w--current" : ""
                  }`}
                  onClick={(e) => handleClick(e, "/manifesto", true)}
                >
                  Manifesto
                </Link>
              </div>
              <div className="mobile-menu-fade">
                <Link
                  to="/research"
                  className={`nav-mobile-link ${
                    location.pathname === "/research" ? "w--current" : ""
                  }`}
                  onClick={(e) => handleClick(e, "/research", true)}
                >
                  Research
                </Link>
              </div>
              <div className="mobile-menu-fade">
              <Link to="/signin" className="cta ">
                <div className="cta-bg u-rainbow u-blur-perf"></div>
                <div className="cta-inner ">Sign in</div>
              </Link>
              </div>
              <div className="mobile-menu-fade">
                <img
                  src="images/mobile-menu-divider.png"
                  loading="lazy"
                  width="251"
                  height="13"
                  alt=""
                  srcSet="
                                        images/mobile-menu-divider.png 500w,
                                        images/mobile-menu-divider.png      502w
                                        "
                  sizes="100vw"
                  className="mobile-menu-divider"
                />
                <Link
                  to="/terms"
                  onClick={(e) => handleClick(e, "/terms", true)}
                  className={`nav-mobile-link cc-small ${
                    location.pathname === "/terms" ? "w--current" : ""
                  } `}
                >
                  Terms of Use
                </Link>
                <Link
                  onClick={(e) => handleClick(e, "/rules", true)}
                  to="/rules"
                  className={`nav-mobile-link cc-small ${
                    location.pathname === "/rules" ? "w--current" : ""
                  } `}
                >
                  Play by the Rules
                </Link>

                <EmailForm className="cc-mobile-menu w-form marbtm35" onSuccess={toggleMenu} />

                <img
                  src="images/mobile-menu-divider.png"
                  loading="lazy"
                  width="251"
                  height="13"
                  alt=""
                  srcSet="
                                    images/mobile-menu-divider.png 500w,
                                    images/mobile-menu-divider.png      502w
                                    "
                  sizes="100vw"
                  className="mobile-menu-divider"
                />

                <div className="mobile-menu-social-wrap">
                  <a href="https://x.com/k4m2a" target="_blank" className="icon-wrap w-inline-block">
                    <div className="icon-inner">
                      <div className="svg-embed w-embed">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.8442 15.1515L4.4085 22.5H0.84375L9.17925 12.978L10.8442 15.1515Z"
                            fill="#212121"
                          />
                          <path
                            d="M12.7891 8.241L18.6818 1.5H22.2443L14.4391 10.4265L12.7891 8.241Z"
                            fill="#212121"
                          />
                          <path
                            d="M23.6168 22.5H16.4475L0.384766 1.5H7.73552L23.6168 22.5ZM17.4308 20.3677H19.4048L6.66302 3.5205H4.54502L17.4308 20.3677Z"
                            fill="#212121"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="icon-bg u-rainbow u-blur-perf"></div>
                  </a>
                  <a href="https://www.instagram.com/k4m2a" target="_blank" className="icon-wrap w-inline-block">
                    <div className="icon-inner">
                      <div className="svg-embed w-embed">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 2.982C14.937 2.982 15.285 2.993 16.445 3.046C17.1424 3.05412 17.8331 3.18233 18.487 3.425C18.965 3.60111 19.3973 3.88237 19.752 4.248C20.1176 4.60269 20.3989 5.035 20.575 5.513C20.8177 6.16685 20.9459 6.85762 20.954 7.555C21.007 8.715 21.018 9.063 21.018 12C21.018 14.937 21.007 15.285 20.954 16.445C20.9459 17.1424 20.8177 17.8331 20.575 18.487C20.3919 18.9615 20.1116 19.3924 19.752 19.752C19.3924 20.1116 18.9615 20.3919 18.487 20.575C17.8331 20.8177 17.1424 20.9459 16.445 20.954C15.285 21.007 14.937 21.018 12 21.018C9.063 21.018 8.715 21.007 7.555 20.954C6.85762 20.9459 6.16685 20.8177 5.513 20.575C5.035 20.3989 4.60269 20.1176 4.248 19.752C3.88237 19.3973 3.60111 18.965 3.425 18.487C3.18233 17.8331 3.05412 17.1424 3.046 16.445C2.993 15.285 2.982 14.937 2.982 12C2.982 9.063 2.993 8.715 3.046 7.555C3.05412 6.85762 3.18233 6.16685 3.425 5.513C3.60111 5.035 3.88237 4.60269 4.248 4.248C4.60269 3.88237 5.035 3.60111 5.513 3.425C6.16685 3.18233 6.85762 3.05412 7.555 3.046C8.715 2.993 9.063 2.982 12 2.982ZM12 1C9.013 1 8.638 1.013 7.465 1.066C6.55258 1.08486 5.6499 1.25762 4.795 1.577C4.06355 1.86017 3.3994 2.29319 2.84521 2.84824C2.29102 3.40329 1.85904 4.06811 1.577 4.8C1.25762 5.6549 1.08486 6.55758 1.066 7.47C1.013 8.638 1 9.013 1 12C1 14.987 1.013 15.362 1.066 16.535C1.08486 17.4474 1.25762 18.3501 1.577 19.205C1.86017 19.9365 2.29319 20.6006 2.84824 21.1548C3.40329 21.709 4.06811 22.141 4.8 22.423C5.6549 22.7424 6.55758 22.9151 7.47 22.934C8.638 22.987 9.013 23 12 23C14.987 23 15.362 22.987 16.535 22.934C17.4474 22.9151 18.3501 22.7424 19.205 22.423C19.9365 22.1398 20.6006 21.7068 21.1548 21.1518C21.709 20.5967 22.141 19.9319 22.423 19.2C22.7424 18.3451 22.9151 17.4424 22.934 16.53C22.987 15.362 23 14.987 23 12C23 9.013 22.987 8.638 22.934 7.465C22.9151 6.55258 22.7424 5.6499 22.423 4.795C22.1398 4.06355 21.7068 3.3994 21.1518 2.84521C20.5967 2.29102 19.9319 1.85904 19.2 1.577C18.3451 1.25762 17.4424 1.08486 16.53 1.066C15.362 1.013 14.987 1 12 1Z"
                            fill="#212121"
                          />
                          <path
                            d="M12.0006 6.35107C10.8833 6.35107 9.79112 6.68238 8.86215 7.3031C7.93318 7.92382 7.20913 8.80608 6.78157 9.8383C6.35401 10.8705 6.24214 12.0063 6.46011 13.1021C6.67808 14.1979 7.21609 15.2045 8.00612 15.9945C8.79615 16.7845 9.8027 17.3226 10.8985 17.5405C11.9943 17.7585 13.1301 17.6466 14.1623 17.2191C15.1946 16.7915 16.0768 16.0675 16.6975 15.1385C17.3183 14.2095 17.6496 13.1173 17.6496 12.0001C17.6496 10.5019 17.0544 9.06502 15.995 8.00563C14.9356 6.94624 13.4988 6.35107 12.0006 6.35107ZM12.0006 15.6671C11.2753 15.6671 10.5663 15.452 9.96329 15.0491C9.36025 14.6461 8.89025 14.0734 8.6127 13.4034C8.33515 12.7333 8.26253 11.996 8.40403 11.2847C8.54552 10.5734 8.89477 9.91995 9.4076 9.40711C9.92044 8.89427 10.5738 8.54503 11.2852 8.40353C11.9965 8.26204 12.7338 8.33466 13.4039 8.61221C14.0739 8.88975 14.6466 9.35976 15.0496 9.9628C15.4525 10.5658 15.6676 11.2748 15.6676 12.0001C15.6676 12.9726 15.2812 13.9053 14.5935 14.593C13.9058 15.2807 12.9731 15.6671 12.0006 15.6671Z"
                            fill="#212121"
                          />
                          <path
                            d="M17.8727 7.44811C18.6017 7.44811 19.1927 6.85712 19.1927 6.12811C19.1927 5.39909 18.6017 4.80811 17.8727 4.80811C17.1437 4.80811 16.5527 5.39909 16.5527 6.12811C16.5527 6.85712 17.1437 7.44811 17.8727 7.44811Z"
                            fill="#212121"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="icon-bg u-rainbow u-blur-perf"></div>
                  </a>
                </div>
              </div>
              {/* <div className="mobile-menu-fade">
                <Link to="/careers" className="nav-mobile-link">
                  Careers
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
