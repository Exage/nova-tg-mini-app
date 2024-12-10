import React from 'react'
import styles from './Cards.module.scss'

import { Card } from './Card/Card'

export const Cards = () => {

    const { wrapper, cards } = styles 

    return (
        <div className={wrapper}>
            <div className={cards}>
                <Card claimed={true} />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}
