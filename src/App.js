import './App.css';
import { MovieList } from './MovieList';
import { NotFound } from './NotFound';
import { AddMovie } from './AddMovie';
import { Home } from './Home';
import { AddColor } from './AddColor';
import {Switch,Route,Redirect, useHistory} from "react-router-dom";
import { useState,useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { MovieDetails } from './MovieDetails';
import { EditMovie } from './EditMovie';


function App() {
  const [mode,setMode]=useState("dark")
  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });
  
  const [movieList,setMovieList]=useState([]);
  const history=useHistory();
  useEffect(()=>{
    fetch("https://61c412d4f1af4a0017d9927f.mockapi.io/movies").then((data)=>data.json()).then((mvs)=>setMovieList(mvs))
  },[]) 
  return (   
    <ThemeProvider theme={theme}>
      <Paper sx={{minHeight:"100vh",borderRadius:"0"}} elevation={24}  >

    <div className="App">
         <div className="router-container">
         <AppBar position="static">
        <Toolbar >
              <Button color="inherit" onClick={()=> history.push("/")}>Home</Button>
              <Button color="inherit" onClick={()=> history.push("/movie/add")}>Add movie form</Button>
              <Button color="inherit" onClick={()=> history.push("/movie")}>Movie</Button>
              <Button color="inherit" onClick={()=> history.push("/movie")}>Flims</Button>
              <Button color="inherit" onClick={()=> history.push("/colorgame")}>Colour Game</Button>
              <Button color="inherit" onClick={()=>setMode(mode==="light"?"dark":"light")}>{mode ==="light"? <Brightness4Icon />: <Brightness7Icon />}mode</Button>
              </Toolbar>
      </AppBar>
        </div>
        <Switch>
        <Route exact path="/">
                <Home/>
        </Route>
        <Route path="/movie/add">
           <AddMovie />
        </Route>
        <Route path="/movie/edit/:id"><EditMovie/></Route>
        <Route path="/movie/:id">
           <MovieDetails/>
        </Route>
        <Route path="/movie">
      <MovieList/>
      </Route>
      <Route path="/flims">
          <Redirect to="/movie" />
        </Route>
        <Route path="/colorgame">
             <AddColor/>
        </Route>
        <Route path="**">
          <NotFound/>
        </Route>
      </Switch>
    </div>
    </Paper >
    </ThemeProvider>
     );
}

export default App;


