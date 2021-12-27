import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IconButton from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { Counter } from "./Counter";
import InfoIcon from '@mui/icons-material/Info';

export function Movie({ editButton,deleteButton, name, poster, rating, summary, id }) {
  const styles = {
    color: rating >= 8.5 ? "teal" : "crimson",
    fontSize: "18px"
  };
  const [show, setShow] = useState(false);
  const descriptionStyles = { display: show ? "block" : "none" };
  const history = useHistory();
  return (
    <Card className="movie-container">
      <CardMedia component="img" image={poster} alt="Image" className="movie-poster" />
      <CardContent>
        <div className="movie-specs">
          <h3 className="movie-name">{name}
            <IconButton
              onClick={() => history.push(`/movie/${id}`)}
              color="primary"
              aria-label="movie details">
              <InfoIcon />
            </IconButton>
            <IconButton
              onClick={() => setShow(!show)}
              color="primary"
              aria-label="add to shopping cart">
              {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}</IconButton>
          </h3>

          <p style={styles} className="movie-rating">⭐{rating}</p>
        </div>
        <p style={descriptionStyles} className="movie-summary">{summary}</p>
        <CardActions>
          <Counter />
          {deleteButton}
          {editButton}
        </CardActions>
      </CardContent>
    </Card>
  );
}
