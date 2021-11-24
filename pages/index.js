import Head from 'next/head'
import React, {useEffect, useState} from 'react';

const [resourceType,setResourceType] = useState('result');
const [item, setItems] = useState([]);


useEffect(() => {
  fetch(' https://pokeapi.co/api/v2/pokemon/?limit=100&offset=40/${resourceType}')
  .then(response => response.json())
  .then(json => setItems(json))
}, [resourceType]);

export default function Home() {
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

        <List.Item block key={pokemon.name}>
            <List.Content>
                {pokemon.name}
            </List.Content>
            <List.Content>
                {pokemon.url}
            </List.Content>
        </List.Item>
      </main>
        
    </div>
  )
}
