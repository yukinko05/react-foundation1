import { useState, useEffect } from "react";
import Header from "../Header/Header";
import { Link, useParams, useLocation } from "react-router-dom";
import "./ThreadPage.css";
import CommentCreate from "../CommentCreate/CommentCreate";

type threadData = {
  id: string;
  post: string;
};

export default function ThreadPage() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const ThreadTitle = params.get("title");
  const { threadId } = useParams();

  const [threadData, setThreadData] = useState<threadData[]>([]);

  useEffect(() => {
    fetch(`https://railway.bulletinboard.techtrain.dev/threads/${threadId}/posts`)
      .then((res) => res.json())
      .then((data) => setThreadData(data.posts))
      .catch((error) => {
        console.log("スレッドのデータを取得できません。", error);
      });
  }, [threadData]);

  return (
    <>
      <Header>
        <Link to="/threads/new" className="threadCreateLink">
          スレッドをたてる
        </Link>
      </Header>
      <section>
        <h1>{ThreadTitle}</h1>
        <ul>
          {threadData.map((thread) => (
            <li key={thread.id}>{thread.post}</li>
          ))}
        </ul>
      </section>
      <CommentCreate threadId={threadId} />
    </>
  );
}
