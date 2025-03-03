import React from "react";
import { useLocation , Link} from "react-router-dom";
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

function ThankYou() {
  const location = useLocation();
  const UserFullName = location.state?.name || "";
  return (
    <main className="main cc-home">
      <div
        data-w-id="077155df-02cf-ce52-d236-39089a93392f"
        className="manifesto-hero-trigger"
      ></div>
      <header className="hero cc-manifesto">
        <div className="page-padding">
          <div className="container">
            <div className="manifesto-header">
              <img src="images/img_thankyou.png" />
              <div className="eyebrow-pill">
                <div className="greenbox">
                  <div>Thank You</div>
                </div>
                <div className="eyebrow-pill-bg u-rainbow u-blur-perf"></div>
              </div>
             {UserFullName && <h1 className="home-hero-heading thankyouheading" id="tooltip-target" data-tip="fsdfsd">{UserFullName}</h1>}
              {/* <button >{UserFullName}</button> */}
      <Tooltip anchorId="tooltip-target" content={UserFullName} />             
              <p className="subheading maxw530 marbtm20">
                Did you know that 85% of people believe they have the power to
                make the world a better place, yet only 5% consistently take
                concrete action toward that goal? You've already taken the
                crucial first step, and we want to celebrate that.{" "}
              </p>
              <p className="subheading maxw530">
                We receive hundreds of requests every day, but yours stands out.
                You’re special to us, and we want to make sure we approach this
                with the care it deserves. Our team will reach out soon via call
                and email to learn more about you. Keep an eye out, and let’s
                take the next step together!
              </p>
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
