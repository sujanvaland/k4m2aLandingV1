import React, { useEffect } from "react";
import "./styles/custom.css"
import "./styles/styles.css"
import EmailForm from "./ui/EmailForm";

function Manifesto() {
  useEffect(() => {
    const nav = document.querySelector(".nav");
    const mobileMenuBtn = document.querySelector(".nav-mobile-btn");

    let isOpen = false; // State variable for tracking menu open/close

    const handleMenuToggle = () => {
      isOpen = !isOpen; // Toggle state
      if (isOpen) {
        nav.classList.add("open");
        document.body.style.overflow = "hidden";
      } else {
        nav.classList.remove("open");
        document.body.style.overflow = "auto";
      }
    };

    mobileMenuBtn.addEventListener("click", handleMenuToggle);

    // JavaScript to handle navLinks delay
    const navLinks = document.querySelectorAll(".mobile-menu-fade");
    let navDelay = 0;

    navLinks.forEach((link) => {
      navDelay += 0.05;
      link.style.setProperty("--delay", `${navDelay}s`);
    });

    // Cleanup event listener on component unmount
    return () => {
      mobileMenuBtn.removeEventListener("click", handleMenuToggle);
    };
  }, []); // Runs once when component mounts

  return (
    <div className="page-wrapper">
      <main className="main cc-home">
        <div
          data-w-id="077155df-02cf-ce52-d236-39089a93392f"
          className="manifesto-hero-trigger"
        />
        <header className="hero cc-manifesto">
          <div className="page-padding">
            <div className="frontcontainer">
              <div className="manifesto-header">
                <div className="eyebrow-pill">
                  <div className="eyebrow-pill-inner">
                    <div>Our promise</div>
                  </div>
                  <div className="eyebrow-pill-bg u-rainbow u-blur-perf" />
                </div>
                <h1 className="home-hero-heading">
                  Better future <span>for the humanity</span>
                </h1>
                <p className="subheading">
                  Our mission is to protect humanity from extinction by ensuring AI serves us, preventing nuclear world war, and addressing global warming.
                </p>
              </div>
            </div>
          </div>
          <div className="manifesto-hero-img-wrap">
            <div className="manifesto-hero-phone">
              <img
                src="images/img_manifeasto.png"
                loading="eager"
                width="800"
                alt=""
                className="u-auto-img"
              />
            </div>
            <div className="hero-cloud-1">
              <img
                src="images/k4m2a-cloud.webp"
                loading="eager"
                width="2984"
                height="936"
                alt=""
                srcSet="
                            images/k4m2a-cloud-500.webp   500w,
                            images/k4m2a-cloud-800.webp   800w,
                            images/k4m2a-cloud-1080.webp 1080w,
                            images/k4m2a-cloud-1600.webp 1600w,
                            images/k4m2a-cloud-2000.webp 2000w,
                            images/k4m2a-cloud-2600.webp 2600w,
                            images/k4m2a-cloud.webp        2984w
                        "
                sizes="100vw"
                className="cloud-img cc-1"
              />
            </div>
            <div className="hero-cloud-2">
              <img
                src="images/k4m2a-cloud.webp"
                loading="eager"
                width="2984"
                height="936"
                alt=""
                srcSet="
                            images/k4m2a-cloud-500.webp   500w,
                            images/k4m2a-cloud-800.webp   800w,
                            images/k4m2a-cloud-1080.webp 1080w,
                            images/k4m2a-cloud-1600.webp 1600w,
                            images/k4m2a-cloud-2000.webp 2000w,
                            images/k4m2a-cloud-2600.webp 2600w,
                            images/k4m2a-cloud.webp        2984w
                        "
                sizes="100vw"
                className="cloud-img cc-2"
              />
            </div>
          </div>
        </header>
        <section className="section cc-manifesto-intro">
          <div className="page-padding">
            <div className="frontcontainer frontcontainer--small cc-manifesto">
              <h2 className="section-heading cc-manifesto">
                It&apos;s 2025, and it seems that we as humans might not survive to see the next 100 years.
              </h2>
              <p className="manifesto-paragraph">
                When you step out your front door, you don’t think twice about
                whether the essentials of life will work. <br />
                <br />
                The water flows from your taps. The lights turn on. The shelves
                are stocked with food. Life feels stable, dependable. But
                beneath this illusion of stability lies a harsh truth: we are
                standing on the edge of collapse. <br />
                <br />
                The systems we rely on, our food, energy, and environment are
                under enormous pressure. Climate change is speeding up.
                Resources are running out. Inequality is growing across the
                globe. <br />
                <br />
                For decades, we’ve chosen convenience over sustainability,
                profit over purpose, and competition over collaboration. We’ve
                created a world that feels built for today but is falling apart
                for tomorrow.
                <br />
                <br />
                And now, as 2025 approaches, the cracks are everywhere. Floods
                and fires are destroying entire communities. Wars over water,
                energy, faiths and beliefs are getting worse. Hunger, sickness,
                and displacement are spreading fast.
                <br />
                <br />
                The question we must ask is simple: What kind of future do we
                want?
                <br />
                Will we let everything crumble, or will we work together to
                create a world where humanity can thrive?
                <br />
                The choice is ours—but time is running out.
              </p>
            </div>
          </div>
        </section>
        <section className="section cc-portal">
          <div className="page-padding">
            <div className="frontcontainer frontcontainer--small cc-manifesto">
              <div className="section-header cc-manifesto-portal">
                <img
                  src="images/k4m2a-portal.webp"
                  loading="lazy"
                  width="333"
                  height="459"
                  alt=""
                  srcSet="
                            images/k4m2a-portal-500.webp 500w,
                            images/k4m2a-portal.webp       666w
                            "
                  sizes="(max-width: 479px) 70vw, (max-width: 767px) 43vw, 333px"
                  className="manifesto-portal"
                />
                <div className="manifesto-portal-heading">
                  That&#x27;s why we built
                </div>
                <div className="manifesto-portal-logo w-embed">
                  <img src="images/logo.png" alt="logo" />
                </div>
              </div>
              <h2 className="section-heading cc-small">
                Imagine a world where enlightenment spreads like sunlight reaching everyone, a world where knowledge flows without limits, and spiritual connection is as abundant as air.
              </h2>
              <p className="manifesto-paragraph">
                No barriers of language, culture, or philosophy. No isolation or division. Just a seamless, global community united in the pursuit of enlightenment. This isn’t just a dream; it’s the future we are building at K4M2A.
                <br />
                ‍<br />
                We’ve reimagined what it means to connect spiritually and created a platform designed to remove centuries of barriers to global awakening.
                <br />
                <br />
                As we move into a future defined by deeper connections and spiritual awakening, we’re creating a space that supports our mission to enlighten humanity, because technology should uplift human potential, not confine it.

                <br />
                <br />
                K4M2A places this future in your hands, the question is: Will you take the next step?
                <br />

              </p>
            </div>
          </div>
        </section>
        <section className="section cc-manifesto-join">
          <div className="page-padding">
            <div className="frontcontainer">
              <div className="home-hero-header">
                <h2 className="section-heading cc-large">
                  I’m interested.
                  <br />
                  Let me in.
                </h2>
                <EmailForm />
              </div>
            </div>
          </div>
          <div
            data-w-id="9928c62b-7f96-21e7-abbc-88d91a93159c"
            className="manifesto-hero-img-wrap"
          >
            <div className="home-hero-img-wrap cc-manifesto">
              <div className="home-hero-mockup cc-1 homehero">
                <img
                  src="images/k4m2a-search.webp"
                  loading="eager"
                  width="316.5"
                  height="645.5"
                  alt=""
                  srcSet="
                            images/k4m2a-search.webp 500w,
                            images/k4m2a-search.webp       633w
                            "
                  sizes="(max-width: 767px) 55vw, (max-width: 991px) 44vw, 43vw"
                  className="u-auto-img"
                />
              </div>
              <div className="home-hero-mockup cc-2 homehero">
                <img
                  src="images/post-detail.webp"
                  loading="eager"
                  width="316.5"
                  height="645.5"
                  alt=""
                  srcSet="
                            images/post-detail.webp 500w,
                            images/post-detail.webp      634w
                            "
                  sizes="(max-width: 767px) 50vw, 39vw"
                  className="u-auto-img"
                />
              </div>
            </div>
            <div className="hero-cloud-1">
              <img
                src="images/k4m2a-cloud.webp"
                loading="eager"
                width="2984"
                height="936"
                alt=""
                srcSet="
                            images/k4m2a-cloud-500.webp   500w,
                            images/k4m2a-cloud-800.webp   800w,
                            images/k4m2a-cloud-1080.webp 1080w,
                            images/k4m2a-cloud-1600.webp 1600w,
                            images/k4m2a-cloud-2000.webp 2000w,
                            images/k4m2a-cloud-2600.webp 2600w,
                            images/k4m2a-cloud.webp        2984w
                        "
                sizes="100vw"
                className="cloud-img"
              />
            </div>
            <div className="hero-cloud-2">
              <img
                src="images/k4m2a-cloud.webp"
                loading="eager"
                width="2984"
                height="936"
                alt=""
                srcSet="
                            images/k4m2a-cloud-500.webp   500w,
                            images/k4m2a-cloud-800.webp   800w,
                            images/k4m2a-cloud-1080.webp 1080w,
                            images/k4m2a-cloud-1600.webp 1600w,
                            images/k4m2a-cloud-2000.webp 2000w,
                            images/k4m2a-cloud-2600.webp 2600w,
                            images/k4m2a-cloud.webp        2984w
                        "
                sizes="100vw"
                className="cloud-img"
              />
            </div>
            <div className="cloud-overlay">
              <div className="cloud-item cc-1">
                <img
                  src="images/k4m2a_cloud.webp"
                  loading="lazy"
                  width="270"
                  sizes="(max-width: 479px) 34vw, (max-width: 767px) 28vw, (max-width: 991px) 27vw, 266px"
                  alt=""
                  srcSet="
                                images/k4m2a_cloud-500.webp 500w,
                                images/k4m2a_cloud.webp       540w
                            "
                  className="u-auto-img"
                />
              </div>
              <div className="cloud-item cc-2">
                <img
                  src="images/k4m2a_cloud.webp"
                  loading="lazy"
                  width="270"
                  sizes="(max-width: 479px) 34vw, (max-width: 767px) 28vw, (max-width: 991px) 27vw, 266px"
                  alt=""
                  srcSet="
                                images/k4m2a_cloud-500.webp 500w,
                                images/k4m2a_cloud.webp       540w
                            "
                  className="u-auto-img"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Manifesto;
