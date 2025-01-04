import React from 'react'
import styles from '@/Core.module.scss'

import { MainWrapper } from '@/components/MainWrapper'
import { PointsBalance } from './components/PointsBalance'
import { FriendList } from './components/FriendList'

export const Refferal = () => {
    return (
        <MainWrapper>
            
            <h1 className={styles.pageTitle}>Refferal</h1>
            
            <p className={'text-gray-400 text-base font-bold mt-2'}>
                Get 10% from friends, + 1% from their refferals
            </p>

            <div className={'mt-2'}>
                <PointsBalance />
                <FriendList />
            </div>

        </MainWrapper>
    )
}
