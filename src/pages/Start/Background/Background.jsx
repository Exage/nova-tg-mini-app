import React, { useState } from 'react'
import styles from './Background.module.scss'
import { Blurhash } from 'react-blurhash'

import bg from '@/assets/images/start/bg.jpg'

const photoHash = 'L142F[OGE4iw?w%fD%My9u.8iu9G'

export const Background = () => {

    const { background, wrapper, hash, photo } = styles

    const [bgLoaded, setBgLoaded] = useState(false)

    const handleLoadPhoto = () => {
        setBgLoaded(true)
    }

    return (
        <div className={wrapper}>
            <div className={background}>
                <Blurhash
                    className={hash}
                    hash={photoHash}
                    style={{ width: '100%', height: '100%', opacity: bgLoaded ? '0' : '1' }}
                />
                <img
                    src={bg}
                    alt="Background Photo"
                    className={photo}
                    style={{ display: bgLoaded ? 'block' : 'none' }}
                    onLoad={handleLoadPhoto}
                />
            </div>
        </div>
    )
}
