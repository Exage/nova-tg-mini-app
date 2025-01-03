import React from 'react'

import styles from '@/Core.module.scss'

export const UserAvatar = ({ size = 'w-32 h-32', imageUrl = '/avatar-ph.png' }) => {
    return (
        <div className={`${size} relative z-10 ${styles.userAvatarLooper}`}>

            <div className={`w-full h-full absolute top-0 left-0 -z-[1] ${styles.userAvatarFrame}`}>
                <div className={'bg-gradient-to-br from-[#A73EE7] to-[#00EBFF] w-full h-full'}></div>
            </div>

            <div className={'w-full h-full absolute top-0 left-0'}>
                <div className="w-full h-full p-[0.186rem]">
                    <div className={`w-full h-full ${styles.userAvatarFrame}`}>
                        <img
                            className="w-full h-full object-cover select-none pointer-events-none"
                            src={imageUrl}
                            alt=""
                        />
                    </div>
                </div>
            </div>
            
        </div>
    )
}
