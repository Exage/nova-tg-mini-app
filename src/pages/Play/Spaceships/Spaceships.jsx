import React from 'react'
import styles from './Spaceships.module.scss'

import { Link, useLocation } from 'react-router'

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

export const Spaceships = () => {

    const location = useLocation()

    const queryParams = new URLSearchParams(location.search)
    const missionId = queryParams.get('missionId')

    return (
        <div>
            <h1>Starships</h1>

            <h2>Mission Id: {missionId}</h2>

            <div style={{ display: 'flex', flexDirection: 'column', rowGap: '2rem', marginTop: '4rem' }}>
                {starships.map(item => <Link to={`/play/ticket?missionId=${missionId}&starshipId=${item.id}`}>{item.name}</Link>)}
            </div>
        </div>
    )
}
