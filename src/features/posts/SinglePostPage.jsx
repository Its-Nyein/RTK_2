import { useSelector } from "react-redux";
import { selectPostById } from "./postSlice";
import { Link } from "react-router-dom";

import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionsButton from "./ReactionsButton";
import { useParams } from "react-router-dom";

import React from "react";

function SinglePostPage() {
  const { postId } = useParams();
  const post = useSelector((state) => selectPostById(state, Number(postId)));

  if (!post) {
    <section>
      <h2>Page not found!</h2>
    </section>;
  }
  return (
    <article>
      <h2>{post?.title}</h2>
      <p>{post?.body}</p>
      <p className="postCredit">
        <Link to={`/post/edit/${post?.id}`}>Edit Post</Link>
        <PostAuthor userId={post?.userId} />
        <TimeAgo timestamp={post?.date} />
      </p>
      <ReactionsButton post={post} />
    </article>
  );
}

export default SinglePostPage;
