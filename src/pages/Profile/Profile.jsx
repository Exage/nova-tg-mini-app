import React from 'react'
import classNames from 'classnames'
import styles from './Profile.module.scss'

import avatarPh from '@/assets/images/profile/avatar-ph.png'

import photo from '@/assets/images/profile/stat-starship.png'

export const Profile = () => {

    const {
        avatar,
        ['avatar-border']: avatarBorder,
        name,
        username,
        stats,
        block,
        ['block__content']: blockContent,
        ['block__text']: blockText,
        ['block__text-center']: blockTextCenter,
        ['block__title']: blockTitle,
        ['block__subtitle']: blockSubtitle,
        ['block__points']: blockPoints,
        ['block__photo']: blockPhoto,
        ['block__list']: blockList,
        ['block__list-item']: blockListItem,
        ['ship__name']: shipName,
        ['ship__status']: shipStatus
    } = styles

    return (
        <div className="wrapper">

            <div className={'py-8'}>
                <div className={'pt-12 flex flex-col items-center justify-center'}>

                    <div className={avatarBorder}>
                        <div className={avatar}>
                            <img src={avatarPh} alt="" />
                        </div>
                    </div>

                    <h1 className={'mt-[1.6rem] text-4xl font-bold uppercase'}>
                        MIKITAUIUX
                    </h1>
                    <h2 className={'text-base text-secondary-600 lowercase'}>
                        #mikitauiux
                    </h2>

                </div>

                <div className={'grid grid-rows-2 grid-cols-2 gap-4'}>
                    <div className={block}>
                        <div className={blockContent}>
                            <div className={blockText}>
                                <h2 className={blockTitle}>
                                    Current Points:
                                </h2>
                                <h3 className={blockPoints}>
                                    2000
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className={classNames(block, 'row-span-2')}>
                        <div className={blockContent}>
                            <div className={blockPhoto}>
                                <img src={photo} alt="" />
                            </div>
                            <div className={classNames(blockText, blockTextCenter)}>
                                <h2 className={blockTitle}>
                                    Favourite ship:
                                </h2>
                                <h3 className={blockSubtitle}>
                                    Nebula Seeker
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className={block}>
                        <div className={blockContent}>
                            <div className={blockText}>
                                <h2 className={blockTitle}>
                                    Total Points Earned:
                                </h2>
                                <h3 className={blockPoints}>
                                    2000
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className={classNames(block, 'col-span-2')}>
                        <div className={blockContent}>
                            <div className={blockText}>
                                <h2 className={blockTitle}>
                                    Ship Collection:
                                </h2>
                                <ul className={blockList}>
                                    <li className={blockListItem}>
                                        <span className={shipName}>Stellar Voyager</span>
                                        <span className={shipStatus}>On mission</span>
                                    </li>
                                    <li className={blockListItem}>
                                        <span className={shipName}>Nebula Seeker</span>
                                        <span className={shipStatus}>At home</span>
                                    </li>
                                    <li className={blockListItem}>
                                        <span className={shipName}>Cosmic Crusader</span>
                                        <span className={shipStatus}>On mission</span>
                                    </li>
                                    <li className={blockListItem}>
                                        <span className={shipName}>Astro Pioneer</span>
                                        <span className={shipStatus}>At home</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
