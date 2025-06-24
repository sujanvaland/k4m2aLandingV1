import React from "react";

function ProfileSection({ title, children }) {
    return (
        <div className="mainprofile-box mt-15">
            <div className="profile-personaldata pdtop25">
                <h3 className="fnt20">{title}</h3>
                {children}
            </div>
        </div>
    );
}

export default ProfileSection; 