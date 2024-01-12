import "./App.css";
import { Routes, Route } from "react-router-dom";
import Movies from "./pages/Movies";
import MoviePage from "./pages/MoviePage";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/*" element={<Movies />} />
        <Route path="/movie/:id" element={<MoviePage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
