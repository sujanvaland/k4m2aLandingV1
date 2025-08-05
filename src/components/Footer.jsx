import { Link, useLocation } from "react-router-dom";

export default function Footer() {
  const location = useLocation(); // Get the current location

  const handleClick = (e, path) => {
    e.stopPropagation();

    // Reload the page when the "Home" link is clicked
    // if (location.pathname === "/") {
    if (window.location.pathname === path) {
      // If it is, reload the page
      window.location.href = window.location.pathname; // Use href to reload the page
    }

    // }
  };

  return (
    <div className="footer">
      <div className="page-padding">
        <div className="frontcontainer">

          <Link
            onClick={(e) => handleClick(e, "/")}
            to="/"
            className={`footer-logo mobile ${location.pathname === "/" ? "w--current" : ""
              }`}
          >
            <div className="svg-embed cc-logo-icon">
              <img src="/images/logo-main-wh.svg" alt="K4M2A" loading="lazy" />
            </div>
          </Link>
          <div className="footer-menu">
            <Link
              onClick={(e) => handleClick(e, "/")}
              to="/"
              className={`footer-logo desktop ${location.pathname === "/" ? "w--current" : ""
                }`}
            >
              <div className="svg-embed cc-logo-icon">
                <img src="/images/logo-main-wh.svg" alt="K4M2A" loading="lazy" />
              </div>
            </Link>
            <div className="footer-cell">
              <div className="footer-heading">The Good</div>
              <Link
                onClick={(e) => handleClick(e, "/")}
                to="/"
                className={`footer-link ${location.pathname === "/" ? "w--current" : ""
                  }`}
              >
                Home
              </Link>
              <Link
                onClick={(e) => handleClick(e, "/manifesto")}
                to="/manifesto"
                className={`footer-link ${location.pathname === "/manifesto" ? "w--current" : ""
                  }`}
              >
                Manifesto
              </Link>

              <Link
                onClick={(e) => handleClick(e, "/research")}
                to="/research"
                className={`footer-link ${location.pathname === "/research" ? "w--current" : ""
                  }`}
              >
                Research
              </Link>

              <Link
                onClick={(e) => handleClick(e, "/contactus")}
                to="/contactus"
                className={`footer-link ${location.pathname === "/contactus" ? "w--current" : ""
                  }`}
              >
                ContactUs
              </Link>

            </div>

            <div className="footer-cell">
              <div className="footer-heading">The Important</div>

              <Link
                onClick={(e) => handleClick(e, "/security")}
                to="/security"
                className={`footer-link ${location.pathname === "/security" ? "w--current" : ""
                  }`}
              >
                Security
              </Link>
              <Link
                onClick={(e) => handleClick(e, "/career")}
                to="/career"
                className={`footer-link ${location.pathname === "/careers" ? "w--current" : ""
                  }`}
              >
                Career
              </Link>
              <Link
                onClick={(e) => handleClick(e, "/blog")}
                to="/blog"
                className={`footer-link ${location.pathname === "/blog" ? "w--current" : ""
                  }`}
              >
                Blogs
              </Link>
              <Link
                onClick={(e) => handleClick(e, "/pricing")}
                to="/pricing"
                className={`footer-link ${location.pathname === "/pricing" ? "w--current" : ""
                  }`}
              >
                Pricing
              </Link>
            </div>
            <div className="footer-cell">
              <div className="footer-heading">The Boring</div>
              <Link
                onClick={(e) => handleClick(e, "/terms")}
                to="/terms"
                className={`footer-link ${location.pathname === "/terms" ? "w--current" : ""
                  }`}
              >
                Terms
              </Link>
              <Link
                onClick={(e) => handleClick(e, "/rules")}
                to="/rules"
                className={`footer-link ${location.pathname === "/rules" ? "w--current" : ""
                  }`}
              >
                Play by the Rules
              </Link>
              <Link
                onClick={(e) => handleClick(e, "/privacy")}
                to="/privacy"
                className={`footer-link ${location.pathname === "/privacy" ? "w--current" : ""
                  }`}
              >
                Privacy
              </Link>
              <Link
                onClick={(e) => handleClick(e, "/support")}
                to="/support"
                className={`footer-link ${location.pathname === "/support" ? "w--current" : ""
                  }`}
              >
                Support
              </Link>

            </div>

            <div className="footer-cell">
              <div className="footer-heading">The Cool</div>
              <a href="https://x.com/k4m2a" className="footer-link">
                X
              </a>
              <a
                href="https://www.instagram.com/k4m2a"
                className="footer-link"
              >
                Instagram
              </a>
            </div>
          </div>
          <div className="footerbottomlogo">
            <Link
              onClick={(e) => handleClick(e, "/")}
              to="/"
              className={`footer-logo ${location.pathname === "/" ? "w--current" : ""
                }`}
            >
              <div className="logobox">
                <picture>
                  <source srcSet="/images/logo-main-wh.svg" type="image/svg" />
                  <img src="/images/logo-main-wh.svg" alt="K4M2A" loading="lazy" />
                </picture>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
