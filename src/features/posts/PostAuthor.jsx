import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/userSlice";
import { Link } from "react-router-dom";

import React from "react";

function PostAuthor({ userId }) {
  const users = useSelector(selectAllUsers);

  const author = users.find((user) => user.id === userId);
  return (
    <span>
      by{" "}
      {author ? (
        <Link to={`/user/${userId}`}>{author.name}</Link>
      ) : (
        "Unknown Author"
      )}
    </span>
  );
}

export default PostAuthor;
