import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation(); // Get the current location
  const isResearchPage = location.pathname === "/research"; // Check if the current route is /research

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? "auto" : "hidden";
  };

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
              <Link to="/" className="nav-logo">
                <div className="svg-embed cc-logo-word">
                  {isResearchPage ? (
                    <img src="/images/logo-main-wh.svg" class="whitelogo" />
                  ) : (
                    <img src="/images/logo.png" alt="K4M2A Logo" />
                  )}
                </div>
              </Link>
              <div className="nav-menu">
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
                >
                  Manifesto
                </Link>
                <Link
                  to="/research"
                  className={`nav-link ${isResearchPage ? "w--current" : ""}`}
                >
                  Research
                </Link>
                <Link to="/careers" target="_blank" className="nav-link">
                  Careers
                </Link>
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
                <Link to="/" className="nav-mobile-link">
                  Home
                </Link>
              </div>
              <div className="mobile-menu-fade">
                <Link to="/manifesto" className="nav-mobile-link">
                  Manifesto
                </Link>
              </div>
              <div className="mobile-menu-fade">
                <Link to="/research" className="nav-mobile-link">
                  Research
                </Link>
              </div>
              <div className="mobile-menu-fade">
                <Link to="/careers" className="nav-mobile-link">
                  Careers
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
