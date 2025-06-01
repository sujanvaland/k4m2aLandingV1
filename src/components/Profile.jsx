import React from "react";
import Link from "antd/lib/typography/Link";

const isAndroid = /Android/i.test(navigator.userAgent);
const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

function Profile() {
    return (
        <main className="main cc-home">

            <div className="main-profilecontainer">
                <div className="profileHeader">
                    <Link to="/" className="logo">
                        <img src="/images/logo.png" alt="Logo" />
                    </Link>
                    <div className="downloadapp">
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



                    </div>
                </div>
            </div>
            <section className="deviceProfile mb50">
                <div className="page-padding">
                    <div className="main-profilecontainer container">
                        <div className="profileflexBox">
                            <div className="left-profile">
                                <div className="mainprofile-box">
                                    <div className="profile-cover"></div>
                                    <div className="profile-personaldata">
                                        <div className="profile-image">
                                            <img
                                                src="https://www.w3schools.com/howto/img_avatar.png"
                                                alt="Profile Avatar"
                                            />
                                        </div>
                                        <div className="personal-data flex-spacebetween">
                                            <div className="personal-data-left wd-75">
                                                <h3>John Doe</h3>
                                                <p>Passionate UI/UX professional with over a decade of experience delivering engaging, responsive, and accessible digital experiences.</p>
                                                <p className="location">Vadodara, Gujarat, India <Link to="/">Contact info</Link></p>
                                                <p className="followersbox"><Link to="/">10 Following</Link> <Link to="/">10 Followers</Link></p>
                                                <div className="actionbuttons">
                                                    <Link to="/" className="btn btn-primary active">Follow</Link>
                                                    <Link to="/" className="btn btn-primary">Message</Link>
                                                </div>
                                            </div>
                                            <div className="personal-data-right wd-25">
                                                <div className="companyinfo-box">
                                                    <img src="/images/companyimg.jpg" alt="Company Logo" />
                                                    K4M2A
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mainprofile-box mt-15">
                                    <div className="profile-personaldata pdtop25">
                                        <h3 className="fnt20">Experience</h3>
                                        <div className="maininterestbox">
                                            <div className="interestbox">
                                                <div className="interestimage">
                                                    <img src="/images/img_sadguru.png" alt="Interest" />
                                                </div>
                                                <div className="interesttext">
                                                    <h4>Sadguru</h4>
                                                    <p>@spiritual Leader</p>
                                                </div>
                                            </div>
                                            <div className="interestbox">
                                                <div className="interestimage">
                                                    <img src="/images/img_sadguru.png" alt="Interest" />
                                                </div>
                                                <div className="interesttext">
                                                    <h4>Sadguru</h4>
                                                    <p>@spiritual Leader</p>
                                                </div>
                                            </div>
                                            <div className="interestbox">
                                                <div className="interestimage">
                                                    <img src="/images/img_sadguru.png" alt="Interest" />
                                                </div>
                                                <div className="interesttext">
                                                    <h4>Sadguru</h4>
                                                    <p>@spiritual Leader</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mainprofile-box mt-15">
                                    <div className="profile-personaldata pdtop25">
                                        <h3 className="fnt20">Interest</h3>
                                        <div className="maininterestbox">
                                            <div className="interestbox">
                                                <div className="interestimage">
                                                    <img src="/images/img_sadguru.png" alt="Interest" />
                                                </div>
                                                <div className="interesttext">
                                                    <h4>Sadguru</h4>
                                                    <p>@spiritual Leader</p>
                                                </div>
                                            </div>
                                            <div className="interestbox">
                                                <div className="interestimage">
                                                    <img src="/images/img_sadguru.png" alt="Interest" />
                                                </div>
                                                <div className="interesttext">
                                                    <h4>Sadguru</h4>
                                                    <p>@spiritual Leader</p>
                                                </div>
                                            </div>
                                            <div className="interestbox">
                                                <div className="interestimage">
                                                    <img src="/images/img_sadguru.png" alt="Interest" />
                                                </div>
                                                <div className="interesttext">
                                                    <h4>Sadguru</h4>
                                                    <p>@spiritual Leader</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mainprofile-box mt-15">
                                    <div className="profile-personaldata pdtop25">
                                        <h3 className="fnt20">Books</h3>
                                        <div className="maininterestbox">
                                            <div className="interestbox">
                                                <div className="interestimage">
                                                    <img src="/images/img_sadguru.png" alt="Interest" />
                                                </div>
                                                <div className="interesttext">
                                                    <h4>Sadguru</h4>
                                                    <p>@spiritual Leader</p>
                                                </div>
                                            </div>
                                            <div className="interestbox">
                                                <div className="interestimage">
                                                    <img src="/images/img_sadguru.png" alt="Interest" />
                                                </div>
                                                <div className="interesttext">
                                                    <h4>Sadguru</h4>
                                                    <p>@spiritual Leader</p>
                                                </div>
                                            </div>
                                            <div className="interestbox">
                                                <div className="interestimage">
                                                    <img src="/images/img_sadguru.png" alt="Interest" />
                                                </div>
                                                <div className="interesttext">
                                                    <h4>Sadguru</h4>
                                                    <p>@spiritual Leader</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mainprofile-box mt-15">
                                    <div className="profile-personaldata pdtop25">
                                        <h3 className="fnt20">Practices</h3>
                                        <div className="maininterestbox">
                                            <div className="interestbox">
                                                <div className="interestimage">
                                                    <img src="/images/img_sadguru.png" alt="Interest" />
                                                </div>
                                                <div className="interesttext">
                                                    <h4>Sadguru</h4>
                                                    <p>@spiritual Leader</p>
                                                </div>
                                            </div>
                                            <div className="interestbox">
                                                <div className="interestimage">
                                                    <img src="/images/img_sadguru.png" alt="Interest" />
                                                </div>
                                                <div className="interesttext">
                                                    <h4>Sadguru</h4>
                                                    <p>@spiritual Leader</p>
                                                </div>
                                            </div>
                                            <div className="interestbox">
                                                <div className="interestimage">
                                                    <img src="/images/img_sadguru.png" alt="Interest" />
                                                </div>
                                                <div className="interesttext">
                                                    <h4>Sadguru</h4>
                                                    <p>@spiritual Leader</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>




                            </div>
                            <div className="right-profile">
                                <div className="mainprofile-box mt-15">
                                    <div className="profile-personaldata pdtop25">
                                        <h3 className="fnt20">Who to Follow</h3>
                                        <div className="maininterestbox">
                                            <div className="interestbox">
                                                <div className="interestimage">
                                                    <img src="/images/img_sadguru.png" alt="Interest" />
                                                </div>
                                                <div className="interesttext">
                                                    <h4>Sadguru</h4>
                                                    <p>@spiritual Leader</p>
                                                </div>
                                            </div>
                                            <div className="interestbox">
                                                <div className="interestimage">
                                                    <img src="/images/img_sadguru.png" alt="Interest" />
                                                </div>
                                                <div className="interesttext">
                                                    <h4>Sadguru</h4>
                                                    <p>@spiritual Leader</p>
                                                </div>
                                            </div>
                                            <div className="interestbox">
                                                <div className="interestimage">
                                                    <img src="/images/img_sadguru.png" alt="Interest" />
                                                </div>
                                                <div className="interesttext">
                                                    <h4>Sadguru</h4>
                                                    <p>@spiritual Leader</p>
                                                </div>
                                            </div>
                                        </div>
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

export default Profile;
