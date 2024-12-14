import React from 'react'

import styles from './Confirm.module.scss'

import { useLocation } from 'react-router'

export const Confirm = () => {

    const location = useLocation()
    const data = location.state

    console.log(data)

    return (
        <div>
            <h1>Ticket</h1>
        </div>
    )
}
