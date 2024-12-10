import React from 'react'

import styles from './Quest.module.scss'

import linkArrow from '@/assets/images/quests/link-arrow.svg'

export const Quest = ({ data }) => {

    const { quest, icon, content, title, gems, arrow } = styles

    return (
        <a href='#' className={quest}>

            <div className={icon}>
                <img src={data.icon} alt="" />

            </div>

            <div className={content}>
                <h3 className={title}>
                    {data.title}
                </h3>
                <div className={gems}>
                    {data.gems}
                </div>
            </div>

            <div className={arrow}>
                <img src={linkArrow} alt="" />
            </div>

        </a>
    )

}
