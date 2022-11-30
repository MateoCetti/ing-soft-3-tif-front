import React from "react";

export default function ErrorPokemon() {
  return (
    <>
      <div className="card text-white border rounded border-light border-2 my-3 bg-secondary">
        <div className="card-body text-center bg-danger ">
          <div id="pokemon-error"><b>Error: </b>Pokemon no encontrado.</div>
        </div>
      </div>
    </>
  );
}
