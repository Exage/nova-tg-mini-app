import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router'
import styles from '@/Core.module.scss'
import classNames from 'classnames'

import { PageTitle } from '@/components/PageTitle'
import { MainWrapper } from '@/components/MainWrapper'
import { Block } from '@/components/UI/Block'

export const Shoping = () => {
    return (
        <MainWrapper>
            <PageTitle>Shoping Page</PageTitle>

            <div className={'flex flex-col gap-y-2.5 mt-5'}>
                <a href="#">
                    <Block>
                        <div className={'p-4 flex items-center'}>
                            <div
                                className={classNames(
                                    'w-[3.125rem] h-[3.125rem] flex items-center justify-center',
                                    styles.iconGlassBlock
                                )}
                            >
                                <img src="/shoping_ship.svg" alt="" />
                            </div>

                            <h3 className={'ml-6 font-bold leading-none'}>Buy a new starship</h3>
                        </div>
                    </Block>
                </a>

                <a href="#">
                    <Block>
                        <div className={'p-4 flex items-center'}>
                            <div
                                className={classNames(
                                    'w-[3.125rem] h-[3.125rem] flex items-center justify-center',
                                    styles.iconGlassBlock
                                )}
                            >
                                <img src="/shoping_star.svg" alt="" />
                            </div>

                            <h3 className={'ml-6 font-bold leading-none'}>Buy Points</h3>
                        </div>
                    </Block>
                </a>

                <Link to={'boxes'}>
                    <Block>
                        <div className={'p-4 flex items-center'}>
                            <div
                                className={classNames(
                                    'w-[3.125rem] h-[3.125rem] flex items-center justify-center',
                                    styles.iconGlassBlock
                                )}
                            >
                                <img src="/shoping_boxes.svg" alt="" />
                            </div>

                            <h3 className={'ml-6 font-bold leading-none'}>Buy box</h3>
                        </div>
                    </Block>
                </Link>
            </div>
        </MainWrapper>
    )
}
