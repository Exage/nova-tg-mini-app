import React, { useState } from 'react'
import classNames from 'classnames'
import styles from './DailyRewards.module.scss'

import { Top } from './Top/Top'
import { Cards } from './Cards/Cards'
import { Total } from './Total/Total'
import { Button } from '@/components/UI/Button/Button'

export const DailyRewards = () => {

    const { overlay, active, dialog, claim, ['claim__wrapper']: claimWrapper } = styles

    const [showWidnow, setShowWindow] = useState(true)

    const closeWindow = () => {
        setShowWindow(false)
    } 

    return (
        <div className={classNames(overlay, { [active]: showWidnow })}>
            <div className={dialog}>

                <Top />

                <Cards />

                <Total />

                <div className={claimWrapper}>
                    <Button className={[claim]} onClick={closeWindow}>
                        Claim
                    </Button>
                </div>

            </div>
        </div>
    )
}
