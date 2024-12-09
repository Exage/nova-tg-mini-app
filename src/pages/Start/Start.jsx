import React from 'react'
import classNames from 'classnames'
import styles from './Start.module.scss'

import logo from '@/assets/images/logo.svg'

import { Button } from '@/components/UI/Button/Button'

export const Start = ({ setStarted }) => {

    const { start, wrapper, top, logo: logoClass, bottom, text, btn } = styles

    return (
        <div className={start}>
            <div className={wrapper}>

                <div className={top}>
                    <div className={logoClass}>
                        <img src={logo} alt="NOVA" />
                    </div>
                </div>

                <div className={bottom}>
                    
                    <p className={text}>
                        Send your ship to space — collect points, upgrade your fleet, and conquer the universe!
                    </p>

                    <Button className={[btn]} onClick={() => setStarted(true)}>
                        Tap to Launch
                    </Button>

                </div>

            </div>
        </div>
    )
}
