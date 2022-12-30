import { Pokemon } from './Pokemon'
import { Pokemons } from './Pokemons';
import pokemonObj from './pokemons.json'

// export const MOCK_POKEMONS = [
    
// ]
// let pokemon = Object.assign(new Pokemon, pokemonObj);
let pokemon = <Pokemon> JSON.parse(JSON.stringify(pokemonObj));
console.log(pokemon)
export default pokemon;