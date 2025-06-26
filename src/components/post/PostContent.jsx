import React from "react";
import Link from "antd/lib/typography/Link";
import { formatCustomDateTime } from "../../utils/jsonUtils";

export function PostContent({ post }) {
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
                {post?.profileImg && <div className="interestimage">
                    <img src={post?.profileImg} alt="Interest" />
                </div>}
                <div className="interesttext">
                    {post?.createdBy && <h4>{post?.createdBy}</h4>}
                    {post?.userName && <p>@{post?.userName}</p>}
                </div>
            </div>
            <div className="post-textarea">
                {post?.textMsg && <p>{post?.textMsg}</p>}
                {post?.thumbnailUrl[0] && <div className="post-image">
                    <img src={post?.thumbnailUrl[0]} alt="Post" />
                </div>}
            </div>
            <div className="viewsdata">
            {`${formatCustomDateTime(post?.createdOn)} - ${post?.noOfViews} Views`}
            </div>
        </>
    );
} 