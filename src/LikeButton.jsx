import { useState } from "react";

function LikeButton() {
  const [likes, setLikes] = useState(0);

  function handleLike() {
    setLikes(likes + 1);
  }

  return (
    <div style={{ margin: "30px" }}>
      <h2>Task 2: Like Button</h2>

      <p>Total Likes: {likes}</p>

      <button onClick={handleLike}>
        Like 👍
      </button>
    </div>
  );
}

export default LikeButton;