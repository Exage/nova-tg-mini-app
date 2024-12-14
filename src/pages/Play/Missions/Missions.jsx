import React from 'react'
import styles from './Missions.module.scss'

import { Cards } from './Cards/Cards'

export const Missions = () => {

    const { missions } = styles

    return (
        <div className={missions}>
            <div className="wrapper page__paddings-vertical">

                <h1 className='page__title'>Missions</h1>

                <Cards />
            
            </div>
        </div>
    )
}
