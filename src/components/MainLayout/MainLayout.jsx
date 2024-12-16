import React from 'react'
import classNames from 'classnames'
import styles from './MainLayout.module.scss'

import { Outlet } from 'react-router'

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

    const { platform } = useTelegram()

    return (
        <div className={classNames(mainLayout, { [ios]: platform === 'ios' } )}>

            <div className={overflow}>
                <Outlet />
            </div>

            <Navigation />

            <DailyRewards />

            <UpgradeShip />

        </div>
    )
}
