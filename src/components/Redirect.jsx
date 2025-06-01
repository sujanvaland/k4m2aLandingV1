import React, { useEffect } from 'react';
// import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

function Redirect() { 
  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Replace these URLs with your app's actual store links
    const playStoreURL = 'https://play.google.com/store/apps/details?id=com.flipkart.android&hl=en_IN';
    const appStoreURL = 'https://apps.apple.com/us/app/flipkart-online-shopping-app/id742044692';

    if (/android/i.test(userAgent)) {
      window.location.href = playStoreURL;
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      window.location.href = appStoreURL;
    } else {
      // Optional: Fallback for non-mobile users
      console.log('This page is intended for mobile users.');
    }
  }, []);

  return (
    <main className="main cc-home">
    <section className="hero">
        <div className="page-padding">
            <div className="frontcontainer frontcontainer">
                <div className="section-header cc-legal">
                    <div className="eyebrow-pill">
                        <div className="eyebrow-pill-inner">Redirect</div>
                        <div className="eyebrow-pill-bg u-rainbow u-blur-perf" />
                    </div>
                    <h1 className="section-heading cc-large marbtmzero">K4M2A Redirect</h1>
                </div>                
            </div>
            <div className="flex items-center justify-center min-h-screen">
                <p className="text-xl">Redirecting to your app store...</p>
            </div>
        </div>
    </section>
</main>
  );
}

export default Redirect;
