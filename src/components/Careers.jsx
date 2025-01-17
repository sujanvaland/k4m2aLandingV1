import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import mobileMenuDivider from '/images/mobile-menu-divider.png';
import "./styles/custom.css"
import "./styles/styles.css"
import imgk41 from '/images/img_k41.svg';
import imgk42 from '/images/img_k42.svg';
import imgk43 from '/images/img_k43.svg';
import logoMainWh from '/images/logo-main-wh.svg';
import k4m2aGlobeOrbit1080 from '/images/k4m2a_globe-orbit-1080.webp';
import k4m2aGlobeOrbit500 from '/images/k4m2a_globe-orbit-500.webp';
import k4m2aGlobeOrbit800 from '/images/k4m2a_globe-orbit-800.webp';
import k4m2aCommentsDark from '/images/k4m2a_comments-dark.png';
import k4Img11 from '/images/k4_img1_1.png';
import k4m2aWorldPin from '/images/k4m2a_world-pin.png';
import k4m2aCodeEditor from '/images/k4m2a_code-editor.png';
import Navigation from './Navigation';
import Footer from './Footer';

function Research() {
  useEffect(() => {
    // JavaScript code to handle mobile menu toggle
    const nav = document.querySelector('.nav');

    const mobileMenuBtn = document.querySelector('.nav-mobile-btn');
    mobileMenuBtn.addEventListener('click', function () {
      this.x = ((this.x || 0) + 1) % 2;
      if (this.x) {
        nav.classList.add('open');
        document.body.style.overflow = 'hidden';
      } else {
        nav.classList.remove('open');
        document.body.style.overflow = 'auto';
      }
    });

    // JavaScript to handle navLinks delay
    const navLinks = document.querySelectorAll('.mobile-menu-fade');
    let navDelay = 0;

    for (let i = 0; i < navLinks.length; i += 1) {
      // Explicitly control the increment
      navDelay += 0.05; // Equivalent to navDelay += 0.05
      navLinks[i].style.setProperty('--delay', `${navDelay}s`);
    }

    // Cleanup event listener on component unmount
    return () => {
      mobileMenuBtn.removeEventListener('click', function () {
        this.x = ((this.x || 0) + 1) % 2;
        if (this.x) {
          nav.classList.add('open');
          document.body.style.overflow = 'hidden';
        } else {
          nav.classList.remove('open');
          document.body.style.overflow = 'auto';
        }
      });
    };
  }, []); // Empty dependency array to run once when component mounts

  return (
    <html data-wf-domain=" " data-wf-page=" " data-wf-site=" " lang="en">
      <head>
        <meta charset="utf-8" />
        <title>K4M2A</title>
        <meta content=" " name="description" />
        <link rel="shortcut icon" href="favicon.ico" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <style>
          {` @import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap');`}
        </style>

        <link rel="stylesheet" href="css/custom.css" />
        <link rel="stylesheet" href="css/styles.css" />
      </head>
      <body>
        <div className="page-wrapper">
          <Navigation />
          <main className="main cc-home cc-research">
            <header className="hero cc-research">
              <div className="page-padding">
                <div className="container">
                  <div className="home-hero-header cc-research">
                    <div className="eyebrow-pill">
                      <div className="eyebrow-pill-inner cc-dark">
                        <div>Our technology</div>
                      </div>
                    </div>
                    <h1 className="home-hero-heading">Enlightened Humanity</h1>
                    <p className="subheading">
                      Traditional platforms weren’t built to serve spiritual seekers in the intelligence age. We’re
                      creating a new layer of connection to change that.
                    </p>
                  </div>
                  <div className="research-globe-wrap">
                    <div className="research-globe-inner">
                      <img
                       src={k4m2aGlobeOrbit1080}
                        loading="eager"
                        sizes="(max-width: 767px) 100vw, (max-width: 991px) 93vw, 72vw"
                        srcSet={`
                          ${k4m2aGlobeOrbit500} 500w,
                          ${k4m2aGlobeOrbit800} 800w,
                          ${k4m2aGlobeOrbit1080} 1080w,
                          ${k4m2aGlobeOrbit1080} 1678w
                        `}
                        alt=""
                        className="globe-orbit"
                      />
                      <div className="research-globe-border" />
                      <div className="research-globe-glow" />
                      <div className="globe-canvas-overlay" />
                    </div>
                  </div>
                  <div className="research-intro-wrap">
                    <div className="research-intro-cell">
                      <h2 className="heading-m cc-research">
                        Globally<span className="u-text-sec"> Connected</span>
                      </h2>
                      <div className="research-intro-divider" />
                      <div>Unmatched speeds and low latency worldwide.</div>
                    </div>
                    <div className="research-intro-cell">
                      <h2 className="heading-m cc-research">
                        Natively<span className="u-text-sec"> Intelligent</span>
                      </h2>
                      <div className="research-intro-divider" />
                      <div>Built-in intelligence that handles unwanted calls and admin.</div>
                    </div>
                    <div className="research-intro-cell cc-last">
                      <h2 className="heading-m cc-research">
                        Always<span className="u-text-sec"> Connected</span>
                      </h2>
                      <div className="research-intro-divider" />
                      <div>Uninterrupted coverage from joint cellular and satellite network.</div>
                    </div>
                  </div>
                </div>
              </div>
            </header>
            <section className="section">
              <div className="page-padding">
                <div className="container">
                  <div className="section-header cc-research">
                    <div className="eyebrow-pill">
                      <div className="eyebrow-pill-inner">
                        <div>Our Future is Enlightened</div>
                      </div>
                      <div className="eyebrow-pill-bg u-rainbow u-blur-perf" />
                    </div>
                    <h2 className="section-heading">Our future is intelligent</h2>
                    <p className="subheading">
                      Here’s what we’re building to create the world’s most connected spiritual platform:
                    </p>
                  </div>
                  <div className="features-grid">
                    <div
                      id="w-node-_69f6d9e5-a5c9-8095-7cf7-7f0e9634648f-24e32e33"
                      className="features-card cc-green cc-overflow"
                    >
                      <div className="features-visual cc-assistent">
                        <img
                          src={imgk41}
                          loading="lazy"
                          width="282"
                          height="215"
                          alt=""
                          className="u-auto-img"
                        />
                      </div>
                      <div className="features-card-content cc-research">
                        <h3 className="heading-m u-mb-m">Personal Guru AI</h3>
                        <p className="subheading cc-features">
                          Ask questions and receive guidance from the teachings of spiritual masters.
                        </p>
                      </div>
                    </div>
                    <div
                      id="w-node-e6951833-d713-8a8f-aaa8-1f91520097f5-24e32e33"
                      className="features-card cc-blue cc-overflow"
                    >
                      <div className="features-visual cc-global-numbers">
                        <img
                          src={imgk42}
                          loading="lazy"
                          width="280"
                          height="211.5"
                          alt=""
                          className="u-auto-img"
                        />
                      </div>
                      <div className="features-card-content cc-wide cc-research">
                        <h3 className="heading-m u-mb-m">Global Connection</h3>
                        <p className="subheading cc-features">
                          Engage with teachings and communities across traditions with a single platform.
                        </p>
                      </div>
                    </div>
                    <div
                      id="w-node-_5e6833de-9ed4-3b30-cf17-49757c7a399d-24e32e33"
                      className="features-card cc-purple cc-overflow"
                    >
                      <div className="features-visual cc-security">
                        <img
                          src={imgk43}
                          loading="lazy"
                          width="289"
                          height="227"
                          alt=""
                          className="u-auto-img"
                        />
                      </div>
                      <div className="features-card-content cc-research">
                        <h3 className="heading-m u-mb-m">Karma Count </h3>
                        <p className="subheading cc-features">
                          A platform to contribute to global spiritual causes, tracking your impact.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="section">
              <div className="page-padding">
                <div className="container">
                  <div className="research-join-wrap">
                    <div id="w-node-_5c3689c3-0a5e-8aab-85ab-ed6cf790ecfd-24e32e33" className="research-join-content">
                      <div className="eyebrow-pill">
                        <div className="eyebrow-pill-inner">
                          <div>Join Popcorn</div>
                        </div>
                        <div className="eyebrow-pill-bg u-rainbow u-blur-perf" />
                      </div>
                      <h2 className="section-heading">Explore tomorrow. Join Popcorn.</h2>
                      <ul  className="steps-list cc-research w-list-unstyled">
                        <li className="list-item">
                          <div className="list-item-icon">
                            <div className="svg-embed w-embed">
                              <svg
                                width="24"
                                height="25"
                                viewBox="0 0 24 25"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M12 0.805664C5.373 0.805664 0 6.17866 0 12.8057C0 19.4327 5.373 24.8057 12 24.8057C18.627 24.8057 24 19.4327 24 12.8057C23.981 6.18666 18.619 0.824664 12 0.805664ZM19.207 8.51266L10.207 17.5127C10.012 17.7077 9.756 17.8057 9.5 17.8057C9.244 17.8057 8.988 17.7077 8.793 17.5127L4.793 13.5127C4.402 13.1217 4.402 12.4897 4.793 12.0987C5.184 11.7077 5.816 11.7077 6.207 12.0987L9.5 15.3917L17.793 7.09866C18.184 6.70766 18.816 6.70766 19.207 7.09866C19.598 7.48966 19.598 8.12166 19.207 8.51266Z"
                                  fill="#212121"
                                />
                              </svg>
                            </div>
                          </div>
                          <div>Global coverage, always</div>
                        </li>
                        <li className="list-item">
                          <div className="list-item-icon">
                            <div className="svg-embed w-embed">
                              <svg
                                width="24"
                                height="25"
                                viewBox="0 0 24 25"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M12 0.805664C5.373 0.805664 0 6.17866 0 12.8057C0 19.4327 5.373 24.8057 12 24.8057C18.627 24.8057 24 19.4327 24 12.8057C23.981 6.18666 18.619 0.824664 12 0.805664ZM19.207 8.51266L10.207 17.5127C10.012 17.7077 9.756 17.8057 9.5 17.8057C9.244 17.8057 8.988 17.7077 8.793 17.5127L4.793 13.5127C4.402 13.1217 4.402 12.4897 4.793 12.0987C5.184 11.7077 5.816 11.7077 6.207 12.0987L9.5 15.3917L17.793 7.09866C18.184 6.70766 18.816 6.70766 19.207 7.09866C19.598 7.48966 19.598 8.12166 19.207 8.51266Z"
                                  fill="#212121"
                                />
                              </svg>
                            </div>
                          </div>
                          <div>Personal support channels</div>
                        </li>
                        <li className="list-item">
                          <div className="list-item-icon">
                            <div className="svg-embed w-embed">
                              <svg
                                width="24"
                                height="25"
                                viewBox="0 0 24 25"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M12 0.805664C5.373 0.805664 0 6.17866 0 12.8057C0 19.4327 5.373 24.8057 12 24.8057C18.627 24.8057 24 19.4327 24 12.8057C23.981 6.18666 18.619 0.824664 12 0.805664ZM19.207 8.51266L10.207 17.5127C10.012 17.7077 9.756 17.8057 9.5 17.8057C9.244 17.8057 8.988 17.7077 8.793 17.5127L4.793 13.5127C4.402 13.1217 4.402 12.4897 4.793 12.0987C5.184 11.7077 5.816 11.7077 6.207 12.0987L9.5 15.3917L17.793 7.09866C18.184 6.70766 18.816 6.70766 19.207 7.09866C19.598 7.48966 19.598 8.12166 19.207 8.51266Z"
                                  fill="#212121"
                                />
                              </svg>
                            </div>
                          </div>
                          <div>Intelligent feature suite</div>
                        </li>
                      </ul>
                      <div className="form-wrap cc-full-width w-form">
                        <form
                          id="signup-form"
                          name="wf-form-Signup-Form-Research-Footer"
                          data-name="Signup Form Research Footer"
                          method="get"
                          data-wf-page-id="6728b13d3a68324f24e32e33"
                          data-wf-element-id="caf2c832-23c6-51a2-fec2-4b82481ca0ab"
                        >
                          <div className="input-wrap">
                            <input
                              className="input cc-cta-banner w-input"
                              maxLength="256"
                              name="Email"
                              data-name="Email"
                              placeholder="Enter your e-mail"
                              type="email"
                              id="email"
                              required=""
                            />
                            <div className="input-bg u-rainbow u-blur-perf" />
                            <input type="submit" data-wait="Sign up" className="form-submit w-button" value="Sign up" />
                          </div>
                        </form>
                        <div className="form-success w-form-done">
                          <div>Thank you! Please continue by filling out our Typeform.</div>
                        </div>
                        <div className="u-hidden w-form-fail">
                          <div>Oops! Something went wrong while submitting the form.</div>
                        </div>
                      </div>
                    </div>
                    <div id="w-node-_0b8d130b-6d0c-8266-cb88-3b4744645450-24e32e33" className="research-join-image">
                      <img
                        src={k4Img11}
                        loading="lazy"
                        width="316.5"
                        height="645.5"
                        alt=""
                        srcSet={`
                          ${k4Img11} 500w,
                          ${k4Img11} 633w
                        `}
                        sizes="(max-width: 479px) 100vw, (max-width: 767px) 318.82928466796875px, (max-width: 991px) 42vw, 415.8623046875px"
                        className="research-join-phone"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <header className="section cc-research-dev">
              <div className="page-padding">
                <div className="container">
                  <div className="home-hero-header cc-research-dev">
                    <img src={k4m2aCommentsDark} loading="lazy" alt="" className="powered-by-badge" />
                    <h2 className="section-heading">Powered by K4M2A</h2>
                    <p className="subheading">
                      Empower your spiritual content creation with our platform to reach and inspire a global audience.
                    </p>
                    <a href="#" target="_blank" className="cta cc-mt w-inline-block">
                      <div className="cta-inner cc-dark">
                        <div>Request Developer Access</div>
                      </div>
                    </a>
                  </div>
                  <div className="research-intro-wrap c-dev">
                    <div className="research-intro-cell cc-dev">
                      <div className="icon-wrap cc-research-dev">
                        <div className="icon-inner cc-dark">
                          <img
                            src={k4m2aWorldPin}
                            loading="lazy"
                            width="32"
                            height="32"
                            alt=""
                            className="icon-img"
                          />
                        </div>
                        <div className="icon-bg u-rainbow u-blur-perf cc-dark" />
                      </div>
                      <div>
                        <h2 className="heading-m cc-research">Global Audience</h2>
                        <div className="research-intro-divider" />
                        <div>
                          Expand your reach across the world with seamless access to spiritual seekers and communities.
                        </div>
                      </div>
                    </div>
                    <div className="research-intro-cell cc-dev">
                      <div className="icon-wrap cc-research-dev">
                        <div className="icon-inner cc-dark">
                          <img
                             src={k4m2aCommentsDark}
                            loading="lazy"
                            width="32"
                            height="32"
                            alt=""
                            className="icon-img"
                          />
                        </div>
                        <div className="icon-bg u-rainbow u-blur-perf cc-dark" />
                      </div>
                      <div>
                        <h2 className="heading-m cc-research">Creator Tools Suite</h2>
                        <div className="research-intro-divider" />
                        <div>
                          Easily create, share, and engage with personalized spiritual content that resonates with your
                          audience.
                        </div>
                      </div>
                    </div>
                    <div className="research-intro-cell cc-last cc-dev">
                      <div className="icon-wrap cc-research-dev">
                        <div className="icon-inner cc-dark">
                          <img
                          src={k4m2aCodeEditor}
                            loading="lazy"
                            width="32"
                            height="32"
                            alt=""
                            className="icon-img"
                          />
                        </div>
                        <div className="icon-bg u-rainbow u-blur-perf cc-dark" />
                      </div>
                      <div>
                        <h2 className="heading-m cc-research">No Algorithm Bias</h2>
                        <div className="research-intro-divider" />
                        <div>Your spiritual content stands out, free from competition with mainstream material.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </header>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

export default Research;

