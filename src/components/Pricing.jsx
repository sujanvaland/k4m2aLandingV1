import Link from "antd/lib/typography/Link";
import React from "react";
 

function Pricing() {
  return (
    <main className="main cc-home">
      <section className="hero padbtmzero">
        <div className="page-padding">
          <div className="frontcontainer">
            <div className="section-header cc-legal">
              <div className="eyebrow-pill">
                <div className="eyebrow-pill-inner">
                  <div>Pricing</div>
                </div>
                <div className="eyebrow-pill-bg u-rainbow u-blur-perf" />
              </div>
              <h1 className="section-heading cc-large">Explore K4M2A Plans</h1>
            </div>
            <div className="legal-rt w-richtext">
              <div className="pricelist">
                <div className="col4 grayback">
                <div className="cntpart">
                    <h2>Almost Free</h2>
                    <p>For spiritual seekers beginning their journey</p>
                    <ul>
                    <li>Edit spiritual posts</li>
                    <li>Write longer, more meaningful spiritual posts</li>
                    <li>Organize learnings with personal bookmark folders</li>
                    <li>Earn a verified badge</li>
                    <li>Access basic engagement analytics</li>
                    <li>Publish original spiritual articles</li>
                    </ul>
                    </div>

                    <div className="footerpart">
                        <h3>$1 / Year</h3>
                        <p>Early-bird offer only for the first 10,000 users
                        </p>
                        <Link to="/signup" className="btn btn-primary btn-lg">
                            Get Started
                        </Link>
                    </div>

                </div>
                <div className="col4 grayback">
                <div className="cntpart">
                    <h2>Free Flow</h2>
                    <p>For humans achieved free flow in spirituality
                    </p>
                    <span>Everything in Free, plus:
                    </span>
                    <ul>
                    <li>Compare Spiritual Traditions</li>
                    <li>Member-Only Masterclasses</li>
                    <li>Advanced Analytics</li>
                    <li>Access to live Q&A Events</li>
                    <li>Schedule Post</li>
                    </ul>
                    </div>

                    <div className="footerpart">
                        <h3>$10 / Year</h3>
                        <p>Early-bird offer only for the first 5,000 users</p>
                        <Link to="/signup" className="btn btn-primary btn-lg">
                            Get Started
                        </Link>
                    </div>

                </div>


                <div className="col4 grayback">
                <div className="cntpart">
                    <h2>Small Groups</h2>
                    <p>For small spiritual groups on the path to becoming big</p>
                    <span>Everything in Free Flow, plus:</span>
                    <ul>
                    <li>Early access to spiritual experiments</li>
                    <li>Collective Bookmarking</li>
                    <li>Manage members and guidelines</li>
                    <li>Collaborative Writing Tools</li>
                    <li>Schedule group events</li>
                    </ul>
                    </div>

                    <div className="footerpart">
                        <h3>$100 / Year</h3>
                        <p>Early-bird offer only for the first 500 Groups</p>
                        <Link to="/signup" className="btn btn-primary btn-lg">
                            Get Started
                        </Link>
                    </div>

                </div>
                <div className="col4 grayback">
                <div className="cntpart">
                    <h2>Large Groups</h2>
                    <p>For large spiritual groups on the path to making big impact</p>
                    <span>Everything in Small Groups, plus:</span>
                    <ul>
                    <li>More usage than Pro</li>
                    <li>Central billing and administration</li>
                    <li>Early access to collaboration features</li> 
                    </ul>
                    </div>

                    <div className="footerpart">
                        <h3>$500 / Year</h3>
                        <p>Early-bird offer only for the first 100 Groups</p>
                        <Link to="/signup" className="btn btn-primary btn-lg">
                            Get Started
                        </Link>
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

export default Pricing;
