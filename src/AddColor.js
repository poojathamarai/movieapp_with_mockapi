import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Icon from '@mui/material/Icon';
export function AddColor() {
  const [color, setColor] = useState("");
  const styles = { background: color };
  const [colorList, setColorList] = useState(["teal", "red", "green"]);
  return (
    <div>
      <TextField id="filled-basic" label="Enter a color" variant="filled" value={color}
        onChange={(event) => setColor(event.target.value)}
        style={styles} />
      <Icon color="primary"
        onClick={() => setColorList([...colorList, color])} sx={{ fontSize: 50 }}>add_circle</Icon>
      {colorList.map((clr) => (<ColorBox clr={clr} />))}
    </div>
  );
}
function ColorBox({clr}){
    const styles={
        height:"25px",
        width:"250px",
        background:clr,
        marginTop:"10px"}
  return( <div style={styles}></div>)
}

