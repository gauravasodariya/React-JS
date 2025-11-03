// import "./Pokemon.css";
import { useState,useEffect } from "react";

export const HowFetchAPI  = () => {
    const [pokemon, setPokemon] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);  

    const api='https://pokeapi.co/api/v2/pokemon/pikachu';

    const fetchPokemon =async ()=>{
        try{
            const res = await fetch(api);
            const data = await res.json();
            setPokemon(data);
            setLoading(false)
        }catch(error){
            console.log("Error fetching pokemon data:", error);
            setError(error);
            setLoading(false);
        }
    }

useEffect(()=>{
    fetchPokemon();
},[]);
  if(loading)
    return (
      <div>
        <h1>Loading....</h1>
      </div>
    );

  if(error)
    return (
      <div>
        <h1>Error: {error.message} </h1>
      </div>
    );
 return (
    <section className="container">
      <header>
        <h1> Lets Catch Pokemon</h1>
      </header>
      <ul className="card-demo">
        <li className="pokemon-card">
          <figure>
            <img
              src={pokemon.sprites.other.dream_world.front_default}
              alt={pokemon.name}
              className="pokemon-image"
            />
          </figure>
          <h1>{pokemon.name}</h1>
          <div className="grid-three-cols">
            <p className="pokemon-info">
              Height: <span> {pokemon.height} </span>
            </p>
            <p className="pokemon-info">
              Weight: <span> {pokemon.weight}</span>
            </p>
            <p className="pokemon-info">
              speed: <span>{pokemon.stats[5].base_stat}</span>
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
}