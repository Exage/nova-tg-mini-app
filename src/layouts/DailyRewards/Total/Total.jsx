import React from 'react'

import styles from './Total.module.scss'

export const Total = () => {

    const { total, text, points } = styles

    return (
        <div className={total}>
            <span className={text}>
                Total earned:
            </span>
            {' '}
            <span className={points}>
                0
            </span>
        </div>
    )
}
