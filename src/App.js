import React from 'react';
import { useState } from 'react';
import './App.css';

function App() {
  const [queryName, setQueryName] = useState("")
  const [pokemon, setPokemon] = useState(null)
  return (
    <div className="Container text-white">
      <div className='row'>
        <div className='col-12 text-center'>
          <h1>Pokedex</h1>
        </div>
      </div>
      <div className='row'>
        <div className='col-12 text-center'>
          <form onSubmit={async (event) => {
            event.preventDefault();
            const sape = await fetch(`${process.env.REACT_APP_BACK_URI}?name=${queryName}`);
            console.log(process.env.REACT_APP_BACK_URI)
            console.log(sape)
            const new_pokemon = await sape.json();
            setPokemon(new_pokemon)
          }}>
            <input
              type="text"
              value={queryName}
              placeholder="Charizard"
              onChange={(e) => setQueryName(e.target.value)}
            />
            <button type="submit" className="btn btn-primary">Get pokemon types</button>
          </form>

        </div>
      </div>
      {pokemon != null && (Object.keys(pokemon).length > 1 ?
        <div className='text-white'>{pokemon.name}, {pokemon.types[0]}, {pokemon.types[1]}</div>
        : <div className='text-white'>Error: {pokemon.error}</div>)}
    </div>
  );
}

export default App;
