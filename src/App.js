import React from 'react';
import { useState } from 'react';
import './App.css';

function App() {
  const [queryName, setQueryName] = useState("")
  const [pokemon, setPokemon] = useState(null)
  return (
    <div className="App">
      <h1>Pokedex</h1>
      <form onSubmit={async (event) => {
        event.preventDefault();
        const sape= await fetch(`http://0.0.0.0:3030/?name=${queryName}`);
        const new_pokemon = await sape.json();
        console.log(new_pokemon)
        setPokemon(new_pokemon)}}>
      <input
          type="text" 
          value={queryName}
          placeholder="Charizard"
          onChange={(e) => setQueryName(e.target.value)}
        />
      <button type="submit">Get pokemon types</button>
      </form>
    {pokemon != null && (Object.keys(pokemon).length > 1 ? 
    <div>{pokemon.name}, {pokemon.types[0]}, {pokemon.types[1]}</div>
  : <div>Error: {pokemon.error}</div>)}
    </div>
  );
}

export default App;