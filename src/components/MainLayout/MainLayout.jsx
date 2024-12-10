import React from 'react'
import styles from './MainLayout.module.scss'

import { Outlet } from 'react-router'

import { Navigation } from './Navigation/Navigation'
import { DailyRewards } from './DailyRewards/DailyRewards'

export const MainLayout = () => {

    const {
        ['main-layout']: mainLayout,
        overflow
    } = styles

    return (
        <div className={mainLayout}>

            <div className={overflow}>
                <Outlet />
            </div>

            <Navigation />

            <DailyRewards />

        </div>
    )
}
