import React from 'react';
import { Link } from "react-router-dom";
import './Cards.css'

export const Cards = props =>(
    <div className="card-container">
        <div className='column'>
        {/* <Link to="/PokemonInfo">  */}
            <img alt="pokemon" src={`https://img.pokemondb.net/artwork/large/${props.pokemon.name}.jpg`}/>
            <h2>{props.pokemon.name[0].toUpperCase()+props.pokemon.name.slice(1)}</h2>
            {/* </Link> */}
        </div>
    </div>
);
export default Cards