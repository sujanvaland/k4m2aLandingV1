import React from "react";
import { Link } from "react-router-dom";

const joblist = [
  {
    "category": "Content & Research Roles",
    "jobs": [
      { "title": "Researcher", "description": "Study ancient texts, philosophies, and wisdom traditions to guide platform content.", "link": "/careerdetails" },
      { "title": "Content Curator", "description": "Develop, review, and organize transformative knowledge." },
      { "title": "Knowledge Architect", "description": "Design structured learning paths and insights for users." },
      { "title": "AI Trainer", "description": "Teach AI models to understand and generate meaningful responses." }
    ]
  },
  {
    "category": "Technology & AI Roles",
    "jobs": [
      { "title": "AI Engineer", "description": "Develop AI that enhances knowledge discovery and learning." },
      { "title": "UX/UI Designer", "description": "Craft digital experiences that are intuitive and engaging." },
      { "title": "Algorithm Engineer", "description": "Build recommendation engines that support personal growth." }
    ]
  },
  {
    "category": "Growth & Engagement Roles",
    "jobs": [
      { "title": "User Engagement Lead", "description": "Foster deep connections with users and drive engagement." },
      { "title": "Marketing Lead", "description": "Share the mission and attract aligned audiences." },
      { "title": "Partnerships Manager", "description": "Build relationships with organizations and teachers." }
    ]
  },
  {
    "category": "Operations & Strategy Roles",
    "jobs": [
      { "title": "Product Manager", "description": "Oversee the evolution of platform features with purpose." },
      { "title": "People & Culture Lead", "description": "Ensure internal culture aligns with core values." },
      { "title": "Strategy Lead", "description": "Guide the platform’s long-term vision and impact." }
    ]
  }
]


