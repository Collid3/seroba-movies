import DataContext from "../context/DataContext";
import "../styles/Header.css";
import React, { useContext } from "react";

const Header = () => {
  const { search, setSearch } = useContext(DataContext);

  return (
    <div className="header-container">
      <header>
        <h1>SEROBA MOVIES</h1>

        <nav>
          <ul className="nav-bar">
            <li>Home</li>
            <li>Trending</li>
            <li>Browse Movies</li>
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
    </div>
  );
};

export default Header;
