import { useSelector } from "react-redux";
import { selectUserById } from "./userSlice";
// import { selectAllPosts, selectPostsByUser } from "../posts/postSlice";
import { Link, useParams } from "react-router-dom";
import { useGetPostsByUserIdQuery } from "../posts/postSlice";

import React from "react";

const UserPage = () => {
  const { userId } = useParams();
  const users = useSelector((state) => selectUserById(state, Number(userId)));

  // const postsForUser = useSelector((state) =>
  //   selectPostsByUser(state, Number(userId))
  // );

  const {
    data: postsForUser,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetPostsByUserIdQuery();

  // const postsTitle = postsForUser.map((post) => (
  //   <li key={post.id}>
  //     <Link to={`/post/${post.id}`}>{post.title}</Link>
  //   </li>
  // ));

  let content;
  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isSuccess) {
    const { ids, entities } = postsForUser;
    content = ids.map((id) => (
      <li key={id}>
        <Link to={`/post/${id}`}>{entities[id].title}</Link>
      </li>
    ));
  } else if (isError) {
    content = <p>{error}</p>;
  }
  return (
    <section>
      <h2>{users?.name}</h2>
      <ol>{content}</ol>
    </section>
  );
};

export default UserPage;
