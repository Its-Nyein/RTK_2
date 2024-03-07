import { useSelector } from "react-redux";
import { selectUserById } from "./userSlice";
import { selectAllPosts } from "../posts/postSlice";
import { Link, useParams } from "react-router-dom";

import React from "react";

const UserPage = () => {
  const { userId } = useParams();
  const users = useSelector((state) => selectUserById(state, Number(userId)));

  const postsForUser = useSelector((state) => {
    const allPosts = selectAllPosts(state);
    return allPosts.filter((post) => post.userId === Number(userId));
  });

  const postsTitle = postsForUser.map((post) => (
    <li key={post.id}>
      <Link to={`/post/${post.id}`}>{post.title}</Link>
    </li>
  ));
  return (
    <section>
      <h2>{users?.name}</h2>
      <ol>{postsTitle}</ol>
    </section>
  );
};

export default UserPage;
