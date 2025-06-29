import React, { useEffect, useState } from "react";
import { PostHeader } from "./PostHeader";
import { PostContent } from "./PostContent";
import { PostFooter } from "./PostFooter";
import { PostSidebar } from "./PostSidebar";
import { useParams } from "react-router-dom";
import { getPostById } from "../../services/post.service";
import { decodeBase64, parseJsonString } from "../../utils/jsonUtils";
import Loader from "../ui/Loader";
import { getProfile } from "../../services/profile.service";

function Post() {
  let isAndroid = false, isIOS = false;
  if (typeof navigator !== 'undefined') {
    isAndroid = /Android/i.test(navigator.userAgent);
    isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
  }

  const { encodedPostId, userName } = useParams();
  if (!encodedPostId) throw new Error('Post ID is missing from the URL');
  if (!userName) throw new Error('User name is missing from the URL');
  
  const postId = decodeBase64(encodedPostId);
  const [postState, setPostSTate] = useState({
    post: null,
  });
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getPost = async () => {
      if (postId) {
        try {

          const userRes = await getProfile(userName);
          if (!userRes || !userRes.data || !userRes.data.result) {
            throw new Error('PROFILE_NOT_FOUND');
          }

          const res = await getPostById(postId, userRes.data.result.id);
          // Check if response exists and has valid data
          if (res && Array.isArray(res) && res.length > 0 && res[0] && res[0].postMessage) {
            setPostSTate({
              post: { ...res[0], postObject: parseJsonString(res[0].postMessage) },
            });
          } else {
            // Throw error for 404 - post not found (API returns nothing)
            throw new Error('POST_NOT_FOUND');
          }
        } catch (err) {
          if (err.message === 'POST_NOT_FOUND') {
            setError(err);
          } else {
            setError(new Error('Something went wrong while fetching the post'));
          }
        } finally {
          setIsLoading(false);
        }
      }
    };

    getPost();
  }, [postId]);

  if (error) {
    if (error?.message === 'POST_NOT_FOUND') {
      throw new Error('404_NOT_FOUND');
    }
    throw error;
  }

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
                  {isLoading ? (
                    <Loader size="large" text="Loading post..." />
                  ) : postState?.post?.postObject ? (
                    <>
                      <PostContent post={postState?.post?.postObject} />
                      <PostFooter post={postState?.post?.postObject} />
                    </>
                  ) : null}
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
