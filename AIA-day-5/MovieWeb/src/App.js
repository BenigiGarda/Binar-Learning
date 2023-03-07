import logo from "./logo.svg";
import "./App.css";
import MovieCard from "./components/MovieCard";
import { useEffect, useState } from "react";

function App() {
  const [loading, setIsLoading] = useState(true);
  const [movieData, setMovieData] = useState([]);
  const [isSortActive, setIsSortActive] = useState(false);
  const [sortResultState, setSortResultState] = useState("-");
  const fetchData = () => {
    setIsLoading(true);
    fetch(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=2e1207329c6fbfa5854975d89ab598de&language=en-US&page=1"
    )
      .then((res) => {
        return res.json();
      })
      .then((movie) => {
        setMovieData(movie.results);
      });
  };
  let sortedData = [];
  if (sortResultState === "Ascending") {
    sortedData = movieData.sort((a, b) => b.vote_average - a.vote_average);
  } else if (sortResultState === "Descending") {
    sortedData = movieData.sort((a, b) => a.vote_average - b.vote_average);
  } else {
    sortedData = movieData.sort((a, b) => a.id - b.id);
  }

  useEffect(() => {
    fetchData();
    setIsLoading(false);
  }, [loading]);

  return (
    <div className="App">
      <header className="App-header">
        <h2>Popular Movies</h2>
      </header>
      <div id="container">
        <div className="sort-container">
          <div
            className="sort-button"
            onClick={() => setIsSortActive(!isSortActive)}
          >
            <div className="sort-button-content">
              <p>Sort</p>
              {isSortActive ? <p>+</p> : <p>-</p>}
            </div>
          </div>
          <div>
            {isSortActive ? (
              <div className="sort-button-option">
                <p>Sort Results By</p>
                <select
                  value={sortResultState}
                  onChange={(e) => setSortResultState(e.target.value)}
                >
                  <option value="-">-</option>
                  <option value="Ascending">Popularity Ascending</option>
                  <option value="Descending">Popularity Descending</option>
                </select>
              </div>
            ) : null}
          </div>
        </div>
        <div className="movie-container">
          {movieData.map((data, index) => {
            return (
              <MovieCard
                name={data.original_title}
                release_date={data.release_date}
                image={data.poster_path}
                rating={data.vote_average}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
