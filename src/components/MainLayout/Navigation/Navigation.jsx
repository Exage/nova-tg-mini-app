import React, { useEffect } from 'react'
import classNames from 'classnames'
import { NavLink, useLocation } from 'react-router'
import { ReactSVG } from 'react-svg'

import styles from './Navigation.module.scss'

import profileIcon from '@/assets/images/navigation/profile.svg'
import friendsIcon from '@/assets/images/navigation/friends.svg'
import playIcon from '@/assets/images/navigation/play.svg'
import starshipIcon from '@/assets/images/navigation/starship.svg'
import rewardsIcon from '@/assets/images/navigation/rewards.svg'

import { useTelegram } from '@/hooks/useTelegram'

const linksList = [
    {
        title: 'Profile',
        to: '/profile',
        icon: profileIcon,
    },
    {
        title: 'Refferal',
        to: '/refferal',
        icon: friendsIcon,
    },
    {
        title: 'Play',
        to: '/play',
        icon: playIcon,
    },
    {
        title: 'Starship',
        to: '/spaceport',
        icon: starshipIcon,
    },
    {
        title: 'Rewards',
        to: '/quests',
        icon: rewardsIcon,
    }
]

export const Navigation = () => {

    const { navigation, links, link, active, icon, title, ios } = styles

    const { platform } = useTelegram()

    return (
        <div className={classNames(navigation, { [ios]: platform === 'ios' })}>
            <div className={links}>
                {linksList.map((item, index) => (
                    <NavLink
                        key={index}
                        to={item.to}
                        className={({ isActive }) => isActive ? `${link} ${active}` : link}
                    >
                        <ReactSVG
                            className={icon}
                            src={item.icon}
                        />
                        <h3 className={title}>
                            {item.title}
                        </h3>
                    </NavLink>
                ))}
            </div>
        </div>
    )
}
