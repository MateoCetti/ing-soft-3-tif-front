import React from "react";

export default function PokemonCard({ pokemon }) {
  const image_url = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemon.number}.png`;

  return (
    <>
      <div className="card text-white border rounded border-light border-2 my-3 bg-secondary">
        <img className="img-fluid" src={image_url} />
        <div className="card-body text-center bg-dark rounded-bottom border-top border-light">
          <div id="pokemon-name"><b>Nombre: </b>{pokemon.name}</div>
          <div id="pokemon-types">
            <b>Tipo/s: </b>
            {pokemon.types[0]}{pokemon.types[1]  && ", "+pokemon.types[1] }
          </div>
        </div>
      </div>
    </>
  );
}
