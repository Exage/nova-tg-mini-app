import React from 'react'
import styles from '@/Core.module.scss'

import { Button } from '@/components/UI/Buttons/Button'
import { Background } from './components/Background'

import { useUserContext } from '@/hooks/useUserContext'

export const Start = () => {

    const { dispatch, ACTIONS } = useUserContext()

    const handleStartBtn = () => {
        dispatch({ type: ACTIONS.SET_USER, payload: {} })
    }

    return (
        <div className={`relative pt-5 pb-10 bg-black h-screen ${styles.startTopGradient}`}>

            <Background />

            <div className={'relative flex flex-col px-5 h-full z-20'}>

                <div className={'flex select-none pointer-events-none'}>
                    <div className={'mx-auto relative'}>
                        <img className={'pointer-events-none select-none'} src={'/logo.svg'} alt="NOVA" />
                        <img className={'absolute top-0 left-0 blur-lg opacity-40 pointer-events-none select-none'} src={'/logo.svg'} alt="NOVA" />
                    </div>
                </div>

                <div className={'mt-auto'}>

                    <p className={'w-full mx-auto text-lg text-center text-white font-medium tracking-[0.4rem] text-shadow'}>
                        Send your ship to space — collect points, upgrade your fleet, and conquer the universe!
                    </p>

                    <Button className={'mt-4'} onClick={handleStartBtn}>
                        Start mission
                    </Button>

                </div>

            </div>
        </div>
    )
}
