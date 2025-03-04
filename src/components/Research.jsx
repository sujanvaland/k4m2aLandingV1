import React from 'react'
import EmailForm from './ui/EmailForm'

function Research() {
  return (
    <main className="main cc-home cc-research">
    <header className="hero cc-research">
        <div className="page-padding">
            <div className="container">
                <div className="home-hero-header cc-research">
                    <div className="eyebrow-pill">
                        <div className="eyebrow-pill-inner cc-dark"><div>Our mission</div></div>
                    </div>
                    <h1 className="home-hero-heading">Enlightened Humanity</h1>
                    <p className="subheading ">We're paving the way for humanity to embrace collective awakening.</p>
                </div>
                <div className="research-globe-wrap">
                    <div className="research-globe-inner">
                        <img
                            src="images/img_researchbanner.png"
                            loading="eager"
                            sizes="(max-width: 767px) 100vw, (max-width: 991px) 93vw, 72vw"
                            srcSet="
                                images/img_researchbanner.png   500w,
                                images/img_researchbanner.png   800w,
                                images/img_researchbanner.png 1080w,
                                images/img_researchbanner.png        1678w
                            "
                            alt=""
                            className="globe-orbit"
                        />
                         
                    </div>
                </div>
                <div className="research-intro-wrap">
                    <div className="research-intro-cell">
                        <h2 className="heading-m cc-research">Global<span className="u-text-sec">Collaboration</span></h2>
                        <div className="research-intro-divider"></div>
                        <div>Bringing together people with a shared interest in awakening.</div>
                    </div>
                    <div className="research-intro-cell">
                        <h2 className="heading-m cc-research">Natively<span className="u-text-sec"> Intelligent</span></h2>
                        <div className="research-intro-divider"></div>
                        <div>Smart features that guide your path and simplify your journey.</div>
                    </div>
                    <div className="research-intro-cell cc-last maxw300">
                        <h2 className="heading-m cc-research">Always<span className="u-text-sec"> Accessible</span></h2>
                        <div className="research-intro-divider"></div>
                        <div>Seamless access to spiritual wisdom, whenever you need them.</div>
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
                        <div className="eyebrow-pill-inner"><div>What we’re building</div></div>
                        <div className="eyebrow-pill-bg u-rainbow u-blur-perf"></div>
                    </div>
                    <h2 className="section-heading">Our Future is Enlightened</h2>
                    <p className="subheading">Here’s what we’re building to create the world’s most connected spiritual platform:</p>
                </div>
                <div className="features-grid">
                    <div id="w-node-_69f6d9e5-a5c9-8095-7cf7-7f0e9634648f-24e32e33" className="features-card cc-green cc-overflow">
                        <div className="features-visual cc-assistent">
                            <img src="images/img_space.png" loading="lazy" width="282" height="215" alt="" className="u-auto-img" />
                        </div>
                        <div className="features-card-content cc-research">
                            <h3 className="heading-m u-mb-m">Spaces</h3>
                            <p className="subheading cc-features">Experience every sacred space and spiritual center, all in one place.</p>
                        </div>
                    </div>
                    <div id="w-node-e6951833-d713-8a8f-aaa8-1f91520097f5-24e32e33" className="features-card cc-blue cc-overflow">
                        <div className="features-visual cc-global-numbers">
                            <img src="images/img_research.png" loading="lazy" width="280" height="211.5" alt="" className="u-auto-img" />
                        </div>
                        <div className="features-card-content cc-wide cc-research">
                            <h3 className="heading-m u-mb-m">Research</h3>
                            <p className="subheading cc-features">Find all the research on spirituality and interact with researchers in the world in one place.</p>
                        </div>
                    </div>
                    <div id="w-node-_5e6833de-9ed4-3b30-cf17-49757c7a399d-24e32e33" className="features-card cc-purple cc-overflow">
                        <div className="features-visual cc-global-numbers">
                            <img src="images/img_philosophy.png" loading="lazy" width="289" height="227" alt="" className="u-auto-img" />
                        </div>
                        <div className="features-card-content cc-research">
                            <h3 className="heading-m u-mb-m">Philosophies </h3>
                            <p className="subheading cc-features">Explore every spiritual philosophy from around the world, all in one place.</p>
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
                            <div className="eyebrow-pill-inner"><div>Join K4M2A</div></div>
                            <div className="eyebrow-pill-bg u-rainbow u-blur-perf"></div>
                        </div>
                        <h2 className="section-heading">Explore the Future.</h2>
                        <ul role="list" className="steps-list cc-research w-list-unstyled">
                            <li className="list-item">
                                <div className="list-item-icon">
                                    <div className="svg-embed w-embed">
                                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M12 0.805664C5.373 0.805664 0 6.17866 0 12.8057C0 19.4327 5.373 24.8057 12 24.8057C18.627 24.8057 24 19.4327 24 12.8057C23.981 6.18666 18.619 0.824664 12 0.805664ZM19.207 8.51266L10.207 17.5127C10.012 17.7077 9.756 17.8057 9.5 17.8057C9.244 17.8057 8.988 17.7077 8.793 17.5127L4.793 13.5127C4.402 13.1217 4.402 12.4897 4.793 12.0987C5.184 11.7077 5.816 11.7077 6.207 12.0987L9.5 15.3917L17.793 7.09866C18.184 6.70766 18.816 6.70766 19.207 7.09866C19.598 7.48966 19.598 8.12166 19.207 8.51266Z"
                                                fill="#212121"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div>Globally connected spiritual community</div>
                            </li>
                            <li className="list-item">
                                <div className="list-item-icon">
                                    <div className="svg-embed w-embed">
                                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M12 0.805664C5.373 0.805664 0 6.17866 0 12.8057C0 19.4327 5.373 24.8057 12 24.8057C18.627 24.8057 24 19.4327 24 12.8057C23.981 6.18666 18.619 0.824664 12 0.805664ZM19.207 8.51266L10.207 17.5127C10.012 17.7077 9.756 17.8057 9.5 17.8057C9.244 17.8057 8.988 17.7077 8.793 17.5127L4.793 13.5127C4.402 13.1217 4.402 12.4897 4.793 12.0987C5.184 11.7077 5.816 11.7077 6.207 12.0987L9.5 15.3917L17.793 7.09866C18.184 6.70766 18.816 6.70766 19.207 7.09866C19.598 7.48966 19.598 8.12166 19.207 8.51266Z"
                                                fill="#212121"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div>Dedicated support for your spiritual journey</div>
                            </li>
                            <li className="list-item">
                                <div className="list-item-icon">
                                    <div className="svg-embed w-embed">
                                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M12 0.805664C5.373 0.805664 0 6.17866 0 12.8057C0 19.4327 5.373 24.8057 12 24.8057C18.627 24.8057 24 19.4327 24 12.8057C23.981 6.18666 18.619 0.824664 12 0.805664ZM19.207 8.51266L10.207 17.5127C10.012 17.7077 9.756 17.8057 9.5 17.8057C9.244 17.8057 8.988 17.7077 8.793 17.5127L4.793 13.5127C4.402 13.1217 4.402 12.4897 4.793 12.0987C5.184 11.7077 5.816 11.7077 6.207 12.0987L9.5 15.3917L17.793 7.09866C18.184 6.70766 18.816 6.70766 19.207 7.09866C19.598 7.48966 19.598 8.12166 19.207 8.51266Z"
                                                fill="#212121"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div>Intelligent tools for personal spiritual growth</div>
                            </li>
                        </ul>
                        <EmailForm classNameNote="textleft marleft10"/>
                        
                    </div>
                    <div id="w-node-_0b8d130b-6d0c-8266-cb88-3b4744645450-24e32e33" className="research-join-image">
   
                        <img
                            src="images/k4m2a-app-3.webp"
                            loading="lazy"
                            width="316.5"
                            height="645.5"
                            alt=""
                            srcSet="
                            images/k4m2a-app-3.webp 500w,
                            images/k4m2a-app-3.webp       633w
                            "
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
                    <h2 className="section-heading">Content Creators</h2>
                    <p className="subheading">Empower your spiritual content creation with our platform to reach and inspire a global audience.</p>
                    <a href="#" target="_blank" className="cta cc-mt w-inline-block">
                        <div className="cta-inner cc-dark"><div>Request Creator Access</div></div>
                    </a>
                </div>
                <div className="research-intro-wrap c-dev">
                    <div className="research-intro-cell cc-dev">
                        <div className="icon-wrap cc-research-dev">
                            <div className="icon-inner cc-dark">
                                <img src="images/icon_spiritual.png" loading="lazy" width="32" height="32" alt="" className="icon-img" />
                            </div>
                            <div className="icon-bg u-rainbow u-blur-perf cc-dark"></div>
                        </div>
                        <div>
                            <h2 className="heading-m cc-research">Spiritual Audience Only</h2>
                            <div className="research-intro-divider"></div>
                            <div>Expand your reach across the world with seamless access to spiritual seekers and communities.</div>
                        </div>
                    </div>
                    <div className="research-intro-cell cc-dev">
                        <div className="icon-wrap cc-research-dev">
                            <div className="icon-inner cc-dark">
                                <img src="images/icon_creator.png" loading="lazy" width="32" height="32" alt="" className="icon-img" />
                            </div>
                            <div className="icon-bg u-rainbow u-blur-perf cc-dark"></div>
                        </div>
                        <div>
                            <h2 className="heading-m cc-research">Creator Tools Suite</h2>
                            <div className="research-intro-divider"></div>
                            <div>Easily create, share, and engage with personalized spiritual content that resonates with your audience.</div>
                        </div>
                    </div>
                    <div className="research-intro-cell cc-last cc-dev">
                        <div className="icon-wrap cc-research-dev">
                            <div className="icon-inner cc-dark">
                                <img src="images/icon_noalgoritham.png" loading="lazy" width="32" height="32" alt="" className="icon-img" />
                            </div>
                            <div className="icon-bg u-rainbow u-blur-perf cc-dark"></div>
                        </div>
                        <div>
                            <h2 className="heading-m cc-research">No Algorithm Bias</h2>
                            <div className="research-intro-divider"></div>
                            <div>Your spiritual content stands out, free from competition with mainstream material.</div>
                        </div>
                    </div>
                    <div className="research-intro-cell cc-last cc-dev">
                        <div className="icon-wrap cc-research-dev">
                            <div className="icon-inner cc-dark">
                                <img src="images/icon_diverse.png" loading="lazy" width="32" height="32" alt="" className="icon-img" />
                            </div>
                            <div className="icon-bg u-rainbow u-blur-perf cc-dark"></div>
                        </div>
                        <div>
                            <h2 className="heading-m cc-research">Diverse Media Support</h2>
                            <div className="research-intro-divider"></div>
                            <div>Share your unique spiritual offerings with tools designed for guided meditations, affirmations, rituals, audio-only content, interactive visualizations, and downloadable workbooks or prayer guides.</div>
                        </div>
                    </div>
                    <div className="research-intro-cell cc-last cc-dev">
                        <div className="icon-wrap cc-research-dev">
                            <div className="icon-inner cc-dark">
                                <img src="images/icon_intent.png" loading="lazy" width="32" height="32" alt="" className="icon-img" />
                            </div>
                            <div className="icon-bg u-rainbow u-blur-perf cc-dark"></div>
                        </div>
                        <div>
                            <h2 className="heading-m cc-research">Intent-Based Discovery</h2>
                            <div className="research-intro-divider"></div>
                            <div>Ensure your content reaches the right audience with filters like "meditation," "affirmations," or "esoteric teachings," enabling spiritual seekers to discover content tailored to their journey.</div>
                        </div>
                    </div>
                    <div className="research-intro-cell cc-last cc-dev">
                        <div className="icon-wrap cc-research-dev">
                            <div className="icon-inner cc-dark">
                                <img src="images/icon_collaborative.png" loading="lazy" width="32" height="32" alt="" className="icon-img" />
                            </div>
                            <div className="icon-bg u-rainbow u-blur-perf cc-dark"></div>
                        </div>
                        <div>
                            <h2 className="heading-m cc-research">Collaborative Creation</h2>
                            <div className="research-intro-divider"></div>
                            <div>Connect with like-minded creators to co-host events, author content together, or launch impactful community projects, all with seamless collaboration tools.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</main>
  )
}

export default Research