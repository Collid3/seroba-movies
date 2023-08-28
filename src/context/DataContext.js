import { createContext, useEffect, useState } from "react";
import api from "../API/api";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const API_MOVIES = "movie/popular?api_key=489e0dbd05e04e6f942dcc5be09579a8";
  const API_SEARCH =
    "search/movie?api_key=489e0dbd05e04e6f942dcc5be09579a8&query";
  const API_IMG = "https://image.tmdb.org/t/p/w500/";

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const response = await api.get(`/${API_MOVIES}`);
      setMovies(response.data.results);
    };

    getMovies();
  }, []);

  return (
    <DataContext.Provider value={{ movies, API_IMG, search, setSearch }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
