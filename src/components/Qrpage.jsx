import React, { useEffect } from "react";

function Qrpage() {
    useEffect(() => {
        const userAgent = navigator.userAgent || navigator.vendor || window.opera;
        const isAndroid = /Android/i.test(userAgent);
        const isIOS = /iPhone|iPad|iPod/i.test(userAgent);

        if (isAndroid) {
            window.location.href = "https://play.google.com/store/apps/details?id=com.k4m2a&hl=en_IN";
        } else if (isIOS) {
            window.location.href = "https://apps.apple.com/in/app/k4m2a/id6743112577";
        }
    }, []);

    return (
        <main className="main cc-home hero">
            <section className="deviceProfile mb50 dwnpage">
                <div className="page-padding">
                    <div className="main-profilecontainer container">
                        <div className="downloadapppage">
                            <div className="downloadapp">
                                {/* Optional fallback UI if redirection doesn't work */}
                                <p>Redirecting to your app store...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Qrpage;
