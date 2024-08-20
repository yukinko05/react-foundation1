import { useEffect, useState } from 'react'
import './App.css'

type Threds = {
  id: number;
  title: string;
}

function App() {
  const [threads, setThreads] = useState<Threds[]>([]);

  useEffect(() => {
    fetch("https:railway.bulletinboard.techtrain.dev/threads?offset=20")
      .then(res => res.json())
      .then(data => setThreads(data))
      .catch(error => {
        console.log("スレッドのデータを取得できません", error)
      })
  });

  return (
    <>
      <div className='headerContainer'>
        <header className='homeHeader'>掲示板</header>
        <a className='thredCreateLink' href="">スレッドをたてる</a>
      </div>
      <section className='thredContainer'>
        <h1>新着スレッド</h1>
        <ul>
          {threads.map(thred => (
            <li className='thredCord' key={thred.id}>{thred.title}</li>
          ))}
        </ul>
      </section>

    </>
  )
}

export default App
