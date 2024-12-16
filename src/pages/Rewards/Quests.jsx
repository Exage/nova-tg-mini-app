import React from 'react'

import styles from './Quests.module.scss'

import { Quest } from './Quest/Quest'

import youtubeIcon from '@/assets/images/quests/youtube.png'
import logoIcon from '@/assets/images/quests/logo.png'
import twitterIcon from '@/assets/images/quests/twitter.png'
import telegramIcon from '@/assets/images/quests/telegram.png'
import instagramIcon from '@/assets/images/quests/instagram.png'
import discordIcon from '@/assets/images/quests/discord.png'

const questsList = [
    {
        title: 'Subscribe to Nova channel',
        icon: youtubeIcon,
        gems: 0.3
    },
    {
        title: 'Vote for Nova channel',
        icon: logoIcon,
        gems: 0.3
    },
    {
        title: 'Go to our X.com',
        icon: twitterIcon,
        gems: 0.3
    },
    {
        title: 'Go to our channel',
        icon: telegramIcon,
        gems: 0.3
    },
    {
        title: 'Follow Nova Instagram',
        icon: instagramIcon,
        gems: 0.3
    },
    {
        title: 'Go to our Discord channel',
        icon: discordIcon,
        gems: 0.3
    },
    {
        title: 'Go to our Discord channel',
        icon: discordIcon,
        gems: 0.3
    },
    {
        title: 'Go to our Discord channel',
        icon: discordIcon,
        gems: 0.3
    },
    {
        title: 'Go to our Discord channel',
        icon: discordIcon,
        gems: 0.3
    },
    {
        title: 'Go to our Discord channel',
        icon: discordIcon,
        gems: 0.3
    },
    {
        title: 'Go to our Discord channel',
        icon: discordIcon,
        gems: 0.3
    },
    {
        title: 'Go to our Discord channel',
        icon: discordIcon,
        gems: 0.3
    },
    {
        title: 'Go to our Discord channel',
        icon: discordIcon,
        gems: 0.3
    },
    {
        title: 'Go to our Discord channel',
        icon: discordIcon,
        gems: 0.3
    },
    {
        title: 'Go to our Discord channel',
        icon: discordIcon,
        gems: 0.3
    },
    {
        title: 'Go to our Discord channel',
        icon: discordIcon,
        gems: 0.3
    },
    {
        title: 'Go to our Discord channel',
        icon: discordIcon,
        gems: 0.3
    },
    {
        title: 'Go to our Discord channel',
        icon: discordIcon,
        gems: 0.3
    },
    {
        title: 'Go to our Discord channel',
        icon: discordIcon,
        gems: 0.3
    },
    {
        title: 'Go to our Discord channel',
        icon: discordIcon,
        gems: 0.3
    },
    {
        title: 'Go to our Discord channel',
        icon: discordIcon,
        gems: 0.3
    },
    {
        title: 'Go to our Discord channel',
        icon: discordIcon,
        gems: 0.3
    },
]

export const Quests = () => {

    const { rewards, items } = styles

    return (
        <div className={rewards}>
            <div className="wrapper page__paddings-vertical">
                
                <h1 className='page__title'>
                    Quests 123
                </h1>

                <div className={items}>
                    {questsList.map((item, index) => <Quest key={index} data={item} />)}
                </div>

            </div>
        </div>
    )
}
