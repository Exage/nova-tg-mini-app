import React, { useRef, useEffect } from 'react'
import classNames from 'classnames'
import styles from './MainLayout.module.scss'

import { Outlet, useLocation } from 'react-router'

import { Navigation } from './Navigation/Navigation'
import { DailyRewards } from './DailyRewards/DailyRewards'

import { UpgradeShip } from '@/modals/UpgradeShip/UpgradeShip'

import { useTelegram } from '@/hooks/useTelegram'

export const MainLayout = () => {

    const {
        ['main-layout']: mainLayout,
        overflow,
        ios
    } = styles

    const overflowRef = useRef(null)

    const { platform } = useTelegram()

    const { pathname } = useLocation()

    useEffect(() => {
        if (overflowRef.current) {
            overflowRef.current.scrollTo(0, 0)
        }
    }, [pathname])

    return (
        <div className={classNames(mainLayout, { [ios]: platform === 'ios' })}>

            <div ref={overflowRef} className={overflow}>
                <Outlet />
            </div>

            <Navigation />

            <DailyRewards />

            <UpgradeShip />

        </div>
    )
}
