import React from 'react'
import styles from './Top.module.scss'

export const Top = () => {

    const { top, title, subtitle } = styles

    return (
        <div className={top}>
            <h2 className={title}>
                YOUR DAILY REWARDS
            </h2>
            <h3 className={subtitle}>
                get your awards and continue the series!
            </h3>
        </div>
    )
}
