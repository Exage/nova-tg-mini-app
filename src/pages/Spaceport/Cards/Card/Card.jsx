import React from 'react'
import classNames from 'classnames'

import styles from './Card.module.scss'

import stat1 from '@/assets/images/spaceport/stat_1.svg'
import stat2 from '@/assets/images/spaceport/stat_2.svg'
import stat3 from '@/assets/images/spaceport/stat_3.svg'


export const Card = ({ data }) => {

    const {
        card,
        info,
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
    } = styles

    return (
        <div className={card}>
            <div className={classNames(type, 'ship-type', `ship-type__${data.type}`)}>{data.type}</div>

            <div className={photo}>
                <img src={data.photo} alt="" />
            </div>

            <div className={info}>
                <div className={top}>
                    <h2 className={name}>
                        {data.name}
                    </h2>
                    <h3 className={level}>
                        {data.level} lvl
                    </h3>
                </div>
                <div className={stats}>

                    <div className={stat}>
                        <div className={statIcon}>
                            <img src={stat2} alt="" />
                        </div>
                        <h3 className={statLabel}>
                            1.5
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
            </div>


            {/* <div className={bottom}>

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

            </div> */}

        </div>
    )
}
