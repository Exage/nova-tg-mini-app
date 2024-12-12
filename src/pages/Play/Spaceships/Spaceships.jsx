import React from 'react'
import styles from './Spaceships.module.scss'

import { useLocation } from 'react-router'

import { Starships } from './Starships/Starships'

export const Spaceships = () => {
    return (
        <div>
            <div className="wrapper page__paddings-vertical">
                <h1>Choose starship</h1>

                <Starships />

            </div>
        </div>
    )
}
