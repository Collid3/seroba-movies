import "./App.css";
import { Routes, Route } from "react-router-dom";
import Movies from "./pages/Movies";
import MoviePage from "./pages/MoviePage";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/*" element={<Movies />} />
        <Route path="/movie/:id" element={<MoviePage />} />
      </Routes>
    </div>
  );
}

export default App;
