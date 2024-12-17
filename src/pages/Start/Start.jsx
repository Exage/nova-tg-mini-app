import React, { useState } from 'react'
import styles from './Start.module.scss'

import logo from '@/assets/images/logo.svg'

import { Button } from '@/components/UI/Button/Button'

import { Background } from './Background/Background'
import { ReactSVG } from 'react-svg'

export const Start = ({ setStarted }) => {

    const { start, wrapper, top, logo: logoClass, logoMain, logoBlur, bottom, text, btn } = styles

    const handleStartBtn = () => {
        console.log('123')
    }

    return (
        <div className={start}>

            <Background />

            <div className={wrapper}>

                <div className={top}>
                    <div className={logoClass}>
                        {/* <ReactSVG className={logoVector} src={logo} />
                        <ReactSVG className={logoBlur} src={logo} /> */}
                        <img className={logoMain} src={logo} alt="NOVA" />
                        <img className={logoBlur} src={logo} alt="NOVA" />
                    </div>
                </div>

                <div className={bottom}>

                    <p className={text}>
                        Send your ship to space — collect points, upgrade your fleet, and conquer the universe!
                    </p>

                    <Button className={[btn]} onClick={handleStartBtn}>
                        Start mission
                    </Button>

                </div>

            </div>
        </div>
    )
}
