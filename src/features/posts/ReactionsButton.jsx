// import { useDispatch } from "react-redux";
// import { reactionsAdded } from "./postSlice";
import { useAddReactionMutation } from "./postSlice";

const reactionEmoji = {
  thumbsUp: "👍",
  wow: "😮",
  heart: "❤️",
  rocket: "🚀",
  coffee: "☕",
};

import React from "react";

function ReactionsButton({ post }) {
  // const dispatch = useDispatch();
  const [addReaction] = useAddReactionMutation();

  const reactionsButtons = Object.entries(reactionEmoji).map(
    ([name, emoji]) => {
      return (
        <button
          key={name}
          type="button"
          className="reactionButton"
          onClick={() => {
            const newValue = post.reactions[name] + 1;
            addReaction({
              postId: post.id,
              reactions: { ...post.reactions, [name]: newValue },
            });
          }}
        >
          {emoji} {post?.reactions[name]}
        </button>
      );
    }
  );
  return <div>{reactionsButtons}</div>;
}

export default ReactionsButton;
