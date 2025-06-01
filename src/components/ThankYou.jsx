import React from "react";
import { useLocation, Link } from "react-router-dom";
// import { Tooltip } from 'react-tooltip'; 
import 'react-tooltip/dist/react-tooltip.css';

function ThankYou() {
  const location = useLocation();
  const UserFullName = location?.state?.name || "";
  const pagename = location?.state?.pagename || "";


  return (
    <main className="main cc-home">
      <div
        data-w-id="077155df-02cf-ce52-d236-39089a93392f"
        className="manifesto-hero-trigger"
      />
      <header className="hero cc-manifesto">
        <div className="page-padding">
          <div className="frontcontainer thankyoupage">
            <div className="manifesto-header">
              <img src="images/img_thankyou.png" alt="thank-you" />
              <div className="eyebrow-pill">
                <div className="greenbox">
                  {
                    pagename === 'reqinvite' &&
                    <div>Thank You for Your Request</div>
                  }

                  {
                    pagename === 'creatorreqinvite' &&
                    <div>Thank You for Your Request</div>
                  }

                  {
                    pagename === 'career' &&
                    <div>Thank You for Taking the First Step</div>
                  }

                </div>
                <div className="eyebrow-pill-bg u-rainbow u-blur-perf" />
              </div>
              {UserFullName && <h1 className="home-hero-heading thankyouheading" id="tooltip-target" data-tip="fsdfsd">{UserFullName}</h1>}
              {/* <button >{UserFullName}</button> */}
              {/* <Tooltip anchorId="tooltip-target" content={UserFullName} />              */}
              {
                pagename === 'reqinvite' &&
                <div>
                  <p className="subheading maxw530 marbtm20">
                    Did you know that 85% of people believe they have the power to
                    make the world a better place, yet only 5% consistently take
                    concrete action toward that goal? You&apos;ve already taken the
                    crucial first step, and we want to celebrate that.{" "}
                  </p>
                  <p className="subheading maxw530">
                    We receive hundreds of requests every day, but yours stands out.
                    You’re special to us, and we want to make sure we approach this
                    with the care it deserves. Our team will reach out soon via call
                    and email to learn more about you. Keep an eye out, and let’s
                    take the next step together!
                  </p>
                </div>
              }

              {
                pagename === 'creatorreqinvite' &&
                <div>

                  <p className="subheading maxw530 marbtm20">
                    Your request to join K4M2A as a creator has been received.{" "}
                  </p>
                  <p className="subheading maxw530">
                    We’re excited to learn more about your work and how it aligns with our global community of spiritual seekers. Our team will review your submission and reach out soon with next steps.
                  </p>
                  <p className="subheading maxw530">Keep an eye on your inbox—we’ll be in touch shortly.</p>
                </div>
              }

              {
                pagename === 'career' &&
                <div className="maxw530">
                  <p className="subheading">Most people dream of contributing to something larger than themselves. Few take the bold
                    step to act on that calling. By applying to join K4M2A, you’ve done more than submit a form
                    you’ve answered a deeper inner impulse to be part of a global movement dedicated to consciousness,
                    connection, and collective growth.</p>

                  <p className="subheading">We receive many applications, but yours carries a unique resonance. It tells us you’re not just
                    seeking a job, you’re seeking meaning, purpose, and a place where your gifts can truly matter.</p>

                  <p className="subheading">Our team is already reviewing your application with care and intention. You’ll hear from us soon
                    via phone or email as we take the next steps together. </p>

                  <p className="subheading">In the meantime, stay connected to your intention. Something beautiful may be unfolding.</p>
                </div>
              }

              <Link to="/" className="linkreturnhomepage">
                Return to Homepage
              </Link>
            </div>
          </div>
        </div>
        <div className="manifesto-hero-img-wrap">
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
    </main>
  );
}

export default ThankYou;
