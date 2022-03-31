import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";

export function MovieDetails() {
  const { id } = useParams();
  const [movie,setMovie]=useState([])
  const getMovie=()=>{
    fetch(`https://61c412d4f1af4a0017d9927f.mockapi.io/movies/${id}`,{method:"GET"}).then((data)=>data.json()).then((mv)=>setMovie(mv))
}
   useEffect(getMovie,[])

  const styles = {
    color: movie.rating >= 8.5 ? "teal" : "crimson",
    fontSize: "18px"
  };
  return (
    <div>
      <iframe
        width="100%"
        height="523"
        src={movie.trailer}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
      <div className="movie-detail-container">
        <div className="movie-specs">
          <h3 className="movie-name">{movie.name}</h3>
          <p style={styles} className="movie-rating">⭐{movie.rating}</p>
        </div>
        <p className="movie-summary">{movie.summary}</p>
      </div>
    </div>);
}
