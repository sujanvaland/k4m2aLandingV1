import React from "react";
import { Link } from "react-router-dom";

function Career() {
  return (
    <main className="main cc-home">
      <section className="hero">
        <div className="page-padding">
          <div className="container">
            <div className="section-header cc-legal container--small">
              <div className="eyebrow-pill">
                <div className="eyebrow-pill-inner">
                  <div>Career</div>
                </div>
                <div className="eyebrow-pill-bg u-rainbow u-blur-perf"></div>
              </div>
              <h1 className="section-heading cc-large">Help us build the future of search</h1>
              <p>Join a team where curiosity and innovation shape how the world finds answers</p>
              <Link to="" className="linkbtn btnblack">See open roles</Link>
            </div>
            <div className="bannerImage">
              <img src="images/k4.jpg" alt="Career" />
            </div>
            <div className="container container--small">
            <div className="legal-rt w-richtext">
              <p className="fnt28 lightfont mt-2 mb-2">
              K4M2A is the world’s first answer engine. It searches the internet in real-time to deliver fast, clear answers with trusted sources and citations. Our team is driven by curiosity and the belief that everyone deserves easy access to reliable knowledge.
              </p>
              <p>On our team, you’ll tackle unique challenges daily as we build the future of search—where answers are always clear, trustworthy, and at our fingertips.</p>
            </div>
            </div>
            <div className="container">
              <div className="mainvalueBox">
                <h2 className="section-heading">Our Values</h2>
                <div class="valuerowBox">                
                    <div class="valuesubbox">
                      <div class="icon">
                        <img src="images/issue-loupe.svg" alt="Innovation" />
                      </div>
                      <h3 className="heading-m cc-research">Curiosity</h3>
                      <p>We question assumptions, explore new angles, look beyond the obvious solutions, and constantly ask, “what if?”</p>
                    </div>    
                    <div class="valuesubbox">
                      <div class="icon">
                        <img src="images/gauge-circle-bolt.svg" alt="Innovation" />
                      </div>
                      <h3 className="heading-m cc-research">Velocity</h3>
                      <p>We move fast—building quickly, testing ideas, making them better. Progress comes from being decisive, taking bold steps, and constantly improving.</p>
                    </div>
                    <div class="valuesubbox">
                      <div class="icon">
                        <img src="images/key.png" alt="Innovation" />
                      </div>
                      <h3 className="heading-m cc-research">Ownership</h3>
                      <p>We want to build something meaningful—something we’re proud to share with the world. We care deeply about quality and won’t settle for “good enough.”</p>
                    </div>  
                    <div class="valuesubbox">
                      <div class="icon">
                        <img src="images/shield-check.svg" alt="Innovation" />
                      </div>
                      <h3 className="heading-m cc-research">Quality</h3>
                      <p>We turn ideas and technology into accessible tools that make life easier and better for everyone. Our products are simple yet powerful.</p>
                    </div> 
                    <div class="valuesubbox">
                      <div class="icon">
                        <img src="images/comments.svg" alt="Innovation" />
                      </div>
                      <h3 className="heading-m cc-research">Communication</h3>
                      <p>The best ideas are shaped by different perspectives. We listen to feedback and interact transparently, both within the company and with our users.</p>
                    </div>            
                </div>

              </div>

               <div className="benefitsBox">
                    <h2 className="section-heading newsubheading">Benefits & Wellness</h2>
                    <p className="fnt22 light textcenter wd750">From comprehensive health plans to wellness resources, we’re committed to helping you 
                      stay healthy and recharge when you need to.</p>
                    <div className="benefitsrow">
                        <div className="twocolumn">
                            <h4 className="heading-m cc-research">Our benefits</h4>
                            <ul>
                                <li>Full health, dental, and vision coverage</li>
                                <li>Mental health and wellness support through Holisticly</li>
                                <li>Unlimited PTO—take time when you need it</li>
                                <li>401(k) matching up to 4%</li>
                                <li>Monthly commuter stipend for our San Francisco team</li>
                            </ul>
                        </div>
                        <div className="twocolumn">
                            <h4 className="heading-m cc-research">Additional perks</h4>
                            <ul>
                                <li>Catered meals and snacks in the office</li>
                                <li>Membership with One Medical for primary care</li>
                                <li>Free therapy sessions through TalkSpace</li>
                                <li>Kindbody discounts for family planning</li> 
                            </ul>
                        </div>
                    </div>
               </div>

               <div className="locationContainer">
                  <div class="subBox leftlocation">
                      <h3 className="section-heading newsubheading textleft">Locations</h3>
                      <p>We have offices in San Francisco, New York City, and Austin.</p>
                      <p>
We work a hybrid schedule and are in the office Mondays, Wednesdays, and Fridays.</p>
                  </div>
                  <div class="subBox rightlocation">
                      <img src="images/img_location.jpg" alt="Locations" />
                  </div>
               </div>

               <div className="container">
                  <div className="currentopenings">
                    <h2 className="section-heading newsubheading">Current Openings</h2>
                    <p>Join a team where curiosity and innovation shape how the world finds answers</p>
                    
                    <h3 className="mt-5">AI</h3>
                    <div className="joblist">
                        <a href="#">AI Research Scientist - Post Training</a>
                        <a href="#">AI Research Engineer - Post Training </a>
                        <a href="#">Technical Data Annotation Analyst (Remote Contract - Pacific Time Zone)</a>
                        <a href="#">Technical Data Annotation Analyst - London</a>
                        <a href="#">Senior Search Engineer - London</a>
                        <a href="#">AI Inference Engineer - San Francisco </a>
                        <a href="#">AI Software Engineer - Full Stack</a>
                         

                    
                    </div>
                    <h3 className="mt-5">Data Science</h3>
                    <div className="joblist">
                        <a href="#">Product Data Scientist - SF </a> 
                    </div>
                    <h3 className="mt-5">Finance</h3>
                    <div className="joblist">
                        <a href="#">Accounting Manager</a> 
                    </div>
                    <h3 className="mt-5">Growth</h3>
                    <div className="joblist">
                        <a href="#">Sonar Developer Relations Manager</a> 
                        <a href="#">Growth Marketing Manager - San Francisco</a> 
                    </div>
                    <h3 className="mt-5">IT</h3>
                    <div className="joblist">
                        <a href="#">Sonar Developer Relations Manager</a> 
                    </div>

                    <h3 className="mt-5">Mobile</h3>
                    <div className="joblist">
                        <a href="#">Sonar Developer Relations Manager</a> 
                    </div>

                    <h3 className="mt-5">Platform</h3>
                    <div className="joblist">
                        <a href="#">Sonar Developer Relations Manager</a> 
                    </div>


                    <h3 className="mt-5">Product Engineering</h3>
                    <div className="joblist">
                        <a href="#">Sonar Developer Relations Manager</a> 
                    </div>


                  </div>
               </div>
            </div>

           
          </div>
        </div>
      </section>
    </main>
  );
}

export default Career;
