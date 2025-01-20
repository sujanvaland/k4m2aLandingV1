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

  const handleClick = (e,path, isMobile) => {
    e.stopPropagation()
    if(isMobile){
      toggleMenu()
    }
    // Reload the page when the "Home" link is clicked
    // if (location.pathname === "/") {
      if (window.location.pathname === path) {
        // If it is, reload the page
        window.location.href = window.location.pathname; // Use href to reload the page
      }
   
    // }
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
              <Link to="/" className="nav-logo" onClick={handleClick}>
                <div className="svg-embed cc-logo-word">
                  {isResearchPage ? (
                    <img src="/images/logo-main-wh.svg" class="whitelogo" />
                  ) : (
                    <img src="/images/logo.png" alt="K4M2A Logo" />
                  )}
                </div>
              </Link>
              <div className="nav-menu" onClick={(e)=>handleClick(e, "/")}>
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
                  onClick={(e)=>handleClick(e, "/manifesto")}
                >
                  Manifesto
                </Link>
                <Link
                  to="/research"
                  className={`nav-link ${isResearchPage ? "w--current" : ""}`}
                  onClick={(e)=>handleClick(e, "/research")}
                >
                  Research
                </Link>
                {/* <Link to="/careers" target="_blank" className="nav-link">
                  Careers
                </Link> */}
              </div>
            </div>
            <div className="nav-right">
              {/* <Link to="/signin" className="cta cc-nav">
                <div className="cta-bg u-rainbow u-blur-perf"></div>
                <div className="cta-inner cc-nav">Sign in</div>
              </Link> */}
              <button className="nav-mobile-btn" onClick={toggleMenu}>
                <div className="hamburger_1_wrap">
                  <div className="hamburger_1_line"></div>
                  <div class="hamburger_embed w-embed" style={{height:7, position:"relative"}}></div>
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
                <Link to="/" 
                  className={`nav-mobile-link ${
                    location.pathname === "/" ? "w--current" : ""
                  }`}
                  onClick={(e)=>handleClick(e,"/",true)}>
                  Home
                </Link>
              </div>
              <div className="mobile-menu-fade">
                <Link to="/manifesto"
                 className={`nav-mobile-link ${
                  location.pathname === "/manifesto" ? "w--current" : ""
                }`}
                onClick={(e)=>handleClick(e,"/manifesto",true)}>
                  Manifesto
                </Link>
              </div>
              <div className="mobile-menu-fade">
                <Link to="/research" 
                 className={`nav-mobile-link ${
                  location.pathname === "/research" ? "w--current" : ""
                }`}
                onClick={(e)=>handleClick(e,"/research",true)}
                >
                  Research
                </Link>
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
