import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import ThreadsCreate from "./pages/ThreadsCreate/ThreadsCreate";
import TreadsPage from "./pages/ThreadPage/ThreadPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/threads/new" element={<ThreadsCreate />} />
        <Route path="/threads/:threadId" element={<TreadsPage />} />
      </Routes>
    </Router>
  );
}
