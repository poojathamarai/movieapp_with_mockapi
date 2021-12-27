import { useState } from 'react';
import Button from '@mui/material/Button';
import Badge from '@mui/material/Badge';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';

export function Counter() {
  const [like, setLike] = useState(0);
  const [dislike, setDisLike] = useState(0);
  return (
    <div className="counter-container">
      <Button
        variant="text"
        onClick={() => {
          setLike(like + 1);
        }}> <Badge badgeContent={like} color="primary"><ThumbUpAltIcon /></Badge></Button>
      <Button variant="text"
        onClick={() => {
          setDisLike(dislike + 1);
        }}><Badge badgeContent={dislike} color="error"><ThumbDownAltIcon color="error" /></Badge></Button>
    </div>
  );
}
