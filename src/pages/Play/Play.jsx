import React from 'react'
import styles from './Play.module.scss'

import { Outlet } from 'react-router'

export const Play = () => {
    return (
        <div>
            <Outlet />
        </div>
    )
}
