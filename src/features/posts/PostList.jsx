import { useSelector } from "react-redux";
import {
  selectPostIds,
  getPostsStatus,
  getPostsError,
  // fetchPosts,
} from "./postSlice";
// import React, { useEffect } from "react";
import PostExcerpt from "./PostExcerpt";

const postList = () => {
  // const dispatch = useDispatch();

  const orderedPostIds = useSelector(selectPostIds);
  const postsStatus = useSelector(getPostsStatus);
  const postsError = useSelector(getPostsError);

  // useEffect(() => {
  //   if (postsStatus === "idle") {
  //     dispatch(fetchPosts());
  //   }
  // }, [postsStatus, dispatch]);

  let content;
  if (postsStatus === "loading") {
    content = <p>"Loading..."</p>;
  } else if (postsStatus === "succeeded") {
    content = orderedPostIds.map((postId) => (
      <PostExcerpt key={postId} postId={postId} />
    ));
  } else if (postsStatus === "failed") {
    content = <p>{postsError}</p>;
  }

  return <section>{content}</section>;
};

export default postList;
