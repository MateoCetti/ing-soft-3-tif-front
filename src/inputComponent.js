import React from "react";

export default function InputComponent({
  queryName,
  setQueryName,
  setPokemon,
}) {
  async function get_pokemon(event, name) {
    const params = isNaN(name) ? `?name=${name}` : `?number=${name}` 
    event.preventDefault();
    const res = await fetch(
      `${process.env.REACT_APP_BACK_URI}/pokemon/${params}`
    );
    console.log(res);
    const new_pokemon = await res.json();
    setPokemon(new_pokemon);
  }
  return (
    <div className="bg-secondary text-dark border border-light border-2 rounded-3 py-2 my-4">
      <div className="row">
        <div className="col-12 text-center text-light">
          <p>
            <b>Ingrese el nombre o numero del pokemon</b>
          </p>
        </div>
      </div>
      <form onSubmit={(e) => get_pokemon(e, queryName)}>
        <div className="row mx-2 mb-lg-3">
          <div className="input-group">
            <input
              className="form-control"
              type="text"
              id="pokemon-input"
              value={queryName}
              placeholder="Charizard"
              onChange={(e) => setQueryName(e.target.value)}
            />
            <button id="submitButton" type="submit" className="btn btn-dark">
              <i className="bi bi-search"></i>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
