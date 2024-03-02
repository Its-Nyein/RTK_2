import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// nanoid generate random id so we don't need
// to import something else like uuid
import { addNewPosts } from "./postSlice";
import { selectAllUsers } from "../users/userSlice";

function AddPostForm() {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");
  const [addRequestStatus, setAddRequestStatus] = useState("idle");

  const canSave =
    [title, content, userId].every(Boolean) && addRequestStatus === "idle";

  const handleOnSavePost = () => {
    if (canSave) {
      try {
        setAddRequestStatus("pending");
        dispatch(addNewPosts({ title, body: content, userId })).unwrap();

        setTitle("");
        setContent("");
        setUserId("");
      } catch (error) {
        console.log("Fail to save post", error);
      } finally {
        setAddRequestStatus("idle");
      }
    }
  };

  const users = useSelector(selectAllUsers);
  const userOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  return (
    <section>
      <h2>Add a New Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          name="postTitle"
          id="postTitle"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label htmlFor="postAuthor">Author:</label>
        <select
          id="postAuthor"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        >
          <option value=""></option>
          {userOptions}
        </select>

        <label htmlFor="postContent">Content:</label>
        <textarea
          type="text"
          name="postContent"
          id="postContent"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="button" onClick={handleOnSavePost} disabled={!canSave}>
          Save Post
        </button>
      </form>
    </section>
  );
}

export default AddPostForm;
