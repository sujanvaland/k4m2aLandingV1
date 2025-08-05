import React from "react";
import Link from "antd/lib/typography/Link";

const isAndroid = /Android/i.test(navigator.userAgent);
const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

function Analytics() {
    return (
        <main className="main cc-home">
            <section className="deviceProfile externalpost mb50">
                <div className="page-padding">
                    <div className="main-profilecontainer container">
                        <div className="profileflexBox flexstartbox">
                            <div className="leftfirst">
                                <Link to="/" className="logo">
                                    <img src="/images/logo.png" alt="Logo" />
                                </Link>
                                <div className="downloadapp showin-mobile">
                                    {
                                        isAndroid &&
                                         <a
                                            href="https://play.google.com/store/apps/details?id=com.k4m2a&hl=en_IN"
                                            className="profile-header-text"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            >
                                            <img src="/images/androidapp.png" alt="Logo" />
                                        </a>
                                    }
                                    {
                                        isIOS &&
                                        <a
                                            href="https://apps.apple.com/in/app/k4m2a/id6743112577"
                                            className="profile-header-text"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            >
                                            <img src="/images/appleapp.png" alt="Logo" />
                                        </a>
                                    }



                                </div>
                            </div>
                            <div className="left-post">

                                <div className="mainprofile-box Postpadd15 analyticspage">
                                    <div className="postTitle">
                                        <h2 className="fnt20">    Analytics & tools <span>Monday June 23</span></h2>
                                        <div className="interestimage">
                                            <img src="/images/img_sadguru.png" alt="Interest" />
                                        </div>
                                    </div>

                                    <h3>Analytics</h3>
                                    <div className="analyticsmainbox">
                                        <ul>
                                            <li>
                                                <h4>0</h4>
                                                <p>Post impressions</p>
                                                <p>0% past 7 days</p>
                                            </li>
                                            <li>
                                                <h4>167</h4>
                                                <p>Followers</p>
                                                <p>1.3% past 7 days</p>
                                            </li>
                                            <li>
                                                <h4>13</h4>
                                                <p>Profile viewers</p>
                                                <p>Past 90 days</p>
                                            </li>
                                            <li>
                                                <h4>6</h4>
                                                <p>Search appearances</p>
                                                <p>Previous week</p>
                                            </li>
                                        </ul>
                                    </div>

                                    <h3 className="martop15 mb-3">Weekly sharing tracker</h3>
                                    <p className="fnt11">Increase your visibility by posting or commenting. We suggest taking 3 actions every week.</p>
                                    <div className="actionsBox">
                                        <div className="iconBox">
                                            <img src="/images/wirte.png" alt="" />
                                        </div>
                                        <div className="trackerbox">
                                            <div className="datebox">Jun 23-Jun 29</div>
                                            <h5>0 of 3 actions</h5>
                                            <p className="fnt11">No actions yet. Take 3 actions to chieve the weekly sharing goal.</p>
                                        </div>
                                    </div>

                                    <div className="postcountBox">
                                        <h3>0 <span>posts</span></h3>
                                        <p>Members who psot once per week on average see up to 4x more profile views.</p>
                                        <Link to="/">Satart a post</Link>
                                    </div>
                                    <div className="postcountBox">
                                        <h3>0 <span>comments</span></h3>
                                        <p>Members who comment once per week on average see up to 4x more profile views.</p>
                                        <Link to="/">Comments on feed</Link>
                                    </div>

                                    <div className="postcountBox">
                                        <h3>Creator tools</h3>
                                        <p className="lineheight13">Creator mode gives you more ways to engage with your audience  by enabling access to select tools. <Link to="">Learn more</Link> about creator tools access.</p>

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

export default Analytics;
