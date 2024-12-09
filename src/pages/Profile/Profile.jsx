import React from 'react'
import styles from './Profile.module.scss'

import avatarPh from '@/assets/images/profile/avatar-ph-2.png'

export const Profile = () => {

    const { profile, top, avatar, ['avatar-border']: avatarBorder } = styles

    return (
        <div className={profile}>

            <div className={top}>

                <div className={avatarBorder}>
                    <div className={avatar}>
                        <img src={avatarPh} alt="" />
                    </div>
                </div>

            </div>

        </div>
    )
}
