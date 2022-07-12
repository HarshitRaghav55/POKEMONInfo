import React from 'react';

import Cards  from './Cards';

// import './card-list.style.css';


const CardList = (props) => (
    
    <div className='card-list'>
        {props.pokemons.map(pokemon =>(
            <table><td><Cards key={pokemon.name} pokemon={pokemon}></Cards></td></table>
            ))}
            
        
    </div>
);
export default CardList;