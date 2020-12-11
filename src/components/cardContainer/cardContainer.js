import React from 'react';
import './cardContainer.css';

export const CardContainer=(props)=>(
    <div className='card-container' key={props.monster.id}>
    <img alt='monster' src={`https://robohash.org/${props.monster.id}?set=set2`}/>
    <h1>{props.monster.name}</h1>
    <p>{props.monster.email}</p>
    </div>
);