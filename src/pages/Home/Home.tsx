import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import styles from "./Home.module.css";

interface Threads {
  id: number;
  title: string;
}

export default function Home() {
  const [threads, setThreads] = useState<Threads[]>([]);
  const [offset, setOffset] = useState<number>(0);

  const fetchThreads = async (offset: number) => {
    fetch(`https://railway.bulletinboard.techtrain.dev/threads?offset=${offset}`)
      .then((res) => res.json())
      .then((data) => setThreads(data))
      .catch((error) => {
        console.log("スレッドのデータを取得できません。", error);
      });
  };

  useEffect(() => {
    fetchThreads(offset);
  }, [offset]);

  return (
    <>
      <Header>
        <Link to="/threads/new" className={styles.threadCreateLink}>
          スレッドをたてる
        </Link>
      </Header>
      <section className={styles.container}>
        <div className={styles.threadContainer}>
          <h1 className={styles.pageTitle}>New Threads</h1>
          <div>
            {/* TODO:2つのボタンをボタンコンポーネントにして表示する */}
            <button
              onClick={() => setOffset((prev) => prev - 10)}
              disabled={offset < 10}
              className={styles.backThreadButton}
            >
              前のスレッドへ
            </button>
            <button
              onClick={() => setOffset((prev) => prev + 10)}
              className={styles.nextThreadButton}
            >
              次のスレッドへ
            </button>
          </div>
        </div>
        <ul>
          {threads.map((thread) => (
            <Link to={`/threads/${thread.id}?title=${thread.title}`} key={thread.id}>
              <li className={styles.threadListItem}>{thread.title}</li>
            </Link>
          ))}
        </ul>
      </section>
    </>
  );
}
