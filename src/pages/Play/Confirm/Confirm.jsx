import React from 'react'

import styles from './Confirm.module.scss'

import { useLocation } from 'react-router'

import { Route } from './Route/Route'
import { Button } from '@/components/UI/Button/Button'

export const Confirm = () => {

    const {
        ticket,
        top,
        routes,
        button,
        bottom,
        ['bottom__label']: bottomLabel,
    } = styles

    const location = useLocation()
    const data = location.state

    const handleStart = () => {
        alert('Your ship is on its way!')
    }

    if (!data.missionId && !data.spaceshipsIDs) {
        return <Navigate to='/play/selection' />
    }

    return (
        <div className='wrapper page__paddings-vertical'>

            <div className={ticket}>
                <div className={top}>
                    <span>STELLAR VOYAGER</span>
                    <span>5/74 - R.M.T</span>
                </div>

                <div className={routes}>
                    <Route />
                    <Route />
                </div>

                <div className={bottom}>
                    <h3 className={bottomLabel}>Pass</h3>
                </div>
            </div>

            <div className={button}>
                <Button
                    onClick={handleStart}
                >
                    Start
                </Button>
            </div>

        </div>
    )
}
