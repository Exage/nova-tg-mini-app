import React from 'react'
import { ReactSVG } from 'react-svg'

import styles from './Card.module.scss'

import ship from '@/assets/images/spaceport/ship.jpg'
import classNames from 'classnames'

import stat1 from '@/assets/icons/spaceport/stat_1.svg'
import stat2 from '@/assets/icons/spaceport/stat_2.svg'
import stat3 from '@/assets/icons/spaceport/stat_3.svg'

import upgradeIcon from '@/assets/icons/spaceport/upgrade.svg'

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

            <span className={level}>1 lvl</span>

            <div className={top}>
                <h3 className={name}>
                    Nebula seeker
                </h3>
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
                            15
                        </h3>
                    </div>

                </div>

                <button className={classNames(button, { [upgradedClass]: upgraded })}>
                    <ReactSVG 
                        src={upgradeIcon}
                        className={buttonIcon} 
                    />
                    Upgrade
                </button>

            </div>

        </div>
    )
}
