import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import './Home.css';

type Threads = {
  id: number;
  title: string;
}

export default function Home() {
  const [threads, setThreads] = useState<Threads[]>([]);

  useEffect(() => {
    fetch("https://railway.bulletinboard.techtrain.dev/threads?offset=60")
      .then(res => res.json())
      .then(data => setThreads(data))
      .catch(error => {
        console.log("スレッドのデータを取得できません", error)
      })
  }, []);
  console.log(threads)
  return (
    <>
      <Header>
        <Link to="/threads/new" className='threadCreateLink' >スレッドをたてる</Link>
      </Header >
      <section className='threadContainer'>
        <h1>新着スレッド</h1>
        <ul>
          {threads.map(thread => (
            <li className='threadCord' key={thread.id}>{thread.title}</li>
          ))}
        </ul>
      </section>
    </>
  )
}