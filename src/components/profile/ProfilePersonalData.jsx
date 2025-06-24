import React from "react";
import Link from "antd/lib/typography/Link";

function ProfilePersonalData({ profile }) {

    console.log('profile..', profile);

    return (
        <div className="profile-personaldata">
            {profile?.profileImg && <div className="profile-image">
                <img
                    src={profile?.profileImg}
                    alt="Profile Avatar"
                />
            </div>}
            <div className="personal-data flex-spacebetween">
                <div className="personal-data-left wd-75">
                    <h3>{profile?.firstName} {profile?.lastName}</h3>
                    
                    {profile?.about && <p>{profile?.about}</p>}
                    {profile?.location && <p className="location">{profile?.location}<Link to="/">Contact info</Link></p>}
                    <p className="followersbox">
                        {profile?.noOfFollowers && <Link to="/">{profile?.noOfFollowers} Following</Link>} 
                        {profile?.noOfFollowing && <Link to="/">{profile?.noOfFollowing} Followers</Link>}
                    </p>
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
    );
}

export default ProfilePersonalData; 