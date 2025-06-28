import React from "react";
import Link from "antd/lib/typography/Link";
import AppDownloadModal from "../modals/AppDownloadModal";
import useAppDownloadModal from "../../hooks/useAppDownloadModal";

export function PostSidebar(props) {
  // Backward compatibility: allow isAndroid/isIOS as props, but prefer hook detection
  let isAndroid = false,
    isIOS = false;
  if (typeof navigator !== "undefined") {
    isAndroid = /Android/i.test(navigator.userAgent);
    isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
  } else if (props) {
    isAndroid = !!props.isAndroid;
    isIOS = !!props.isIOS;
  }

  const { isOpen, openModal, closeModal, getAppLink } = useAppDownloadModal();

  return (
    <div className="mainprofile-box mt-15">
      <div className="profile-personaldata pdtop25">
        <h3 className="fnt20">New to K4M2A?</h3>
        <div
          className="downloadapp"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <button
            onClick={openModal}
            style={{
              padding: "10px 28px",
              background: "linear-gradient(90deg, #6366f1 0%, #0ea5e9 100%)",
              color: "#fff",
              borderRadius: 8,
              fontWeight: 600,
              fontSize: 16,
              border: "none",
              marginBottom: 12,
              cursor: "pointer",
            }}
            aria-label="Join K4M2A and download the app"
          >
            Join
          </button>

          <AppDownloadModal
            isOpen={isOpen}
            onClose={closeModal}
            appLink={getAppLink()}
          />
        </div>
      </div>
    </div>
  );
}
