import React from 'react'
import './Starships.module.scss'

import { Link, useLocation } from 'react-router'

import { Starship } from './Starship/Starship'

const starships = [
    {
        id: 'q111',
        name: 'Starship 1'
    },
    {
        id: 'b222',
        name: 'Starship 2'
    },
    {
        id: 'm333',
        name: 'Starship 3'
    },
]

export const Starships = () => {

    return (
        <div style={{ display: 'flex', flexDirection: 'column', rowGap: '2rem', marginTop: '4rem' }}>
            {starships.map(item => <Starship key={item.id} data={item} />)}
        </div>
    )
    
}
