import React from "react";
import Link from "antd/lib/typography/Link";
import { PostHeader } from "./PostHeader";
import { PostContent } from "./PostContent";
import { PostFooter } from "./PostFooter";
import { PostSidebar } from "./PostSidebar";

const isAndroid = /Android/i.test(navigator.userAgent);
const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

function Post() {
    return (
        <main className="main cc-home">
            <section className="deviceProfile externalpost mb50">
                <div className="page-padding">
                    <div className="main-profilecontainer container">
                        <div className="profileflexBox">
                            <div className="leftfirst">
                                <PostHeader isAndroid={isAndroid} isIOS={isIOS} />
                            </div>
                            <div className="left-post">
                                <div className="mainprofile-box Postpadd15">
                                    <PostContent />
                                    <PostFooter />
                                </div>
                            </div>
                            <div className="right-profile">
                                <PostSidebar isAndroid={isAndroid} isIOS={isIOS} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Post;
