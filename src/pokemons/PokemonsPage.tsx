import React from "react";
import pokemon from './MockPokemons';
import PokemonList from "./PokemonList";

function PokemonsPage() {
    return (
        <>        
            <h1>Pokemons</h1>
            <PokemonList pokemons={pokemon} />
        </>
    );
}

export default PokemonsPage;