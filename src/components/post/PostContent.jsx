import React from "react";
import Link from "antd/lib/typography/Link";

export function PostContent() {
    return (
        <>
            <div className="postTitle">
                <h2 className="fnt20">
                    <Link tp="/">
                        <svg viewBox="0 0 24 24" aria-hidden="true" className="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-z80fyv r-19wmn03">
                            <g><path d="M7.414 13l5.043 5.04-1.414 1.42L3.586 12l7.457-7.46 1.414 1.42L7.414 11H21v2H7.414z" /></g>
                        </svg>
                    </Link>
                    Post
                </h2>
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
            <div className="post-textarea">
                <p>At Patna airport, met the young cricketing sensation Vaibhav Suryavanshi and his family. His cricketing skills are being admired all over the nation! My best wishes to him for his future endeavours.</p>
                <p>At Patna airport, met the young cricketing sensation Vaibhav Suryavanshi and his family. His cricketing skills are being admired all over the nation! My best wishes to him for his future endeavours.</p>
                <div className="post-image">
                    <img src="/images/detailspost.jpg" alt="Post" />
                </div>
            </div>
            <div className="viewsdata">
                6:24 PM · May 31, 2025  9.5M Views
            </div>
        </>
    );
} 