import Head from 'next/head'
import React, {useEffect, useState} from 'react';



export default function Home() {

  const [resourceType,setResourceType] = useState();
  const [item, setItems] = useState([]);

  useEffect(() => {
  fetch(`https://pokeapi.co/api/v2/pokemon/?limit=100&offset=40'${resourceType}`)
  .then(response => response.json())
  .then(json => setItems(json))
}, [resourceType]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Pokemon Database</title>
        
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{' '}
          <a className="text-blue-600">
            Pokemon Database
          </a>
        </h1>
        <input className="border-radius: 0.125rem border-color: currentColor disabled:opacity-75" 
        
        type="text"></input>

        <button 
          className="text-base font-medium rounded-lg p-3 bg-green-400"
          onClick={() => setResourceType('result')}>    
              Buscar Pokemon
        </button>
        <h1 className="text-9x1">{resourceType}</h1>
        <ul className="my-10">
          {items.map((item, index) => {
            return <li key={index} className="my-10 bg-gray-400">{JSON.stringify(item)}</li>
          })}
        </ul>
      </main>
        
    </div>
  )
}
