import React from "react";
import Link from "antd/lib/typography/Link";

export function PostHeader({ isAndroid, isIOS }) {
  return (
    <>
      <Link to="/" className="logo">
        <img src="/images/logo.png" alt="Logo" />
      </Link>
      <div className="downloadapp showin-mobile">
        {isAndroid && (
          <Link
            to="https://play.google.com/store/apps/details?id=com.k4m2a&hl=en_IN"
            className="profile-header-text"
          >
            <img src="/images/androidapp.png" alt="Logo" />
          </Link>
        )}
        {isIOS && (
          <Link
            to="https://apps.apple.com/in/app/k4m2a/id6743112577"
            className="profile-header-text"
          >
            <img src="/images/appleapp.png" alt="Logo" />
          </Link>
        )}
      </div>
    </>
  );
}
