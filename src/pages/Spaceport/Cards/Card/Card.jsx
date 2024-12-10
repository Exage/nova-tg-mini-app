import React from 'react'
import classNames from 'classnames'

import styles from './Card.module.scss'

import ship from '@/assets/images/spaceport/ship.jpg'

import stat1 from '@/assets/images/spaceport/stat_1.svg'
import stat2 from '@/assets/images/spaceport/stat_2.svg'
import stat3 from '@/assets/images/spaceport/stat_3.svg'

import { Button } from '@/components/UI/Button/Button'

export const Card = ({ upgraded }) => {

    const {
        card,
        level,
        top,
        name,
        photo,
        type,
        bottom,
        stats,
        stat,
        ['stat__icon']: statIcon,
        ['stat__label']: statLabel,
        button,
        ['button__icon']: buttonIcon,
        ['upgraded']: upgradedClass
    } = styles

    return (
        <div className={card}>


            <div className={top}>
                <h2 className={name}>
                    Nebula seeker
                </h2>
                <h3 className={level}>1 lvl</h3>
            </div>

            <div className={photo}>
                <div className={classNames('ship-type', 'ship-type__legendary', type)}>Legendary</div>
                <img src={ship} alt="" />
            </div>

            <div className={bottom}>

                <div className={stats}>

                    <div className={stat}>
                        <div className={statIcon}>
                            <img src={stat1} alt="" />
                        </div>
                        <h3 className={statLabel}>
                            15
                        </h3>
                    </div>
                    <div className={stat}>
                        <div className={statIcon}>
                            <img src={stat2} alt="" />
                        </div>
                        <h3 className={statLabel}>
                            15
                        </h3>
                    </div>
                    <div className={stat}>
                        <div className={statIcon}>
                            <img src={stat3} alt="" />
                        </div>
                        <h3 className={statLabel}>
                            1.5
                        </h3>
                    </div>

                </div>

                <Button className={[button]}>
                    Upgrade
                </Button>

            </div>

        </div>
    )
}
