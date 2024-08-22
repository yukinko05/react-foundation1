import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import ThreadsCreate from './ThreadsCreate/ThreadsCreate';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/threads/new" element={<ThreadsCreate />} />
      </Routes>
    </Router>
  )
}
