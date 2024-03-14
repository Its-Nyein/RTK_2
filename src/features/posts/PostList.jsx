import { useSelector } from "react-redux";
import {
  selectPostIds,
  // getPostsStatus,
  // getPostsError,
  // fetchPosts,
} from "./postSlice";
// import React, { useEffect } from "react";
import PostExcerpt from "./PostExcerpt";
import { useGetPostsQuery } from "./postSlice";

const postList = () => {
  const { isLoading, isSuccess, isError, error } = useGetPostsQuery();
  // const dispatch = useDispatch();

  const orderedPostIds = useSelector(selectPostIds);
  // const postsStatus = useSelector(getPostsStatus);

  // useEffect(() => {
  //   if (postsStatus === "idle") {
  //     dispatch(fetchPosts());
  //   }
  // }, [postsStatus, dispatch]);

  let content;
  if (isLoading) {
    content = <p>"Loading..."</p>;
  } else if (isSuccess) {
    content = orderedPostIds.map((postId) => (
      <PostExcerpt key={postId} postId={postId} />
    ));
  } else if (isError) {
    content = <p>{error}</p>;
  }

  return <section>{content}</section>;
};

export default postList;
