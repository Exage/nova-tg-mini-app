import React from 'react'
import styles from '@/Core.module.scss'

import { UserAvatar } from '@/components/UserAvatar'
import { BlockGradient } from '@/components/UI/BlockGradient'

export const Profile = () => {
    
    return (
        <div className={styles.wrapper}>
            <div className={'py-8'}>

                <div className={'pt-12 flex flex-col items-center justify-center'}>

                    <UserAvatar size={'w-32 h-32'} imageUrl={'/avatar-ph.png'} />

                    <h2 className={'mt-4 text-4xl font-bold uppercase'}>
                        MIKITAUIUX
                    </h2>
                    <h3 className={'text-base text-secondary-600 lowercase'}>
                        #mikitauiux
                    </h3>
                
                </div>

                <div className={'grid grid-rows-2 grid-cols-2 gap-x-3 gap-y-4 mt-4'}>
                
                    <BlockGradient>
                        <div className={'flex flex-col justify-around h-full'}>
                            <h2 className={'capitalize text-accent-200 text-base font-medium'}>Current Points:</h2>
                            <p className={'flex items-center gap-2 text-accent-500 after:bg-[url("/gem.svg")] after:inline-block after:bg-center after:bg-no-repeat after:bg-contain after:w-3 after:h-4'}>2000</p>
                        </div>
                    </BlockGradient>

                    <BlockGradient className={'row-span-2'} contentPadding={'p-0'}>
                        <div className={'w-full'}>
                            <img className={'w-full h-32 object-cover'} src="/ship-ph.jpg" alt="" />
                        </div>
                        <div className={'p-2 text-center'}>
                            <h2 className={'capitalize text-accent-200 text-base font-medium'}>Favourite ship</h2>
                            <p className={'font-medium text-xs text-white'}>Nebula Seeker</p>
                        </div>
                    </BlockGradient>

                    <BlockGradient>
                        <div className={'flex flex-col justify-around h-full'}>
                            <h2 className={'capitalize text-accent-200 text-base font-medium'}>Total Points:</h2>
                            <p className={'flex items-center gap-2 text-accent-500 after:bg-[url("/gem.svg")] after:inline-block after:bg-center after:bg-no-repeat after:bg-contain after:w-3 after:h-4'}>2000</p>
                        </div>
                    </BlockGradient>

                    <BlockGradient className={'col-span-2'}>
                        <h2 className={'capitalize text-accent-200 text-base font-medium'}>Ship Collection:</h2>

                        <ul className={'mt-2.5 flex flex-col gap-2.5'}>
                            <li className={'flex justify-between items-center'}>
                                <span className={'text-base text-accent-500'}>Stellar Voyager</span>
                                <span className={'text-xs text-accent-200'}>On mission</span>
                            </li>
                            <li className={'flex justify-between items-center'}>
                                <span className={'text-base text-accent-500'}>Nebula Seeker</span>
                                <span className={'text-xs text-accent-200'}>At home</span>
                            </li>
                            <li className={'flex justify-between items-center'}>
                                <span className={'text-base text-accent-500'}>Cosmic Crusader</span>
                                <span className={'text-xs text-accent-200'}>On mission</span>
                            </li>
                            <li className={'flex justify-between items-center'}>
                                <span className={'text-base text-accent-500'}>Astro Pioneer</span>
                                <span className={'text-xs text-accent-200'}>At home</span>
                            </li>
                        </ul>

                    </BlockGradient>
                
                </div>
            </div>
        </div>
    )
}
