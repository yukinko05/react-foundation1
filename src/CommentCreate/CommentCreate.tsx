import { useState } from "react";
import "./CommentCreate.css";

interface CommentCreateProps {
  threadId: string | undefined;
  onCommentCreated: () => void;
}

export default function CommentCreate({ threadId, onCommentCreated }: CommentCreateProps) {
  const [post, setPost] = useState("");

  const handleSubmit = async () => {
    const postData = {
      post: post,
    };

    try {
      await fetch(`https://railway.bulletinboard.techtrain.dev/threads/${threadId}/posts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });
      setPost("");
      onCommentCreated();
    } catch (error) {
      console.log("コメントが投稿できませんでした。", error);
    }
  };
  return (
    <div className="inputContainer">
      <label htmlFor="post" className="postLabel">
        Comment
      </label>
      <textarea
        name="post"
        id="post"
        value={post}
        onChange={(e) => setPost(e.target.value)}
        className="input"
      />
      <button onClick={handleSubmit} className="postButton" disabled={post === ""}>
        投稿
      </button>
    </div>
  );
}
