import React from 'react'
import { NavLink } from 'react-router'
import { ReactSVG } from 'react-svg'

import styles from './Navigation.module.scss'

import profileIcon from '@/assets/images/navigation/profile.svg'
import friendsIcon from '@/assets/images/navigation/friends.svg'
import playIcon from '@/assets/images/navigation/play.svg'
import starshipIcon from '@/assets/images/navigation/starship.svg'
import rewardsIcon from '@/assets/images/navigation/rewards.svg'

const links = [
    {
        title: 'Profile',
        to: '/profile',
        icon: profileIcon,
    },
    {
        title: 'Friends',
        to: '/friends',
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
    },
]

export const Navigation = () => {

    const { navigation, link, active, icon, title } = styles

    return (
        <div className={navigation}>
            {links.map((item, index) => (
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
    )
}
