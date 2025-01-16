import styles from '@/Core.module.scss'
import classNames from 'classnames'

import { ModalWrapper } from '@/components/ModalWrapper'
import { Type } from '@/components/Type'

import { useModals } from '@/lib/modalsStore'
import { Button } from '@/components/UI/Buttons/Button'

export const SpaceportRentShip = () => {
    const { modalData } = useModals()

    const handleRentBtn = () => {
        alert(`${modalData.name} was rented!`)
    }

    return (
        <ModalWrapper modalId="spaceportRentShip">
            {Object.keys(modalData).length > 0 && (
                <div className={'px-5 pb-6'}>
                    <div
                        className={
                            'relative w-full h-80 border border-accent-300 rounded-xl overflow-hidden'
                        }
                    >
                        <Type
                            type={modalData.type}
                            textSize={'text-[0.625rem]'}
                            className={'absolute top-4 left-3'}
                        />

                        <img className={'w-full h-full object-cover'} src={modalData.photo} alt="" />

                        <div
                            className={
                                'w-full p-3 backdrop-blur-xl text-center absolute bottom-0 left-0 bg-accent-900/5'
                            }
                        >
                            <h2 className={'text-xl font-bold'}>{modalData.name}</h2>
                        </div>
                    </div>

                    <div className={'flex flex-col gap-y-4 mt-5'}>
                        <div className={'flex'}>
                            <div className={classNames('w-9 h-9 p-1', styles.iconStroke)}>
                                <img
                                    className={'w-full h-full object-cover'}
                                    src="/mining_speed.svg"
                                    alt=""
                                />
                            </div>

                            <div className={'flex-1 flex flex-col justify-between pl-3'}>
                                <h3 className={'text-sm font-bold leading-none'}>300</h3>
                                <div className={'relative w-full h-[4px] bg-gray-700 rounded-full'}>
                                    <div
                                        className={'absolute h-full bg-accent-500 rounded-full'}
                                        style={{ width: '45%' }}
                                    ></div>
                                </div>
                                <p className={'uppercase text-[0.625rem] leading-none'}>
                                    MINING SPEED
                                </p>
                            </div>
                        </div>

                        <div className={'flex'}>
                            <div className={classNames('w-9 h-9 p-1', styles.iconStroke)}>
                                <img
                                    className={'w-full h-full object-cover'}
                                    src="/cargo_capacity.svg"
                                    alt=""
                                />
                            </div>

                            <div className={'flex-1 flex flex-col justify-between pl-3'}>
                                <h3 className={'text-sm font-bold leading-none'}>15</h3>
                                <div className={'relative w-full h-[4px] bg-gray-700 rounded-full'}>
                                    <div
                                        className={'absolute h-full bg-accent-500 rounded-full'}
                                        style={{ width: '71%' }}
                                    ></div>
                                </div>
                                <p className={'uppercase text-[0.625rem] leading-none'}>
                                    CARGO CAPACITY
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={'mt-5'}>
                        <Button onClick={handleRentBtn}>
                            Rent on 10 hours &#40;
                            <span
                                className={classNames(
                                    'leading-none',
                                    'after:align-middle after:w-3 after:h-4 after:ml-1',
                                    styles.gemAfter
                                )}
                            >
                                {modalData.gems}
                            </span>
                            &#41;
                        </Button>
                    </div>
                </div>
            )}
        </ModalWrapper>
    )
}
