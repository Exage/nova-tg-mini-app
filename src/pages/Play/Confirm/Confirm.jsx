import React from 'react'

import styles from './Confirm.module.scss'

import { useLocation } from 'react-router'

export const Confirm = () => {

    const location = useLocation()

    const queryParams = new URLSearchParams(location.search)
    const missionId = queryParams.get('missionId')
    const starshipId = queryParams.get('starshipId')

    return (
        <div>
            <h1>Ticket</h1>
            <h2>Mission id: {missionId}</h2>
            <h2>Starship id: {starshipId}</h2>
        </div>
    )
}
