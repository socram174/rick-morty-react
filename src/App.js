import React from 'react';
import './style.css';
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import PersonIcon from '@mui/icons-material/Person';

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
    <div style={{ border: colorB }}>
      <h1>Rick & Morty API</h1>
      <h2>
        {datos.name} /{' '}
        {datos.status === 'Alive' ? (
          <Chip label={datos.status} color="success" size="small" />
        ) : (
          <Chip label={datos.status} color="error" size="small" />
        )}
      </h2>

      <img src={datos.image} />

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
