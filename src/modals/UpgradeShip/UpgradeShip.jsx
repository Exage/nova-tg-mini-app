import React from 'react'
import classNames from 'classnames'
import styles from './UpgradeShip.module.scss'

import { Modal } from '@/components/Modal/Modal'

import { useModalsContext } from '@/hooks/useModalsContext'

import stat2 from '@/assets/images/spaceport/stat_2.svg'
import stat3 from '@/assets/images/spaceport/stat_3.svg'
import { Button } from '@/components/UI/Button/Button'

export const UpgradeShip = () => {
    const {
        wrapper,
        top,
        photo,
        type,

        info,
        ['info__name']: infoName,
        ['info__level']: infoLevel,

        stats,
        stat,
        ['stat__info']: statInfo,
        ['stat__icon']: statIcon,
        ['stat__points']: statPoints,
        ['stat__progress']: statProgress,
        ['stat__progress-bar']: statProgressBar,
        ['stat__label']: statLabel,

        bottom
    } = styles

    const { data } = useModalsContext()

    return (
        <Modal
            modalId='upgradeShip'
        >
            {Object.keys(data).length > 0 && (
                <div className={wrapper}>

                    <div className={top}>
                        <div className={classNames(type, 'ship-type', `ship-type__${data.type}`)}>{data.type}</div>
                        <div className={photo}>
                            <img src={data.photo} alt="" />
                        </div>
                        <div className={info}>
                            <h3 className={infoName}>
                                {data.name}
                            </h3>
                            <h4 className={infoLevel}>
                                {data.level} lvl &gt; &gt; &gt; {data.level + 1} lvl
                            </h4>
                        </div>
                    </div>

                    <div className={stats}>

                        <div className={stat}>
                            <div className={statIcon}>
                                <img src={stat2} alt="" />
                            </div>
                            <div className={statInfo}>
                                <div className={statPoints}>
                                    300 (+ 2)
                                </div>
                                <div className={statProgress}>
                                    <div className={statProgressBar} style={{ width: '42%' }}></div>
                                </div>
                                <div className={statLabel}>
                                    MINING SPEED
                                </div>
                            </div>
                        </div>
                        <div className={stat}>
                            <div className={statIcon}>
                                <img src={stat3} alt="" />
                            </div>
                            <div className={statInfo}>
                                <div className={statPoints}>
                                    1.5 (+ 2)
                                </div>
                                <div className={statProgress}>
                                    <div className={statProgressBar} style={{ width: '60%' }}></div>
                                </div>
                                <div className={statLabel}>
                                    CARGO CAPACITY
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className={bottom}>
                        <Button>
                            Upgrade
                        </Button>
                    </div>

                </div>
            )}
        </Modal>
    )
}
