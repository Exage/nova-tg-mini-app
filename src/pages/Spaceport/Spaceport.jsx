import React from 'react'
import styles from './Spaceport.module.scss'

import { Cards } from './Cards/Cards'

export const Spaceport = () => {

    const { spaceport } = styles

    return (
        <div className={spaceport}>

            <div className="wrapper">
                <h1 className='page__title'>
                    Spaceport
                </h1>
            </div>

            <Cards />

        </div>
    )
}
