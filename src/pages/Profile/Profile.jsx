import React from 'react'
import styles from '@/Core.module.scss'

import { BlockGradient } from '@/components/UI/BlockGradient'

import { BlockTitle } from './components/BlockTitle'
import { UserInfo } from './components/UserInfo'
import { Points } from './components/Points'
import { MainWrapper } from '@/components/MainWrapper'

export const Profile = () => {
    return (
        <MainWrapper>
            
            <UserInfo 
                name={'MikitaUiUX'} 
                username={'#mikitauiux'} 
                imageUrl={'/avatar-ph.png'} 
            />

            <div className={'grid grid-rows-2 grid-cols-2 gap-x-3 gap-y-4 mt-4'}>
                <BlockGradient>
                    <div className={'flex flex-col justify-around h-full'}>
                        <BlockTitle>Current Points:</BlockTitle>
                        <Points>2000</Points>
                    </div>
                </BlockGradient>

                <BlockGradient className={'row-span-2'} contentPadding={'p-0'}>
                    <div className={'w-full'}>
                        <img className={'w-full h-32 object-cover'} src="/ship-ph.jpg" alt="" />
                    </div>
                    <div className={'p-2 text-center'}>
                        <BlockTitle>Favourite ship:</BlockTitle>
                        <p className={'font-medium text-xs text-white'}>Nebula Seeker</p>
                    </div>
                </BlockGradient>

                <BlockGradient>
                    <div className={'flex flex-col justify-around h-full'}>
                        <BlockTitle>Total Points:</BlockTitle>
                        <Points>2000</Points>
                    </div>
                </BlockGradient>

                <BlockGradient className={'col-span-2'}>
                    <BlockTitle>Ship Collection:</BlockTitle>

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
        </MainWrapper>
    )
}
