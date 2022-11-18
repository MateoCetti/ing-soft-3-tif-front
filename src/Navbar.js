import React from "react";

export default function Navbar() {
  return (
    <>
      <nav className="navbar w-100 navbar-dark bg-danger ">
        <div className="container-fluid ">
          <a className="navbar-brand" href={window.location.href}>
            Pokedex
          </a>
        </div>
      </nav>
    </>
  );
}
