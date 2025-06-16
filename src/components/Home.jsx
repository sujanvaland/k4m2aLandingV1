import { Link } from 'react-router-dom';
import EmailForm from './ui/EmailForm';
import EyebrowPill from './ui/EyebrowPill';

export default function Home() {
  return (
    <>
      <header className="hero">
        <div className="page-padding">
          <div className="frontcontainer">
            <div className="home-hero-header">
              <EyebrowPill text="Heyo! Only for Humans!" link="#" />
              <h1 className="home-hero-heading">
                World&apos;s First Spiritual Network
              </h1>
              <div className="home-hero-subheading">
                <p className="subheading">
                  with a mission to enlighten humanity
                </p>
              </div>

              <EmailForm />
            </div>

            <div className="home-hero-img-wrap homehero">
              <picture>
                <source srcSet="/images/colorback.webp" type="image/webp" />
                <img
                  src="/images/colorback.webp" // Fallback image in JPEG/PNG
                  alt="K4M2A Portal"
                  className="home-hero-portal"
                />
              </picture>
              <div className="home-hero-mockup cc-1">
                {/* <img
                  src="/images/k4m2a-app-1.webp"
                  alt="App preview 1"
                  className="u-auto-img" loading="lazy"
                /> */}

                <picture>
                  <source srcSet="/images/k4m2a-app-1.webp" type="image/webp" />
                  <img
                    src="/images/k4m2a-app-1.webp" // Fallback image in JPEG/PNG
                    alt="K4M2A Portal"
                    className="u-auto-img"
                    loading="lazy"
                  />
                </picture>
              </div>
              <div className="home-hero-mockup cc-2">
                {/* <img
                  src="/images/k4m2a-app-2.webp"
                  alt="App preview 2"
                  className="u-auto-img" loading="lazy"
                /> */}

                <picture>
                  <source srcSet="/images/k4m2a-app-2.webp" type="image/webp" />
                  <img
                    src="/images/k4m2a-app-2.webp" // Fallback image in JPEG/PNG
                    alt="K4M2A Portal"
                    className="u-auto-img"
                    loading="lazy"
                  />
                </picture>

              </div>
            </div>

            <div className="hero-highlights-wrap">
              <div className="hero-highlight-cell">
                <div className="icon-wrap">
                  <div className="icon-inner">
                    {/* <img
                      src="/images/hicon_3.png"
                      alt="Icon"
                      className="icon-img" loading="lazy"
                    /> */}
                    <picture>
                      <source srcSet="/images/hicon_3.png" type="image/png" />
                      <img
                        src="/images/hicon_3.png" // Fallback image in JPEG/PNG
                        alt="K4M2A Portal"
                        className="icon-img"
                        loading="lazy"
                      />
                    </picture>
                  </div>
                  <div className="icon-bg u-rainbow u-blur-perf" />
                </div>
                <h3 className="heading-m">Judgment-free space</h3>
              </div>
              <div className="hero-highlight-cell">
                <div className="icon-wrap">
                  <div className="icon-inner">
                    {/* <img
                      src="/images/hicon_2.png"
                      alt="Icon"
                      className="icon-img" loading="lazy"
                    /> */}
                    <picture>
                      <source srcSet="/images/hicon_2.png" type="image/png" />
                      <img
                        src="/images/hicon_2.png"
                        alt="Icon"
                        className="icon-img"
                        loading="lazy"
                      />
                    </picture>
                  </div>
                  <div className="icon-bg u-rainbow u-blur-perf" />
                </div>
                <h3 className="heading-m">Connect with seekers</h3>
              </div>
              <div className="hero-highlight-cell">
                <div className="icon-wrap">
                  <div className="icon-inner">
                    {/* <img
                      src="/images/hicon_1.png"
                      alt="Icon"
                      className="icon-img" loading="lazy"
                    /> */}
                    <picture>
                      <source srcSet="/images/hicon_1.png" type="image/png" />
                      <img
                        src="/images/hicon_1.png"
                        alt="Icon"
                        className="icon-img"
                        loading="lazy"
                      />
                    </picture>
                  </div>
                  <div className="icon-bg u-rainbow u-blur-perf" />
                </div>
                <h3 className="heading-m">Create spiritual profile</h3>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="section homepage">
        <div className="page-padding">
          <div className="frontcontainer">
            <div className="section-header">
              <h2 className="section-heading">Why Network for Spirituality?</h2>
              <p className="subheading maxw530">
                Because connecting for conversation is the basis of humanness
              </p>
            </div>
            <div className="features-grid">
              <div
                id="w-node-_69f6d9e5-a5c9-8095-7cf7-7f0e9634648f-1ff1a765"
                className="features-card cc-green"
              >
                <div className="features-visual">
                  <div className="sp_imagebox">
                    <picture>
                      <source srcSet="/images/img_questions.jpg" media="(max-width: 767px)" />
                      <source srcSet="/images/img_questions.jpg" media="(min-width: 768px)" />
                      <img
                        src="/images/img_questions.jpg"
                        alt=""
                        className="responsive-image"
                        loading="lazy"
                      />
                    </picture>
                    <h4>Share</h4>
                  </div>
                </div>
                <div className="features-card-content">
                  <h3 className="heading-m u-mb-m"> Experiences</h3>
                  <p className="subheading cc-features maxw200">
                    To help others grow through your learnings.
                  </p>
                </div>
              </div>
              <div
                id="w-node-e6951833-d713-8a8f-aaa8-1f91520097f5-1ff1a765"
                className="features-card cc-blue"
              >
                <div className="features-visual">
                  <div className="sp_imagebox">
                    <picture>
                      <source srcSet="/images/img_Philosophies.jpg" media="(max-width: 767px)" />
                      <source srcSet="/images/img_Philosophies.jpg" media="(min-width: 768px)" />
                      <img
                        src="/images/img_Philosophies.jpg"
                        alt=""
                        className="responsive-image"
                        loading="lazy"
                      />
                    </picture>
                    <h4>Ask</h4>
                  </div>
                </div>
                <div className="features-card-content">
                  <h3 className="heading-m u-mb-m">Questions</h3>
                  <p className="subheading cc-features maxw220">
                    You're struggling to understand.
                  </p>
                </div>
              </div>
              <div
                id="w-node-_5e6833de-9ed4-3b30-cf17-49757c7a399d-1ff1a765"
                className="features-card cc-purple"
              >
                <div className="features-visual">
                  <div className="sp_imagebox">
                    <picture>
                      <source srcSet="/images/img_gurus.jpg" media="(max-width: 767px)" />
                      <source srcSet="/images/img_gurus.jpg" media="(min-width: 768px)" />
                      <img
                        src="/images/img_gurus.jpg"
                        alt=""
                        className="responsive-image"
                        loading="lazy"
                      />
                    </picture>
                    <h4>Conduct</h4>
                  </div>
                </div>
                <div className="features-card-content">
                  <h3 className="heading-m u-mb-m">Experiments</h3>
                  <p className="subheading cc-features maxw220">
                    Publish your learnings on new ways of being.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="page-padding">
          <div className="frontcontainer">
            <div className="section-header cc-coverage">
              <div className="eyebrow-pill">
                <div className="eyebrow-pill-inner">
                  <div>Humans Often Inquire</div>
                </div>
                <div className="eyebrow-pill-bg u-rainbow u-blur-perf" />
              </div>
              <h2 className="section-heading">
                What is Spirituality?
              </h2>
              <p className="subheading maxw530">
                Spirituality for us is the study of enlightened humans to find answers to the fundamental questions of life.
              </p>
            </div>
            <div className="coverage">
              <div className="coverage-countries-wrap visible scroll-observe">
                <div className="gurubox">
                  <div className="country-tag-wrap cc-1">
                    <div className="country-tag cc-1">
                      <div className="country-icon w-embed">
                        <picture>
                          <source srcSet="images/img_osho.png" type="image/png" />
                          <img
                            src="images/img_osho.png"
                            alt=""
                            loading="lazy"
                          />
                        </picture>
                      </div>
                      <div>Osho</div>
                    </div>
                  </div>
                  <div className="country-tag-wrap cc-2">
                    <div className="country-tag cc-2">
                      <div className="country-icon w-embed">
                        <picture>
                          <source srcSet="/images/img_sadguru.png" type="image/png" />
                          <img
                            src="/images/img_sadguru.png"
                            alt=""
                            loading="lazy"
                          />
                        </picture>
                      </div>
                      <div>Sadhguru</div>
                    </div>
                  </div>
                  <div className="country-tag-wrap cc-4">
                    <div className="country-tag cc-4">
                      <div className="country-icon w-embed">
                        <picture>
                          <source srcSet="/images/img_sharon.png" type="image/png" />
                          <img
                            src="/images/img_sharon.png"
                            alt=""
                            loading="lazy"
                          />
                        </picture>
                      </div>
                      <div>Sharon</div>
                    </div>
                  </div>
                  <div className="country-tag-wrap cc-5">
                    <div className="country-tag cc-5">
                      <div className="country-icon w-embed">
                        <picture>
                          <source srcSet="/images/img_anandmayi.png" type="image/png" />
                          <img
                            src="/images/img_anandmayi.png"
                            alt=""
                            loading="lazy"
                          />
                        </picture>
                      </div>
                      <div>Anandmayi</div>
                    </div>
                  </div>

                  <div className="country-tag-wrap cc-7">
                    <div className="country-tag cc-6">
                      <div className="country-icon w-embed">
                        <picture>
                          <source srcSet="/images/img_alan.png" type="image/png" />
                          <img
                            src="/images/img_alan.png"
                            alt=""
                            loading="lazy"
                          />
                        </picture>
                      </div>
                      <div>Alan</div>
                    </div>
                  </div>
                </div>
                <div className="gurubox">
                  <div className="country-tag-wrap cc-10">
                    <div className="country-tag cc-10">
                      <div className="country-icon w-embed">
                        <picture>
                          <source srcSet="images/a_nagraj.png" type="image/png" />
                          <img
                            src="images/a_nagraj.png"
                            alt=""
                            loading="lazy"
                          />
                        </picture>
                      </div>
                      <div>A. Nagraj</div>
                    </div>
                  </div>
                  <div className="country-tag-wrap cc-8">
                    <div className="country-tag cc-7">
                      <div className="country-icon w-embed">
                        <picture>
                          <source srcSet="/images/img_jk.png" type="image/png" />
                          <img
                            src="/images/img_jk.png"
                            alt=""
                            loading="lazy"
                          />
                        </picture>
                      </div>
                      <div>JK</div>
                    </div>
                  </div>
                  <div className="country-tag-wrap cc-9">
                    <div className="country-tag cc-8">
                      <div className="country-icon w-embed">
                        <picture>
                          <source srcSet="/images/img_omswami.png" type="image/png" />
                          <img
                            src="/images/img_omswami.png"
                            alt=""
                            loading="lazy"
                          />
                        </picture>
                      </div>
                      <div>Om Swami</div>
                    </div>
                  </div>
                  <div className="country-tag-wrap cc-9">
                    <div className="country-tag cc-8">
                      <div className="country-icon w-embed">
                        <picture>
                          <source srcSet="/images/img_sistershivani.png" type="image/png" />
                          <img
                            src="/images/img_sistershivani.png"
                            alt=""
                            loading="lazy"
                          />
                        </picture>
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

      <section className="section">
        <div className="page-padding">
          <div className="frontcontainer">
            <div className="section-header">
              <h2 className="section-heading">No barriers  of language, culture, or philosophy.</h2>
            </div>
            <div className="testimonialsgrid">
              <div className="features-grid cc-reviews">
                <div className="review-box">
                  <div className="stars">
                    <picture>
                      <source srcSet="/images/img_5star.png" type="image/png" />
                      <img
                        src="/images/img_star.webp"
                        alt="Icon"
                        className="icon-img"
                        loading="lazy"
                      />
                    </picture>
                  </div>
                  <div className='titlereview'>
                    &quot;I am here because people don't judge me, allowing me to share my deep spiritual experience&quot;
                  </div>
                  <div className='namebox'>- Ethan Harper, USA</div>
                </div>

                <div className="review-box">
                  <div className="stars">  <picture>
                    <source srcSet="/images/img_5star.png" type="image/png" />
                    <img
                      src="/images/img_star.webp"
                      alt="Icon"
                      className="icon-img"
                      loading="lazy"
                    />
                  </picture></div>
                  <div className='titlereview'>
                    &quot;I don't understand meaning behind the
                    name K4M2A, but I love the mission to
                    enlighten humanity&quot;
                  </div>
                  <div className='namebox'>-Sofia Müller, Germany</div>
                </div>

                <div className="review-box">
                  <div className="stars">  <picture>
                    <source srcSet="/images/img_5star.png" type="image/png" />
                    <img
                      src="/images/img_star.webp"
                      alt="Icon"
                      className="icon-img"
                      loading="lazy"
                    />
                  </picture></div>
                  <div className='titlereview'>
                    &quot;I don't like how it looks, but I like how it feels. I love how people here are trying to build features for spiritual seekers&quot;
                  </div>
                  <div className='namebox'>- Kai Tanaka, Japan</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section cc-cta-banner paddinbottom100">
        <div className="page-padding">
          <div className="frontcontainer">
            <div className="cta-banner">
              <div
                id="w-node-_88caa5af-3ca5-4396-86d8-64347c57d1b0-1ff1a765"
                className="cta-banner-left"
              >
                <div className="cta-banner-left-content">
                  <h3 className="heading-l fnt35">
                    Your spiritual profile.
                  </h3>
                  <ul className="steps-list w-list-unstyled">
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
                    <div>Yes&apos; we&apos;ve aligned it perfectly.</div>
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
                  <h3 className="heading-l fnt35 whitetext">One Earth, One Goal</h3>
                  <div className="cta-banner-price">Awaken</div>
                </div>
                <div className="form-wrap cc-cta-banner flexcolumn">
                  <Link to="/manifesto" className="btn btnread">
                    Read Our Manifesto
                  </Link>
                  <span className="subtitlenotes">
                    What will happen to earth in next 100 years?
                  </span>
                </div>

                <picture>
                  <source
                    srcSet="images/footer_bottom.png"
                    sizes="(max-width: 479px) 79vw, (max-width: 767px) 317px, 100vw"
                    type="image/png"
                  />
                  <img
                    src="images/footer_bottom.png"
                    loading="lazy"
                    width="317.5"
                    height="180"
                    alt=""
                    className="mobile martop25"
                    sizes="(max-width: 479px) 79vw, (max-width: 767px) 317px, 100vw"
                  />
                </picture>
                <picture>
                  <source
                    srcSet="/images/k4m2a-app-3.webp"
                    sizes="(max-width: 767px) 100vw, (max-width: 991px) 40vw, 42vw"
                    type="image/webp"
                  />
                  <img
                    src="images/k4m2a-app-3.webp"
                    loading="lazy"
                    width="288.5"
                    height="588.5"
                    alt=""
                    className="cta-banner-mockup"
                    sizes="(max-width: 767px) 100vw, (max-width: 991px) 40vw, 42vw"
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
