import React from 'react'
import styles from './Friends.module.scss'

import { Friend } from './Friend/Friend'

const friendsList = [
    {
        id: '1',
        name: 'MikitaUX',
        gems: '100.000'
    },
    {
        id: '2',
        name: 'MikitaUX',
        gems: '100.000'
    },
    {
        id: '3',
        name: 'MikitaUX',
        gems: '100.000'
    },
    {
        id: '4',
        name: 'MikitaUX',
        gems: '100.000'
    },
]

export const Friends = () => {

    const { content, title, friends, friend, emptyList } = styles

    return (
        <div className={content}>

            <h3 className={title}>
                {friendsList.length} friends
            </h3>

            <div className={friends}>
                {friendsList.length === 0 && <p className={emptyList}>Invite your friends and conquer space together</p>}
                {friendsList.map(item => <Friend key={item.id} data={item} />)}
            </div>

        </div>
    )
}
