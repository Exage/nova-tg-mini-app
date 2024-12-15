import React, { useEffect, useState } from 'react'
import classNames from 'classnames';

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination';

import styles from './Cards.module.scss'

import { Card } from './Card/Card'
import { Button } from '@/components/UI/Button/Button'

import { useModalsContext } from '@/hooks/useModalsContext'

import shipPhoto from '@/assets/images/ship-ph.jpg'

const spaceships = [
    {
        id: '123',
        name: 'Nebula seeker 1',
        type: 'legendary',
        level: 1,
        photo: shipPhoto
    },
    {
        id: '623',
        name: 'Nebula seeker 2',
        type: 'rare',
        level: 99999,
        photo: shipPhoto
    },
    {
        id: '999',
        name: 'Nebula seeker 3',
        type: 'common',
        level: 14,
        photo: shipPhoto
    },
]

export const Cards = () => {

    const { cards, slide, pagintaion, button, ['button__wrapper']: buttonWrapper } = styles

    const { dispatch, ACTIONS } = useModalsContext()

    const [activeSlideIndex, setActiveSlideIndex] = useState(0)

    const handleOpenUpgrade = () => {
        dispatch({ type: ACTIONS.OPEN_MODAL, payload: 'upgradeShip' })
        dispatch({ type: ACTIONS.SET_MODAL_DATA, payload: spaceships[activeSlideIndex] })
    }

    return (
        <div className={cards}>
            <Swiper
                modules={[Pagination]}
                pagination={{
                    el: '.spaceport-pagintaion'
                }}
                centeredSlides={true}
                slidesPerView={1}
                spaceBetween={7}
                onActiveIndexChange={(swiper) => setActiveSlideIndex(swiper.activeIndex)}
                breakpoints={{
                    364: {
                        slidesPerView: 'auto'
                    }
                }}
            >

                {spaceships.map(item => (
                    <SwiperSlide key={item.id} className={slide}>
                        <Card data={item} />
                    </SwiperSlide>
                ))}

            </Swiper>

            <div className={classNames('spaceport-pagintaion', pagintaion)}></div>

            <div className={classNames("wrapper", buttonWrapper)}>
                <Button className={[button]} onClick={handleOpenUpgrade}>
                    Upgrade
                </Button>
            </div>

        </div>
    )
}
