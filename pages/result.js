import Head from 'next/head'
import React, {useEffect, useState} from 'react';

export default function result() {
  const [resourceType,setResourceType] = useState();
  const [items, setItems] = useState([]);

  useEffect(() => {
  fetch(`https://pokeapi.co/api/v2/pokemon/?limit=100&offset=40'${resourceType}`)
  .then(response => response.json())
  .then(json => setItems(json))
}, [resourceType]);

  const data = items["results"];

  let mostrar = "";

  for(const i in data) {
    mostrar = mostrar + data[i]["name"];
  }


    return(
       <p>Hola</p>
    )
}