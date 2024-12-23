import React from 'react'
import styles from './Friend.module.scss'

import avatarPh from '@/assets/images/profile/avatar-ph.png'

import friendIcon from '@/assets/images/refferal/friend.svg'

export const Friend = ({ data }) => {

    const {
        friend,
        photo,
        avatar,
        ['avatar-border']: avatarBorder,
        text,
        name,
        subname,
        gems
    } = styles

    return (
        <div className={friend}>

            <div className={avatarBorder}>
                <div className={avatar}>
                    <img src={avatarPh} alt="" />
                </div>
            </div>

            <div className={text}>
                <div className={name}>
                    {data.name}
                </div>
                <div className={subname}>
                    <img src={friendIcon} alt="" />
                    {' '}
                    +1
                </div>
            </div>

            <div className={gems}>
                100.000
            </div>

        </div>
    )
}
