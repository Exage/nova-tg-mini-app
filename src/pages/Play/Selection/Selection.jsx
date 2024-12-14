import React, { useEffect, useState } from 'react'
import styles from './Selection.module.scss'

import { Spaceships } from './Spaceships/Spaceships'
import { LinkButton } from '@/components/UI/LinkButton/LinkButton'

import { Navigate, useLocation } from 'react-router'

export const Selection = () => {

    const { chose, bottom } = styles

    const location = useLocation()
    const data = location.state

    const [chosenSpaceships, setChosenSpaceships] = useState([])

    if (!data.missionId) {
        return <Navigate to='/play' />
    }

    return (
        <div className={chose}>
            <div className="wrapper page__paddings-vertical">
                <h1>Choose starship</h1>

                <Spaceships
                    chosenSpaceships={chosenSpaceships}
                    setChosenSpaceships={setChosenSpaceships}
                />

                <div className={bottom}>
                    <LinkButton
                        disabled={chosenSpaceships.length === 0}
                        to='/play/confirm'
                        state={{ 
                            spaceshipsIDs: chosenSpaceships.map(ship => ship.spaceship.id),
                            missionId: data.missionId
                        }}
                    >
                        Start mission
                    </LinkButton>
                </div>

            </div>
        </div>
    )
}
