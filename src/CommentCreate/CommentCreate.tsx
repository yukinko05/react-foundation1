import { useState } from "react";
import "./CommentCreate.css";

interface CommentCreateProps {
  threadId: string | undefined;
  onCommentCreated: () => void;
}

export default function CommentCreate({ threadId, onCommentCreated }: CommentCreateProps) {
  const [comment, setComment] = useState("");

  const handleSubmit = async () => {
    const postData = {
      post: comment,
    };

    try {
      await fetch(`https://railway.bulletinboard.techtrain.dev/threads/${threadId}/posts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });
      setComment("");
      onCommentCreated();
    } catch (error) {
      console.log("コメントが投稿できませんでした。", error);
    }
  };
  return (
    <div className="inputContainer">
      <label htmlFor="comment" className="commentLabel">
        Comment
      </label>
      <input
        type="text"
        id="comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        className="input"
      />
      <button onClick={handleSubmit} className="commentButton" disabled={comment === ""}>
        投稿
      </button>
    </div>
  );
}
