import { useState } from "react";
import { Link } from 'react-router-dom';
import "./threadsCreate.css";
import Header from "../Header/Header";

export default function ThreadsCreate() {
  const [createTitle, setCreateTitle] = useState("");
  // TODO:response後のメッセージ表示するStateを作成
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const postData = {
      title: createTitle
    }

    try {
      await fetch("https://railway.bulletinboard.techtrain.dev/threads", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });
      console.log("スレッドの作成完了:", postData)
    }
    catch (error) {
      console.log("スレッドのデータを取得できません", error)
    }

  }
  return (
    <>
      <Header>
        <Link to="/" className='threadCreateLink' >Topに戻る</Link>
      </Header>
      <section>
        <h1>スレッド新規作成</h1>
        <form onSubmit={handleSubmit}>
          <label>
            スレッドタイトル
            <input type="text"
              value={createTitle}
              name="threadTitle"
              onChange={(e) => setCreateTitle(e.target.value)}
              placeholder="タイトルを入力してください" />
          </label>
          <button type="submit">作成</button>
        </form>
      </section>
    </>
  )
}