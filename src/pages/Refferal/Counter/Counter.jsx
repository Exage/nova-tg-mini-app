import React from 'react'

import styles from './Counter.module.scss'

export const Counter = () => {

    const { counter, text } = styles

    return (
        <div className={counter}>
            <span className={text}>
                100.000
            </span>
        </div>
    )
}
