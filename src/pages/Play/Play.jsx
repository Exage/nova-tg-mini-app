import React from 'react'
import styles from './Play.module.scss'

import { Outlet } from 'react-router'

export const Play = () => {

    const { play } = styles

    return (
        <div className={play}>
            <Outlet />
        </div>
    )
}
