import React from "react";
import Link from "antd/lib/typography/Link";
import { formatCustomDateTime } from "../../utils/jsonUtils";

export function PostContent({ post }) {
  return (
    <>
      <div className="interestbox">
        {post?.profileImg && (
          <div className="interestimage">
            <img src={post?.profileImg} alt="Interest" />
          </div>
        )}
        <div className="interesttext">
          {post?.createdBy && <h4>{post?.createdBy}</h4>}
          {post?.userName && <p>@{post?.userName}</p>}
        </div>
      </div>
      <div className="post-textarea">
        {post?.textMsg && <p>{post?.textMsg}</p>}
        {post?.thumbnailUrl[0] && (
          <div className="post-image">
            <img src={post?.thumbnailUrl[0]} alt="Post" />
          </div>
        )}
      </div>
      <div className="viewsdata">
        {`${formatCustomDateTime(post?.createdOn)} - ${post?.noOfViews} Views`}
      </div>
    </>
  );
}
