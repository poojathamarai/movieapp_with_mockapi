import IconButton from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { Movie } from "./Movie";
import { useEffect, useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import { useHistory } from 'react-router-dom';
export function MovieList() {
    const history=useHistory();
    const [movies,setMovieList]=useState([])
    const getMovies=()=>{
        fetch(`https://61c412d4f1af4a0017d9927f.mockapi.io/movies/`,{method:"GET"}).
        then((data)=>data.json()).then((mvs)=>setMovieList(mvs))
    }
    const deleteMovie=(id)=>{
        fetch(`https://61c412d4f1af4a0017d9927f.mockapi.io/movies/${id}`,{method:"DELETE"}).
        then((data)=>data.json())
        .then(()=>getMovies());
    }
    useEffect(getMovies,[]);
  return (
    <div className="movie-list">
      {movies.map(({ id,name, poster, rating, summary }) => (
        <Movie deleteButton={
        <IconButton 
            color="error" 
            onClick={deleteMovie(id)} 
             aria-label="delete movie">
           <DeleteIcon  />
        </IconButton>}
          editButton={
          <IconButton color="secondary" onClick={()=> history.push(`/movie/edit/${id}`)}  >
              <EditIcon/></IconButton>}
          
          id={id}
          name={name}
          poster={poster}
          rating={rating}
          summary={summary} />
      ))}
    </div>
  );
}
