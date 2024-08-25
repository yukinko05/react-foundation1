import { useState, useEffect } from "react";
import Header from "../Header/Header";
import { Link, useParams, useLocation } from "react-router-dom";
import "./ThreadPage.css";
import CommentCreate from "../CommentCreate/CommentCreate";

type Post = {
  id: string | null;
  post: string | null;
};

export default function ThreadPage() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const ThreadTitle = params.get("title");
  const { threadId } = useParams();

  const [threadData, setThreadData] = useState<Post[]>([]);

  useEffect(() => {
    fetch(`https://railway.bulletinboard.techtrain.dev/threads/${threadId}/posts`)
      .then((res) => res.json())
      .then((data) => setThreadData(data.posts))
      .catch((error) => {
        console.log("スレッドのデータを取得できません。", error);
      });
  }, [threadId]);

  const refreshThreadData = () => {
    fetch(`https://railway.bulletinboard.techtrain.dev/threads/${threadId}/posts`)
      .then((res) => res.json())
      .then((data) => setThreadData(data.posts))
      .catch((error) => {
        console.log("スレッドのデータを取得できません。", error);
      });
  };

  return (
    <>
      <Header>
        <Link to="/threads/new" className="threadCreateLink">
          スレッドをたてる
        </Link>
      </Header>
      <div className="container">
        <section className="threadContainer">
          <h1 className="threadTitle">{ThreadTitle}</h1>
          {threadData.length > 0 ? (
            <ul>
              {threadData.map((thread) => (
                <li key={thread.id} className="commentItem">
                  {thread.post}
                </li>
              ))}
            </ul>
          ) : (
            <p className="notComments">まだコメントがありません。</p>
          )}
        </section>
        <CommentCreate threadId={threadId} onCommentCreated={refreshThreadData} />
      </div>
    </>
  );
}
