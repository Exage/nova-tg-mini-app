import React, { useState } from 'react'
import { Blurhash } from 'react-blurhash'

const photoHash = 'L142F[OGE4iw?w%fD%My9u.8iu9G'

export const Background = () => {
    const [bgLoaded, setBgLoaded] = useState(false)

    const handleLoadPhoto = () => {
        setBgLoaded(true)
    }

    return (
        <div className={'absolute top-0 left-0 w-full h-full overflow-hidden z-10'}>
            {/* <div className={'relative h-full'}>
                <Blurhash
                    className={'absolute top-0 left-0 w-full h-full -z-10 transition-opacity duration-500 ease-in-out'}
                    hash={photoHash}
                    style={{ width: '100%', height: '100%', opacity: bgLoaded ? '0' : '1' }}
                />
                <img
                    src={'/bg.jpg'}
                    alt="Background Photo"
                    className={'absolute top-0 left-0 w-full h-full object-cover pointer-events-none select-none -z-20'}
                    style={{ display: bgLoaded ? 'block' : 'none' }}
                    onLoad={handleLoadPhoto}
                />
            </div> */}

            <video className={'w-full h-full object-cover pb-4'} src="/start_bg.mp4" autoPlay muted></video>
        </div>
    )
}
