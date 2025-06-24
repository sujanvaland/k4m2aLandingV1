import React from "react";
import Link from "antd/lib/typography/Link";

export function PostSidebar({ isAndroid, isIOS }) {
    return (
        <div className="mainprofile-box mt-15">
            <div className="profile-personaldata pdtop25">
                <h3 className="fnt20">New to K4M2A?</h3>
                <div className="downloadapp">
                    {isAndroid && (
                        <Link to="https://play.google.com/store/apps/details?id=com.k4m2a&hl=en_IN" className="profile-header-text">
                            <img src="/images/androidapp.png" alt="Logo" />
                        </Link>
                    )}
                    {isIOS && (
                        <Link to="https://apps.apple.com/in/app/k4m2a/id6743112577" className="profile-header-text">
                            <img src="/images/appleapp.png" alt="Logo" />
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
} 