import { useState } from "react";

interface CommentCreateProps {
  threadId: string | undefined;
}

export default function CommentCreate({ threadId }: CommentCreateProps) {
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
    } catch (error) {
      console.log("コメントが投稿できませんでした。", error);
    }
  };
  return (
    <div>
      <label>
        Comment
        <input type="text" value={comment} onChange={(e) => setComment(e.target.value)} />
      </label>
      <button onClick={handleSubmit}>投稿</button>
    </div>
  );
}
