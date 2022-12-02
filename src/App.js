import React from "react";
import { useState } from "react";

import InputComponent from "./inputComponent";
import Navbar from "./Navbar";
import PokemonCard from "./PokemonCard";
import ErrorPokemon from "./ErrorPokemon";

export default function App() {
  const [queryName, setQueryName] = useState("");
  const [pokemon, setPokemon] = useState(null);

  return (
    <>
      <Navbar />
      <div
        style={{ height: "100%" }}
        className="container-fluid fill bg-light text-white pb-5 pt-2"
      >
        <div style={{ height: "100%" }} className="row justify-content-center">
          <div className="col-lg-6">
            <InputComponent
              queryName={queryName}
              setQueryName={setQueryName}
              setPokemon={setPokemon}
            />
          </div>
        </div>

        {pokemon != null &&
          (Object.keys(pokemon).length > 1 ? (
            <div className="row justify-content-center">
              <div className="col-lg-4">
                <PokemonCard pokemon={pokemon} />
              </div>
            </div>
          ) : (
            <div className="row justify-content-center">
              <div className="col-lg-4">
                <ErrorPokemon />
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
