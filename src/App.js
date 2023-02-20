import React from 'react';
import './style.css';
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import PersonIcon from '@mui/icons-material/Person';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

export default function App() {
  const [datos, setDatos] = useState([]);
  const [colorB, setColor] = useState([]);
  console.log(Math.floor(Math.random() * 10) + 1);
  const [num, setNum] = useState(292);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/' + num)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setDatos(data);
        {
          data.status === 'Alive'
            ? setColor('solid 5px green')
            : setColor('solid 5px red');
        }
      });
  }, [num]);
  return (
    <div >
      <h1>Rick & Morty API</h1>

    <Grid display="flex" justifyContent="center" alignItems="center">
    <Card sx={{ maxWidth: 345 }} style={{ border: colorB }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={datos.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {datos.name} / {datos.status === 'Alive' ? (
          <Chip label={datos.status} color="success" size="small" />
        ) : (
          <Chip label={datos.status} color="error" size="small" />
        )}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  </Grid>
  <Button
        onClick={() => {
          setNum(Math.floor(Math.random() * 500) + 1);
        }}
        variant="contained"
        color="success"
      >
        <PersonIcon /> Random Character
      </Button>
    </div>
  );
}
