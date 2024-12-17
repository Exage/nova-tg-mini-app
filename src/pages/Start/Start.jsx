import React, { useState } from 'react'
import classNames from 'classnames'
import styles from './Start.module.scss'
import { Blurhash } from 'react-blurhash'

import logo from '@/assets/images/logo.svg'

import { Button } from '@/components/UI/Button/Button'

import bg from '@/assets/images/start/bg.png'

export const Start = ({ setStarted }) => {

    const { start, wrapper, top, logo: logoClass, bottom, text, btn, background } = styles

    const [bgLoading, setBgLoading] = useState(true)

    const handleStartBtn = () => {
        console.log('123')
    }

    const handleFileLoad = () => {
        setBgLoading(false)
    }

    return (
        <div className={start}>

            <div className={background}>
                {bgLoading && (
                    <Blurhash
                        hash='T142F[OGE4?w%fD%9u.8iutStRxF'
                        style={{ width: '100%', height: '100%' }}
                    />
                )}
                <img
                    src={bg}
                    alt="Background Photo"
                    style={{ display: bgLoading ? 'none' : 'block' }}
                    onLoad={handleFileLoad}
                />
            </div>

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

                    <Button className={[btn]} onClick={handleStartBtn}>
                        Start mission
                    </Button>

                </div>

            </div>
        </div>
    )
}
