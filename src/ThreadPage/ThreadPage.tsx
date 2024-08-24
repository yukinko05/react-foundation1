import { useState, useEffect } from "react";
import Header from "../Header/Header";
import { Link, useParams } from "react-router-dom";

type threadData = {
  title: number;
  title: string;
};

export default function ThreadPage() {
  const { threadId } = useParams();
  const [threadData, setThreadData] = useState([]);

  useEffect(() => {
    fetch(
      `https://railway.bulletinboard.techtrain.dev/threads/d386569f-3f20-41d6-8342-712a288f4ca7/posts`
    )
      .then((res) => res.json())
      .then((data) => console.log(data.posts))
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
        <h1>{threadData}</h1>
      </section>
    </>
  );
}
