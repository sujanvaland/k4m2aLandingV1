import { Link } from "react-router-dom";
import EmailForm from "../components/ui/EmailForm";
import EyebrowPill from "../components/ui/EyebrowPill";
import "./styles/custom.css"
import "./styles/styles.css"

export default function Home() {
  return (
    <>
      <header className="hero">
        <div className="page-padding">
          <div className="container">
            <div className="home-hero-header">
              <EyebrowPill text="Heyo! We launched our Alpha!" link="#" />
              <h1 className="home-hero-heading">
                World's First Spiritual Network
              </h1>
              <div className="home-hero-subheading">
                <p className="subheading">
                  Connect, learn, and share your experiences with spiritual
                  seekers from around the world.
                </p>
              </div>

              <EmailForm />
            </div>

            <div className="home-hero-img-wrap homehero">
              <img
                src="/images/colorback.webp"
                alt="Decorative background"
                className="home-hero-portal"
              />
              <div className="home-hero-mockup cc-1">
                <img
                  src="/images/k4m2a-app-1.webp"
                  alt="App preview 1"
                  className="u-auto-img"
                />
              </div>
              <div className="home-hero-mockup cc-2">
                <img
                  src="/images/k4m2a-app-2.webp"
                  alt="App preview 2"
                  className="u-auto-img"
                />
              </div>
            </div>

            <div className="hero-highlights-wrap">
              <div className="hero-highlight-cell">
                <div className="icon-wrap">
                  <div className="icon-inner">
                    <img
                      src="/images/hicon_3.png"
                      alt="Icon"
                      className="icon-img"
                    />
                  </div>
                  <div className="icon-bg u-rainbow u-blur-perf"></div>
                </div>
                <h3 className="heading-m">Judgment-free space to express</h3>
              </div>
              <div className="hero-highlight-cell">
                <div className="icon-wrap">
                  <div className="icon-inner">
                    <img
                      src="/images/hicon_2.png"
                      alt="Icon"
                      className="icon-img"
                    />
                  </div>
                  <div className="icon-bg u-rainbow u-blur-perf"></div>
                </div>
                <h3 className="heading-m">Dwell on the topics that resonate</h3>
              </div>
              <div className="hero-highlight-cell">
                <div className="icon-wrap">
                  <div className="icon-inner">
                    <img
                      src="/images/hicon_1.png"
                      alt="Icon"
                      className="icon-img"
                    />
                  </div>
                  <div className="icon-bg u-rainbow u-blur-perf"></div>
                </div>
                <h3 className="heading-m">Escape material algorithms</h3>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="section">
        <div className="page-padding">
          <div className="container">
            <div className="section-header">
              <h2 className="section-heading">A Space for Spiritual Exploration</h2>
              <p className="subheading maxw530">
                Explore diverse spiritual practices and insights to deepen your
                understanding.
              </p>
            </div>
            <div className="features-grid">
              <div
                id="w-node-_69f6d9e5-a5c9-8095-7cf7-7f0e9634648f-1ff1a765"
                className="features-card cc-green"
              >
                <div className="features-visual">
                  <div>
                    <img src="images/image1.svg" className="desktop" />
                    <img src="images/image1.svg" className="mobile" />
                  </div>
                </div>
                <div className="features-card-content">
                  <h3 className="heading-m u-mb-m">Connect</h3>
                  <p className="subheading cc-features maxw200">
                    Spiritual seekers from around the globe
                  </p>
                </div>
              </div>
              <div
                id="w-node-e6951833-d713-8a8f-aaa8-1f91520097f5-1ff1a765"
                className="features-card cc-blue"
              >
                <div className="features-visual">
                  <div>
                    <img src="images/image2.svg" className="desktop" />
                    <img src="images/image2.svg" className="mobile" />
                  </div>
                </div>
                <div className="features-card-content">
                  <h3 className="heading-m u-mb-m">Discover</h3>
                  <p className="subheading cc-features maxw220">
                    Every spiritual topics from ancient to modern.
                  </p>
                </div>
              </div>
              <div
                id="w-node-_5e6833de-9ed4-3b30-cf17-49757c7a399d-1ff1a765"
                className="features-card cc-purple"
              >
                <div className="features-visual">
                  <div>
                    <img src="images/image3.svg" className="desktop" />
                    <img src="images/image3.svg" className="mobile" />
                  </div>
                </div>
                <div className="features-card-content">
                  <h3 className="heading-m u-mb-m">Experience</h3>
                  <p className="subheading cc-features maxw220">
                    Energy of awakening stories that inspire.
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
            <div className="section-header cc-coverage">
              <div className="eyebrow-pill">
                <div className="eyebrow-pill-inner">
                  <div>Wisdom Without Borders</div>
                </div>
                <div className="eyebrow-pill-bg u-rainbow u-blur-perf"></div>
              </div>
              <h2 className="section-heading">
                Who’s on the platform? Glad you asked.
              </h2>
              <p className="subheading maxw530">
                Experience exclusive content from spiritual leaders and teachers
                from across 150 countries.
              </p>
            </div>
            <div className="coverage">
              <div className="coverage-countries-wrap visible scroll-observe">
                <div className="gurubox">
                  <div className="country-tag-wrap cc-1">
                    <div className="country-tag cc-1">
                      <div className="country-icon w-embed">
                        <img src="images/img_osho.png" />
                      </div>
                      <div>Osho</div>
                    </div>
                  </div>
                  <div className="country-tag-wrap cc-2">
                    <div className="country-tag cc-2">
                      <div className="country-icon w-embed">
                        <img src="images/img_sadguru.png" />
                      </div>
                      <div>Sadhguru</div>
                    </div>
                  </div>
                  <div className="country-tag-wrap cc-4">
                    <div className="country-tag cc-4">
                      <div className="country-icon w-embed">
                        <img src="images/img_sharon.png" />
                      </div>
                      <div>Sharon</div>
                    </div>
                  </div>
                  <div className="country-tag-wrap cc-5">
                    <div className="country-tag cc-5">
                      <div className="country-icon w-embed">
                        <img src="images/img_anandmayi.png" />
                      </div>
                      <div>Anandmayi</div>
                    </div>
                  </div>

                  <div className="country-tag-wrap cc-7">
                    <div className="country-tag cc-6">
                      <div className="country-icon w-embed">
                        <img src="images/img_alan.png" />
                      </div>
                      <div>Alan</div>
                    </div>
                  </div>
                </div>
                <div className="gurubox">
                  <div className="country-tag-wrap cc-10">
                    <div className="country-tag cc-10">
                      <div className="country-icon w-embed">
                        <img src="images/img_mooji.png" />
                      </div>
                      <div>Mooji</div>
                    </div>
                  </div>
                  <div className="country-tag-wrap cc-8">
                    <div className="country-tag cc-7">
                      <div className="country-icon w-embed">
                        <img src="images/img_jk.png" />
                      </div>
                      <div>JK</div>
                    </div>
                  </div>
                  <div className="country-tag-wrap cc-9">
                    <div className="country-tag cc-8">
                      <div className="country-icon w-embed">
                        <img src="images/img_omswami.png" />
                      </div>
                      <div>Om Swami</div>
                    </div>
                  </div>
                  <div className="country-tag-wrap cc-9">
                    <div className="country-tag cc-8">
                      <div className="country-icon w-embed">
                        <img src="images/img_sistershivani.png" />
                      </div>
                      <div>Sister Shivani</div>
                    </div>
                  </div>
                </div>
                <div className="gurubox">
                  <div className="country-tag-wrap cc-6">
                    <div className="country-tag cc-9">
                      <div>
                        <a >150+ More</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section cc-cta-banner">
        <div className="page-padding">
          <div className="container">
            <div className="cta-banner">
              <div
                id="w-node-_88caa5af-3ca5-4396-86d8-64347c57d1b0-1ff1a765"
                className="cta-banner-left"
              >
                <div className="cta-banner-left-content">
                  <h3 className="heading-l fnt35">
                    Claim your spiritual profile today.
                  </h3>
                  <ul role="list" className="steps-list w-list-unstyled">
                    <li className="steps-list-item">
                      <div className="steps-list-step">1</div>
                      <div>Profile that reflects your spiritual journey</div>
                    </li>
                    <li className="steps-list-item">
                      <div className="steps-list-step">2</div>
                      <div>
                        Contribute to meaningful global spiritual causes
                      </div>
                    </li>
                    <li className="steps-list-item">
                      <div className="steps-list-step">3</div>
                      <div>Connect with like-minded spiritual seekers</div>
                    </li>
                  </ul>
                  <div className="timed-tag u-rainbow">
                    <div>Yes, we’ve aligned it perfectly.</div>
                    <div className="svg-embed w-embed">
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.24634 0.730242C3.42974 0.778366 0.374344 3.91179 0.422468 7.7284C0.470591 11.545 3.60402 14.6004 7.42063 14.5523C11.2372 14.5042 14.2926 11.3707 14.2445 7.55412C14.1855 3.74226 11.0585 0.693119 7.24634 0.730242ZM11.453 5.11651L6.33504 10.3651C6.22416 10.4788 6.07743 10.5371 5.93 10.539C5.78256 10.5409 5.63442 10.4863 5.5207 10.3754L3.18798 8.10077C2.95995 7.87842 2.95536 7.51444 3.17771 7.28642C3.40005 7.0584 3.76403 7.05381 3.99206 7.27615L5.91247 9.14874L10.6283 4.31243C10.8507 4.0844 11.2147 4.07982 11.4427 4.30216C11.6707 4.5245 11.6753 4.88848 11.453 5.11651Z"
                          fill="#212121"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div
                id="w-node-_12a0934f-fc2f-1baa-1c5d-75377f54da26-1ff1a765"
                className="cta-banner-right"
              >
                <div>
                  <h3 className="heading-l fnt35">One Earth, One Goal</h3>
                  <div className="cta-banner-price">Awaken</div>
                </div>
                <div className="form-wrap cc-cta-banner flexcolumn">
                  <Link to="/manifesto" className="btn btnread">
                    Read Our Manifesto
                  </Link>
                  <span className="subtitlenotes">
                    What will happen to earth between 2025 and 2035?
                  </span>
                </div>
                <img
                  src="images/k4m2a-app-3.webp"
                  loading="lazy"
                  width="288.5"
                  height="588.5"
                  alt=""
                  srcSet="
                                        images/k4m2a-app-3.webp,
                                        images/k4m2a-app-3.webp
                                        "
                  sizes="(max-width: 767px) 100vw, (max-width: 991px) 40vw, 42vw"
                  className="cta-banner-mockup"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

     
    </>
  );
}