function Career() {
  const generateSlug = (title) =>
    title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
  return (
    <main className="main cc-home careerpage">
      <section className="hero">
        <div className="page-padding">
          <div className="frontcontainer">
            <div className="section-header cc-legal frontcontainer--small">
              <div className="eyebrow-pill">
                <div className="eyebrow-pill-inner">
                  <div>Career</div>
                </div>
                <div className="eyebrow-pill-bg u-rainbow u-blur-perf" />
              </div>
              <h1 className="section-heading cc-large">Help us build the future of spirituality</h1>
              <p className="fnt17">Join a team where curiosity and innovation shape how the world explores and deepens spirituality.</p>
              <Link
                to=""
                className="linkbtn btnblack"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('openroles')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                See open roles
              </Link>
            </div>
            <div className="bannerImage">
              <img src="images/k4.jpg" alt="Career" loading="lazy" />
            </div>
            <div className="frontcontainer frontcontainer--small">
              <div className="legal-rt w-richtext">
                <p className="fnt28 lightfont mt-2 mb-2">
                  K4M2A is the world’s first spiritual answer engine. We harness technology and wisdom to help seekers find clarity, connect with like-minded souls, and access the highest truths from across traditions.
                </p>
                <p>Our team is driven by the mission of helping humanity enlighten and ensuring that spiritual knowledge is accessible, authentic, and transformative.</p>
                <p>On our team, you’ll tackle unique challenges daily as we build the future of spiritual exploration where truth is at everyone’s fingertips, and seekers are never alone on their journey.</p>
              </div>
            </div>
            <div>
              <div className="mainvalueBox">
                <h2 className="section-heading">Our Values</h2>
                <div className="valuerowBox">
                  <div className="valuesubbox">
                    <div className="icon">
                      <img src="images/icon_Truth.png" alt="Truth" loading="lazy" />
                    </div>
                    <h3 className="heading-m cc-research">Truth</h3>
                    <p>We seek and share knowledge that leads to real understanding. </p>
                  </div>
                  <div className="valuesubbox">
                    <div className="icon">
                      <img src="images/icon_purpose.png" alt="Purpose" loading="lazy" />
                    </div>
                    <h3 className="heading-m cc-research">Purpose</h3>
                    <p>Every action we take moves us toward a higher goal—helping humanity awaken.</p>
                  </div>
                  <div className="valuesubbox">
                    <div className="icon">
                      <img src="images/icon_clarity.png" alt="Clarity" loading="lazy" />
                    </div>
                    <h3 className="heading-m cc-research">Clarity</h3>
                    <p>We keep things simple, direct, and free from confusion.
                    </p>
                  </div>
                  <div className="valuesubbox">
                    <div className="icon">
                      <img src="images/icon_growth.png" alt="Growth" loading="lazy" />
                    </div>
                    <h3 className="heading-m cc-research">Growth</h3>
                    <p>We evolve, learn, and refine ourselves every day.
                    </p>
                  </div>
                  <div className="valuesubbox">
                    <div className="icon">
                      <img src="images/praying.png" alt="Impact" loading="lazy" />
                    </div>
                    <h3 className="heading-m cc-research">Impact</h3>
                    <p>Our work is meaningful. It changes lives.</p>
                  </div>
                </div>

              </div>

              <div className="benefitsBox">
                <h2 className="section-heading newsubheading">Benefits & Perks</h2>
                <p className="fnt22 light textcenter wd750">Working at K4M2A isn’t just about a job—it’s about personal transformation and shaping the
                  future of humanity.</p>
                <div className="benefitsrow">
                  <div className="twocolumn">
                    <h4 className="heading-m cc-research">Live with Purpose</h4>
                    <ul>
                      <li>Work on something that truly matters—advancing spiritual knowledge for the world</li>
                      <li>Be part of a mission-driven team that values deep thinking and real change.</li>
                    </ul>
                  </div>
                  <div className="twocolumn">
                    <h4 className="heading-m cc-research">Evolve & Grow</h4>
                    <ul>
                      <li>Access to knowledge, mentors, and spiritual wisdom to expand your mind.</li>
                      <li>Learn new skills and explore ideas that challenge the norm.</li>
                    </ul>
                  </div>
                  <div className="twocolumn mt-30">
                    <h4 className="heading-m cc-research">Stay Healthy & Balanced</h4>
                    <ul>
                      <li>Comprehensive health coverage for peace of mind.</li>
                      <li>Flexible time off to recharge or go on spiritual retreats.</li>
                    </ul>
                  </div>
                  <div className="twocolumn mt-30">
                    <h4 className="heading-m cc-research">Shape the Future</h4>
                    <ul>
                      <li>Your work will leave a lasting impact on future generations.</li>
                      <li>Be at the frontier of blending technology with ancient wisdom.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="locationfrontContainer">
                <div className="subBox leftlocation">
                  <h3 className="section-heading newsubheading textleft">Locations</h3>
                  <p>We are a fully remote organization, letting you work from anywhere, anytime. We believe this flexibility enhances well-being, focus, and fulfillment.</p>
                </div>
                <div className="subBox rightlocation">
                  <img src="images/img_location.jpg" alt="Locations" loading="lazy" />
                </div>
              </div>


              <div className="currentopenings" id="openroles">
                <h2 className="section-heading newsubheading">Current Openings</h2>
                <p>Join a team where curiosity and innovation shape how the world finds answers</p>
                {joblist.map((role, index) => (
                  <div key={index}>
                    <h3 className="mt-5">{role.category}</h3>
                    <div className="joblist">
                      {role.jobs.map((job, jobIndex) => {
                        const jobSlug = generateSlug(job.title);
                        return (
                          <Link key={jobIndex} to={`/careerdetails/${jobSlug}`}>
                            {job.title} - {job.description}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                ))}

                {/* <h3 className="mt-5">Content & Research Roles</h3>
                    <div className="joblist">
                        <Link to="/careerdetails">Researcher2 - Study ancient texts, philosophies, and wisdom traditions to guide
                        platform content.</Link>
                        <a href="#">Content Curator - Develop, review, and organize transformative knowledge.
                        </a>
                        <a href="#">Knowledge Architect - Design structured learning paths and insights for users.
                        </a>
                        <a href="#">AI Trainer - Teach AI models to understand and generate meaningful responses.
                        </a>
                        
                    </div>
                    <h3 className="mt-5">Technology & AI Roles
                    </h3>
                    <div className="joblist">
                        <a href="#">AI Engineer – Develop AI that enhances knowledge discovery and learning.
                        </a> 
                        <a href="#">UX/UI Designer – Craft digital experiences that are intuitive and engaging.
                        </a> 
                        <a href="#">Algorithm Engineer – Build recommendation engines that support personal growth.
                        </a> 
                        

                    </div>
                    <h3 className="mt-5">Growth & Engagement Roles</h3>
                    <div className="joblist">
                        <a href="#">User Engagement Lead – Foster deep connections with users and drive
                        engagement</a> 
                        <a href="#">Marketing Lead – Share the mission and attract aligned audiences.
                        </a> 
                        <a href="#">Partnerships Manager – Build relationships with organizations and teachers.
                        </a> 
                    </div>
                    <h3 className="mt-5">Operations & Strategy Roles</h3>
                    <div className="joblist">
                        <a href="#">Product Manager – Oversee the evolution of platform features with purpose</a> 
                        <a href="#">People & Culture Lead – Ensure internal culture aligns with core values.
                        </a> 
                        <a href="#">Strategy Lead – Guide the platform’s long-term vision and impact.

                        </a>
                    </div> */}



              </div>

            </div>


          </div>
        </div>
        <section className="section cc-cta-banner paddinbottomzero">
          <div className="page-padding">
            <div className="frontcontainer">
              <div className="cta-banner">
                <div
                  id="w-node-_88caa5af-3ca5-4396-86d8-64347c57d1b0-1ff1a765"
                  className="cta-banner-left"
                >
                  <div className="cta-banner-left-content">
                    <h3 className="heading-l fnt35">
                      Work with Meaning.
                    </h3>
                    <ul className="steps-list w-list-unstyled">
                      <li className="steps-list-item">
                        <div className="steps-list-step">1</div>
                        <div>A career that aligns with your higher purpose</div>
                      </li>
                      <li className="steps-list-item">
                        <div className="steps-list-step">2</div>
                        <div>
                          Contribute to building tools that elevate human consciousness
                        </div>
                      </li>
                      <li className="steps-list-item">
                        <div className="steps-list-step">3</div>
                        <div>Collaborate with those who think beyond the ordinary</div>
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

                  <img
                    src="images/footer_bottom.png"
                    loading="lazy"
                    width="317.5"
                    height="180"
                    alt=""
                    srcSet="
                                                images/footer_bottom.png,
                                                images/footer_bottom.png
                                                "
                    sizes="(max-width: 479px) 79vw, (max-width: 767px) 317px, 100vw"
                    className="mobile martop25"
                  />
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
      </section>
    </main>
  );
}

export default Career;
