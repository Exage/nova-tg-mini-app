import React from 'react'
import { NavLink } from 'react-router'
import { ReactSVG } from 'react-svg'

import profileIcon from '@/assets/navIcons/profile.svg'
import friendsIcon from '@/assets/navIcons/friends.svg'
import playIcon from '@/assets/navIcons/play.svg'
import starshipIcon from '@/assets/navIcons/starship.svg'
import rewardsIcon from '@/assets/navIcons/rewards.svg'

import { useTelegram } from '@/hooks/useTelegram'

const linksList = [
    {
        title: 'Profile',
        to: '/profile',
        icon: profileIcon,
    },
    {
        title: 'Shoping',
        to: '/shoping',
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
    }
]

export const Navigation = () => {

    const { platform } = useTelegram()

    const linkClasses = 'flex flex-col items-center justify-center flex-1 relative h-20 z-10'

    return (
        <div className={`max-w-app-width w-full fixed bottom-0 bg-navBg border-t border-white/10 ${platform === "ios" ? 'pb-5' : 'pb-0'}`}>
            <div className={'flex'}>
                {linksList.map((item, index) => (
                    <NavLink
                        key={index}
                        to={item.to}
                        className={({ isActive }) => isActive ? `${linkClasses} text-accent-400 after:w-5 after:h-px after:bg-accent-400 after:absolute after:top-0 after:left-1/2 after:-translate-x-1/2` : `${linkClasses} text-white`}
                    >
                        <ReactSVG
                            className={'w-5 h-5 *:w-5 *:h-5 *:flex *:items-center'}
                            src={item.icon}
                        />
                        <h3 className={'font-medium text-xs font-serif mt-1'}>
                            {item.title}
                        </h3>
                    </NavLink>
                ))}
            </div>
        </div>
    )
}
