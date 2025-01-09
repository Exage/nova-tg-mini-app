import { useState } from 'react'

import classNames from 'classnames'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

import { Spaceship } from './components/Spaceship'

import { Button } from '@/components/UI/Buttons/Button'
import { ButtonSecondary } from '@/components/UI/Buttons/ButtonSecondary'

import { useModalsContext } from '@/hooks/useModalsContext'
import { MainWrapper } from '@/components/MainWrapper'

const shipPhoto = '/ship-ph.jpg'
const spaceships = [
    {
        id: '123',
        name: 'Nebula seeker 1',
        type: 'legendary',
        level: 1,
        photo: shipPhoto,
    },
    {
        id: '623',
        name: 'Nebula seeker 2',
        type: 'rare',
        level: 99999,
        photo: shipPhoto,
    },
    {
        id: '999',
        name: 'Nebula seeker 3',
        type: 'common',
        level: 14,
        photo: shipPhoto,
    },
]

export const Spaceport = () => {
    const { dispatch, ACTIONS } = useModalsContext()

    const [activeSlideIndex, setActiveSlideIndex] = useState(0)

    const handleOpenUpgrade = () => {
        dispatch({ type: ACTIONS.OPEN_MODAL, payload: 'upgradeShip' })
        dispatch({ type: ACTIONS.SET_MODAL_DATA, payload: spaceships[activeSlideIndex] })
        // console.log('123')
    }

    return (
        <div className={'mt-8'}>
            <Swiper
                modules={[Pagination]}
                pagination={{
                    el: '.spaceport-pagintaion',
                }}
                centeredSlides={true}
                slidesPerView={1}
                onActiveIndexChange={(swiper) => setActiveSlideIndex(swiper.activeIndex)}
                breakpoints={{
                    364: {
                        slidesPerView: 'auto',
                    },
                }}
            >
                {spaceships.map((item) => (
                    <SwiperSlide key={item.id} className={'w-full px-4'}>
                        <Spaceship data={item} />
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className={classNames('spaceport-pagintaion', 'flex justify-center mt-2 gap-1')}></div>

            <MainWrapper py={'py-0'}>
                <div className={'mt-6 flex flex-col gap-2'}>
                    <Button onClick={handleOpenUpgrade}>Upgrade</Button>
                    <ButtonSecondary onClick={handleOpenUpgrade} disabled={true}>Mint NFT</ButtonSecondary>
                </div>
            </MainWrapper>
        </div>
        // <div className={spaceport}>
        //     <div className="page__paddings-vertical">

        //         <div className="wrapper">
        //             <h1 className='page__title'>
        //                 Spaceport
        //             </h1>
        //         </div>

        //         <Cards />

        //     </div>
        // </div>
    )
}
