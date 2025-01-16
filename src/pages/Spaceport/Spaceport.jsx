import { useState } from 'react'

import classNames from 'classnames'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

import { Spaceship } from './components/Spaceship'

import { Button } from '@/components/UI/Buttons/Button'
import { ButtonSecondary } from '@/components/UI/Buttons/ButtonSecondary'

import { MainWrapper } from '@/components/MainWrapper'

import { useModals } from '@/lib/modalsStore'

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
    const { openModal } = useModals()

    const [activeSlideIndex, setActiveSlideIndex] = useState(0)

    const handleOpenUpgrade = () => {
        openModal('spaceportUpgradeShip', spaceships[activeSlideIndex])
    }

    const handleOpenMint = () => {
        openModal('spaceportMintNFT', spaceships[activeSlideIndex])
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
                    <ButtonSecondary onClick={handleOpenMint}>Mint NFT</ButtonSecondary>
                </div>
            </MainWrapper>
        </div>
    )
}
