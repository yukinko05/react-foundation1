import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import styles from "./ThreadsCreate.module.css";

export default function ThreadsCreate() {
  const [createTitle, setCreateTitle] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const postData = {
      title: createTitle,
    };

    try {
      const res = await fetch("https://railway.bulletinboard.techtrain.dev/threads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });
      const data = await res.json();
      console.log(data);
      alert("スレッドの作成完了:" + data.title);
      setCreateTitle("");
      navigate("/");
    } catch (error) {
      console.log("スレッドが作成できませんでした。", error);
    }
  };

  return (
    <>
      <Header>
        <Link to="/" className={styles.topLink}>
          Topに戻る
        </Link>
      </Header>
      <section className={styles.container}>
        <h1 className={styles.pageTitle}>Create Thread</h1>
        <label className={styles.labelTitle}>
          スレッドタイトル
          <input
            type="text"
            value={createTitle}
            name="inputTitle"
            className={styles.threadTitleInput}
            onChange={(e) => setCreateTitle(e.target.value)}
            placeholder="タイトルを入力してください"
          />
        </label>
        <button className={styles.createButton} onClick={handleSubmit} disabled={createTitle === ""}>
          作成
        </button>
      </section>
    </>
  );
}
