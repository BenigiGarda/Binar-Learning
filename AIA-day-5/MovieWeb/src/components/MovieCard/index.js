import "./styles.css";
export default function MovieCard({ release_date, name, image, rating }) {
  return (
    <div className="container">
      <div className="img-container">
        <img src={`https://image.tmdb.org/t/p/w500/${image}`}></img>
      </div>
      <div className="movie-desc">
        <div className="movie-score">
          <div className="inner-circle"></div>
          <p>{rating * 10}%</p>
        </div>
        <div className="movie-detail">
          <p className="title">{name}</p>
          <p className="release-date">{release_date}</p>
        </div>
      </div>
    </div>
  );
}
