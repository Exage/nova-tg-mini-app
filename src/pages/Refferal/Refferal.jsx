import React from 'react'
import styles from './Refferal.module.scss'

import { Counter } from './Counter/Counter'
import { Button } from '@/components/UI/Button/Button'
import { Friends } from './Friends/Friends'

export const Refferal = () => {

    const { btns } = styles

    return (
        <div className='wrapper page__paddings-vertical'>

            <h1 className='page__title'>
                Refferal
            </h1>
            <h2 className='page__subtitle'>
                Get 10% from friends, + 1% from their refferal
            </h2>

            <Counter />

            <div className={btns}>
                <Button disabled={true}>
                    Claim
                </Button>

                <Button>
                    Invite Friends
                </Button>
            </div>

            <Friends />

        </div>
    )
}
