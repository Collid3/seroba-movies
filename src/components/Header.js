import { useNavigate } from "react-router-dom";
import DataContext from "../context/DataContext";
import "../styles/Header.css";
import React, { useContext, useEffect, useState } from "react";
import api from "../API/api";
import Loading from "./Loading";

const Header = () => {
  const { search, setSearch, setMovies } = useContext(DataContext);
  const [filter, setFilter] = useState("popular");
  const [loading, setLoading] = useState(false);
  const filterNav = [
    { search: "popular", name: "Popular" },
    { search: "upcoming", name: "Upcoming" },
    { search: "top_rated", name: "Top Rated" },
  ];
  const navigate = useNavigate(null);

  useEffect(() => {
    async function filterMovies() {
      setLoading(true);
      const response = await api.get(
        `/movie/${filter}?api_key=489e0dbd05e04e6f942dcc5be09579a8`
      );
      setMovies(response.data.results);
      window.scrollTo({ top: 0, behavior: "smooth" });
      navigate("/");
      return setLoading(false);
    }

    filterMovies();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter, setMovies]);

  return (
    <div className="header-container">
      {loading && <Loading />}

      <header>
        <h1
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            navigate("/");
          }}
        >
          SEROBA MOVIES
        </h1>

        <nav>
          <ul className="nav-bar">
            {filterNav.map((nav) => (
              <li
                key={nav.name}
                className={`${filter === nav.search ? "selected" : undefined}`}
                onClick={() => {
                  if (filter !== nav.search) {
                    setFilter(nav.search);
                  } else return;
                }}
              >
                {nav.name}
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <input
        className="search-movies-input"
        type="search"
        placeholder="Search Movie"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {search === "" && window.location.pathname === "/" && (
        <h4 style={{ textAlign: "start" }}>
          Showing results for{" "}
          <big>{filterNav.find((nav) => nav.search === filter).name}</big>{" "}
          Movies
        </h4>
      )}
    </div>
  );
};

export default Header;
