import React from "react";
import Link from "antd/lib/typography/Link";

const isAndroid = /Android/i.test(navigator.userAgent);
const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

function Downloadapp() {
  return (
    <main className="main cc-home hero">
      <section className="deviceProfile mb50 dwnpage">
        <div className="page-padding">
          <div className="main-profilecontainer container">
            <div className="downloadapppage">
              {/*   <div className="downloadapp">
                        {
                            isAndroid &&
                            <Link to="https://play.google.com/store/apps/details?id=com.k4m2a&hl=en_IN" className="profile-header-text">
                                <img src="/images/androidapp.png" alt="Logo" />
                            </Link>
                        }

                        {
                            isIOS &&
                            <Link to="https://apps.apple.com/in/app/k4m2a/id6743112577" className="profile-header-text">
                                <img src="/images/appleapp.png" alt="Logo" />
                            </Link>
                        }



                    </div> */}

              <div className="leftdownload">
                <h1 className="home-hero-heading">
                  Connect from <br />
                  anywhere
                </h1>
                <p className="subheading">
                  You can connect anytime, anywhere with <br />
                  the k4m2a app for iOS and Android
                </p>

                <div className="qrcodebox">
                  <span>Scan to download </span>
                  <img src="/images/qrcodeimg.png" alt="" />
                </div>
                <div className="appmainbox">
                  <div className="androidbox appbox">
                    <a
                      href="https://play.google.com/store/apps/details?id=com.k4m2a&hl=en_IN"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src="/images/android_black.png" alt="" />
                      <span>Open Google Play</span>
                    </a>
                  </div>
                  <div className="iosbox appbox">
                    <a
                      href="https://apps.apple.com/in/app/k4m2a/id6743112577"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src="/images/apple_black.png" alt="" />
                      <span>Open AppStore</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="rightdownload">
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
                    sizes="(max-width: 767px) 100vw, (max-width: 991px) 40vw, 42vw"
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Downloadapp;
