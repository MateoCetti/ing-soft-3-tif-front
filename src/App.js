import React from 'react';
import { useState } from 'react';
import './App.css';

function App() {
  const [queryName, setQueryName] = useState("")
  const [pokemon, setPokemon] = useState(null)
  return (
    <div className="container h-100 text-white">
      <div className='row'>
        <div className='col-12 text-center'>
          <h1 id="main-header">Pokedex</h1>
        </div>
      </div>
      <div className='row'>
        <div className='col-12 text-center'>
          <form onSubmit={async (event) => {
            event.preventDefault();
            const res = await fetch(`${process.env.REACT_APP_BACK_URI}/pokemon/?name=${queryName}`);
            const new_pokemon = await res.json();
            setPokemon(new_pokemon)
          }}>
            <input
              type="text"
              id="pokemon-input"
              value={queryName}
              placeholder="Charizard"
              onChange={(e) => setQueryName(e.target.value)}
            />
            <button id="submitButton" type="submit" className="btn btn-primary">Get pokemon</button>
          </form>

        </div>
      </div>
      {pokemon != null && (Object.keys(pokemon).length > 1 ?
        <div className='text-white'>
          <div id="pokemon-data" className="row">
            <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemon.number}.png`} alt="" />
          </div>
          <div id="pokemon-name">
            {pokemon.name}  
          </div>
          <div id="pokemon-types">
          {pokemon.types[0]}, {pokemon.types[1]}
          </div>
        </div>
        : <div id="error-text" className='text-white'>Error: {pokemon.error}</div>)}
    </div>
  );
}

export default App;
