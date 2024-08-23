import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './threadsCreate.css';
import Header from '../Header/Header';

export default function ThreadsCreate() {
  const [createTitle, setCreateTitle] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const postData = {
      title: createTitle,
    }

    try {
      await fetch("https://railway.bulletinboard.techtrain.dev/threads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      })
        .then(res => res.json())
        .then(data => {
          alert("スレッドの作成完了:" + data.title);
          setCreateTitle("");
          navigate("/");
        })
    }
    catch (error) {
      console.log("スレッドが作成できませんでした。", error)
    }
  };

  return (
    <>
      <Header>
        <Link to="/" className="threadCreateLink" >
          Topに戻る
        </Link>
      </Header>
      <section className="container">
        <h1 className="pageTitle">Create Thread</h1>
        <label className="labelTitle">
          スレッドタイトル
          <input
            type="text"
            value={createTitle}
            name="inputTitle"
            className="threadTitleInput"
            onChange={(e) => setCreateTitle(e.target.value)}
            placeholder="タイトルを入力してください"
          />
        </label>
        <button
          className="createButton"
          onClick={handleSubmit}
          disabled={createTitle === ""}
        >
          作成
        </button>
      </section>
    </>
  )
}