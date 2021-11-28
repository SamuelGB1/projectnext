import Head from 'next/head'
import React, {useEffect, useState} from 'react';
import dynamic from 'next/dynamic';

export default function Home() {

  const [numero, setNumero] = useState("0");
  const [mxpokedex, setMxpokedex] = useState("1");
  const [items, setItems] = useState([]);

  useEffect(() => {

  window.addEventListener("click", evento);
  fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${mxpokedex}&offset=${numero}`)
  .then(response => response.json())
  .then(json => setItems(json))
}, [numero, mxpokedex]);

  const dinamico = dynamic(() => import('../components/dinamic/useEffectComp'), {
     ssr: false,
   });

  const evento = () => {
    console.log('Funciona')
  }  

  const data = items["results"];

  let mostrar = "";

  for(const i in data) {
    mostrar = mostrar + data[i]["name"] + " ";
  }

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
        
        <form>
          <input className="border-radius: 0.125rem border-color: currentColor disabled:opacity-75" 
          
          type="text" placeholder="Inserte número de la Pokedex" name="pokedex" onChange={event => setNumero(event.target.value)}>

          </input>

          <br></br>
          <br></br>

          <input className="border-radius: 0.125rem border-color: currentColor disabled:opacity-75" 
          
          type="text" placeholder="Inserte el número máximo de Pokemon" name="maxPoke" onChange={event => setMxpokedex(event.target.value)}>
            
          </input>

          <br></br>
          <br></br>

          {/* <button 
            className="text-base font-medium rounded-lg p-3 bg-green-400"
            onClick={() => setResourceType('result')}>    
                Buscar Pokemon
          </button> */}
        </form>

       
        <h1 className="text-9x1">{}</h1>
        <div>
          <p>{mostrar}</p>
        </div>
        <dinamico />
      </main>
        
    </div>
  )
}
