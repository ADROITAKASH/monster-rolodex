import React from 'react';
import './cardList.css';
import {CardContainer} from '../cardContainer/cardContainer';

export const CardList=(props)=>(
    <div className='card-list'>
    {props.monsters.map(monster=>(
        <CardContainer monster={monster}></CardContainer>
        // <div key={monster.id}>{monster.name}</div>
    ))}
    </div>
);