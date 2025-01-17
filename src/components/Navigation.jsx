import React from 'react';
import { Link ,useLocation} from 'react-router-dom';
import logo from '/images/logo.png';

const Navigation = () => {
  const location = useLocation(); // Get the current location
  const isResearchPage = location.pathname === '/research'; // Check if the current route is /research

  console.log({location, pathname:location.pathname === '/manifesto' })

  return (
    <nav className={`nav ${isResearchPage ? 'nav-black' : ''}`}>
      <div className="page-padding">
        <div className="container">
          <div className="nav-inner">
            <div className="nav-left">
              <Link aria-label="k4m2a logo" to="/" className="nav-logo w-inline-block w--current">
                <div className="svg-embed cc-logo-word w-embed">
                  <img alt="logo" src="/images/logo.png" />
                </div>
              </Link>
              <div className="nav-menu">
                <Link
                  to="/"
                  className={`nav-link ${location.pathname === '/' ? 'w--current' : ''}`}
                >
                  Home
                </Link>
                <Link
                  to="/manifesto"
                  className={`nav-link ${location.pathname === '/manifesto' ? 'w--current' : ''}`}
                >
                  Manifesto
                </Link>
                <Link
                  to="/research"
                  className={`nav-link ${isResearchPage ? 'w--current' : ''}`}
                >
                  Research
                </Link>
                <Link to="/careers" target="_blank" className="nav-link">
                  Careers
                </Link>
              </div>
            </div>
            <div className="nav-right">
              <Link to="/register" className="cta cc-nav w-inline-block">
                <div className="cta-bg u-rainbow u-blur-perf" />
                <div className="cta-inner cc-nav">
                  <div>Sign in</div>
                </div>
              </Link>
              <div className="nav-mobile-btn">
                <div className="hamburger_1_wrap">
                  <div className="hamburger_1_line" />
                  <div className="hamburger_embed w-embed">
                    <style>
                      {` .hamburger_1_wrap {
                        --thickness: 2px;
                        --gap: 6px;
                        --rotate: 45;
                        --width: 100%;
                      }
                      .open .hamburger_1_line:first-child {
                        transform: translateY(calc(var(--thickness) * 0.5 + var(--gap) * 0.5)) rotate(calc(var(--rotate) * 1deg));
                      }
                      .open .hamburger_1_line:last-child {
                        transform: translateY(calc(var(--thickness) * -0.5 + var(--gap) * -0.5)) rotate(calc(var(--rotate) * 3 * 1deg));
                      }`}
                    </style>
                  </div>
                  <div className="hamburger_1_line" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

