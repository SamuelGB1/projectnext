import Head from 'next/head'
import React, {useEffect, useState} from 'react';


export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Pokemon Database</title>
        
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{' '}
          <a className="text-blue-600" href="https://nextjs.org">
            Pokemon Database
          </a>
        </h1>
        <input className="border-radius: 0.125rem border-color: currentColor disabled:opacity-75" 
        
        type="text"></input>

        <button 
          className="text-base font-medium rounded-lg p-3 bg-green-400"
          onclick={() => setResourceType('result')}>    
              Buscar Pokemon
        </button>
      </main>
        
    </div>
  )
}
