import { useHistory,useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
export function EditMovie() {
    const {id} = useParams();
   const [movie,setMovie]=useState([]);
   const getMovie=()=>{
    fetch(`https://61c412d4f1af4a0017d9927f.mockapi.io/movies/${id}`,{method:"GET"})
        .then((data)=>data.json())
        .then((mv)=>setMovie(mv))
   };
    useEffect(getMovie,[]);
    return movie?<UpdateMovie movie={movie}:/>:" ";
}
function UpdateMovie({movie}){
  const [name, setName] = useState(movie.name);
  const [poster, setPoster] = useState(movie.poster);
  const [rating, setRating] = useState(movie.rating);
  const [summary, setSummary] = useState(movie.summary);
  const history = useHistory();
  const addMovie = () => {
    const newMovie = {
      name: name,
      poster: poster,
      rating: rating,
      summary: summary
    };

    fetch(`https://61c412d4f1af4a0017d9927f.mockapi.io/movies/`,
      {
        method: "PUT",
        body: JSON.stringify(newMovie),
        headers: { "Content-Type": "application/json" }
      }).then((data) => data.json()).then(() => history.push("/movie"));

  };
  return (<div className="add-movie-form">
    <TextField id="standard-basic" label="Enter the name" variant="standard"
      value={name}
      onChange={(event) => setName(event.target.value)} />
    <TextField id="standard-basic" label="Enter the poster" variant="standard"
      value={poster}
      onChange={(event) => setPoster(event.target.value)} />
    <TextField id="standard-basic" label="Enter the rating" variant="standard"
      value={rating}
      onChange={(event) => setRating(event.target.value)} />
    <TextField id="standard-basic" label="Enter the summary" variant="standard"
      value={summary}
      onChange={(event) => setSummary(event.target.value)} />
    <Button
      variant="contained"
      onClick={addMovie}>Save</Button>
  </div>);
}
