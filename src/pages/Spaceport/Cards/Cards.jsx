import React from 'react'
import classNames from 'classnames';

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination';

import styles from './Cards.module.scss'

import { Card } from './Card/Card'

export const Cards = () => {
    
    const { cards, slide, pagintaion } = styles
    
    return (
        <div className={cards}>
            <Swiper
                modules={[Pagination]}
                pagination={{
                    el: '.spaceport-pagintaion'
                }}
                centeredSlides={true}
                slidesPerView={'auto'}
                spaceBetween={7}
            >
                <SwiperSlide className={slide}>
                    <Card />
                </SwiperSlide>
                <SwiperSlide className={slide}>
                    <Card upgraded={true} />
                </SwiperSlide>
                <SwiperSlide className={slide}>
                    <Card />
                </SwiperSlide>
            </Swiper>
            <div className={classNames('spaceport-pagintaion', pagintaion)}></div>
        </div>
    )
}
