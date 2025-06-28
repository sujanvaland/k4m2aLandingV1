import React, { useEffect, useState } from "react";
import Link from "antd/lib/typography/Link";
import { PostHeader } from "./PostHeader";
import { PostContent } from "./PostContent";
import { PostFooter } from "./PostFooter";
import { PostSidebar } from "./PostSidebar";
import { useParams } from "react-router-dom";
import { getPostById } from "../../services/post.service";
import { decodeBase64, parseJsonString } from "../../utils/jsonUtils";
import Loader from "../ui/Loader";

const isAndroid = /Android/i.test(navigator.userAgent);
const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

function Post() {
  const { encodedPostId } = useParams();
  const postId = decodeBase64(encodedPostId);
  const [postState, setPostSTate] = useState({
    post: null,
  });

  useEffect(() => {
    const getPost = async () => {
      if (postId) {
        const res = await getPostById(postId);
        setPostSTate({
          post: { ...res[0], postObject: parseJsonString(res[0].postMessage) },
        });
      }
    };

    getPost();
  }, [postId]);

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
                  {postState?.post?.postObject ? (
                    <>
                      <PostContent post={postState?.post?.postObject} />
                      <PostFooter post={postState?.post?.postObject} />
                    </>
                  ) : (
                    <Loader size="large" text="Loading post..." />
                  )}
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
