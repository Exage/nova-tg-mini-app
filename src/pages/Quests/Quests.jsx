import styles from '@/Core.module.scss'
import classNames from 'classnames'

import { Block } from '@/components/UI/Block'

const questsList = [
    {
        title: 'Subscribe to Nova channel',
        icon: '/quests/youtube.png',
        gems: 0.3,
    },
    {
        title: 'Go to our X.com',
        icon: '/quests/twitter.png',
        gems: 0.3,
    },
    {
        title: 'Go to our channel',
        icon: '/quests/telegram.png',
        gems: 0.3,
    },
    {
        title: 'Follow Nova Instagram',
        icon: '/quests/instagram.png',
        gems: 0.3,
    },
    {
        title: 'Go to our Discord channel',
        icon: '/quests/discord.png',
        gems: 0.3,
    },
]

export const Quests = () => {
    return (
        <div className={'flex flex-col gap-y-3 mt-3'}>
            {questsList.map((item, index) => (
                <Block key={index}>
                    <div className={'p-2 flex'}>
                        <div
                            className={classNames(
                                'w-12 h-12 flex justify-center items-center p-2',
                                styles.iconGlassBlock
                            )}
                        >
                            <img
                                className={'w-full h-full object-contain'}
                                src={item.icon}
                                alt=""
                            />
                        </div>
                        <div className={'flex flex-1 pl-3'}>
                            <div className="flex-1">
                                <h3>{item.title}</h3>
                                <p
                                    className={classNames(
                                        'text-base',
                                        'before:w-5 before:h-6 before:align-middle before:mr-1',
                                        styles.gemBefore
                                    )}
                                >
                                    {item.gems}
                                </p>
                            </div>
                            <div className={'flex items-center justify-center'}>
                                <img src='/link-arrow.svg' alt='' />
                            </div>
                        </div>
                    </div>
                </Block>
            ))}
        </div>
    )
}
