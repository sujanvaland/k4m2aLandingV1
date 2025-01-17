import React from 'react'

function RequestInvite() {
  return (
    <main className="main cc-home">
    <div data-w-id="077155df-02cf-ce52-d236-39089a93392f" className="manifesto-hero-trigger"></div>
    <header className="hero cc-manifesto">
        <div className="page-padding">
            <div className="container">
                <div className="manifesto-header">
                    <div className="eyebrow-pill">
                        <div className="eyebrow-pill-inner"><div>Request Invite</div></div>
                        <div className="eyebrow-pill-bg u-rainbow u-blur-perf"></div>
                    </div>
                    <h1 className="home-hero-heading">Join the Circle </h1>
                    <p className="subheading maxw530">Request an invite to join a community of truth-seekers and science enthusiasts working together to explore life's most profound questions.</p>
                </div>
            </div>
        </div>
        <div className="manifesto-hero-img-wrap">
           <div className="formmainbox">
                <ul>
                    <li>
                        <input type="text" className="form-control input" placeholder="Enter Full Name"/>
                    </li>
                    <li className="phonebox">
                        <span className="codebox"><img src="images/img_flag.png"/></span>
                        <input type="text" className="form-control input" placeholder="Enter Phone Number"/>
                    </li>
                    <li>
                        <input type="text" className="form-control input" placeholder="Enter Your City"/>
                    </li>
                    <li>
                        <input type="text" className="form-control input" placeholder="Someone Referred you to the Circle? Enter Name"/>
                    </li>
                    <li>
                       <textarea className="areabox" placeholder="Tell us about your journey, what are you seeking?"></textarea>
                    </li>
                    <li>
                        <input type="submit" className="btnsubmit w-button" value="Request Submit" onclick="openpage()"/>
                    </li>
                </ul>
           </div>

           <section className="section cc-manifesto-intro">
            <div className="page-padding">
                <div className="container container--small cc-manifesto">
                    <h2 className="section-heading cc-manifesto">The future is ours to create let’s take the first step towards living in harmony with each other and nature.</h2>
                    <p className="manifesto-paragraph">
                        The answers to our greatest challenges lie at the intersection of science, spirituality, and a shared commitment to live in harmony with mother earth. We are building a community of explorers, visionaries, and change makers who are ready to rethink what’s possible and work together toward solutions that can actually make a difference. <br />
                        <br />
                        K4M2A isn’t just a place to talk. It’s where action happens. Where seekers of knowledge, wisdom, and progress come together to spark real change. It’s for those who are tired of business as usual and want to be part of something bigger, something that embraces both science and spirituality in a way that honors both our intellect and our humanity.<br />
                        <br />
                        If you're ready to step up, explore new possibilities, and join a movement dedicated to healing the divide between humans, uniting us with nature, and resolving the conflicts that separate us from one another.<br />
                        
                    </p>
                </div>
            </div>
        </section>
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
  )
}

export default RequestInvite