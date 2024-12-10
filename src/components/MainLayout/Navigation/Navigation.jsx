import React from 'react'
import { NavLink } from 'react-router'
import { ReactSVG } from 'react-svg'

import styles from './Navigation.module.scss'

import profileIcon from '@/assets/icons/navigation/profile.svg'
import friendsIcon from '@/assets/icons/navigation/friends.svg'
import playIcon from '@/assets/icons/navigation/play.svg'
import starshipIcon from '@/assets/icons/navigation/starship.svg'
import rewardsIcon from '@/assets/icons/navigation/rewards.svg'

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
        to: '/rewards',
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
