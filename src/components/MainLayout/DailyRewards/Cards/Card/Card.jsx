import React from 'react'
import classNames from 'classnames'
import styles from './Card.module.scss'

import currencyBig from '@/assets/images/gem-big.svg'

export const Card = ({ claimed }) => {

    const { card, content, day, label, currency, points, ['claimed']: claimedClass } = styles

    return (
        <div className={classNames(card, { [claimedClass]: claimed })}>

            <div className={content}>
                <div className={points}>
                    1
                </div>
                <div className={label}>
                    FREE NPOINT
                </div>
                <div className={currency}>
                    <img src={currencyBig} alt="" />
                </div>
            </div>
            <div className={day}>
                Day 1
            </div>

        </div>
    )
}
