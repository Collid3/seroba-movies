import { createContext, useState } from "react";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  // const API_SEARCH =
  //   "search/movie?api_key=489e0dbd05e04e6f942dcc5be09579a8&query";
  const API_IMG = "https://image.tmdb.org/t/p/w500/";

  const [movies, setMovies] = useState([]);

  return (
    <DataContext.Provider
      value={{ movies, API_IMG, search, setSearch, setMovies }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
