import React from "react";
import "./style.css";
import { useEffect , useState} from 'react';

export default function App() {
  const [datos, setDatos] = useState([]);
  const [colorB,setColor] = useState([]);
  console.log(Math.floor(Math.random() * 10) + 1);
  const [num, setNum] = useState(292);

  useEffect(()=> {
    fetch("https://rickandmortyapi.com/api/character/"+num).then((res) => res.json()).then((data) => {console.log(data);
  setDatos(data)
  {data.status === "Alive" ? setColor("solid 5px green"): setColor("solid 5px red")}
});
  },[num]);
  return (
    <div style={{border:colorB}}>
      <h1>Rick & Morty API</h1>
      <h2>{datos.name} / {datos.status === "Alive" ? (
        <span style={{color: "green"}}>{datos.status}</span>
      ) : (
        <span style={{color: "red"}}>{datos.status}</span>
      )}</h2>

      <img src={datos.image}/>
      <h1>____________</h1>

      <button onClick={()=> {
        setNum(Math.floor(Math.random() * 500)+ 1);
      }}>Random Character</button>
    </div>
  );
}