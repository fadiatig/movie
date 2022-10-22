import "./App.css";
import { Routes, Route } from "react-router-dom";
import Search from "./components/Search/Search";
import MovieList from "./components/movielist/MovieList";
import MovieDetails from "./components/movieDetails/MovieDetails";

function App() {
  return (
    <div className="App">
      <Routes>
       
        <Route path="/" element={<Search />} />
        <Route path="/movielist" element={<MovieList />} />
        <Route path="/movielist/:id" element={<MovieDetails />} />
      </Routes>
    </div>
  );
}

export default App;
