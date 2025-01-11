import classNames from 'classnames'
import styles from '@/Core.module.scss'

import { Type } from '@/components/Type'
import { Button } from '@/components/UI/Buttons/Button'

import { useModalsContext } from '@/hooks/useModalsContext'

export const Starship = ({ data }) => {
    const { dispatch, ACTIONS } = useModalsContext()

    const handleCallModal = () => {
        dispatch({ type: ACTIONS.OPEN_MODAL, payload: 'spaceportRentShip' })
        dispatch({ type: ACTIONS.SET_MODAL_DATA, payload: data })
    }

    return (
        <div className={'bg-black-400 rounded-xl overflow-hidden'}>
            <div className={'relative w-full h-20 bg-accent-900'}>
                <Type type={data.type} className={'absolute top-2 left-2'} />
                <img className={'w-full h-full object-cover'} src={data.photo} alt="" />
            </div>

            <div className={'py-2 border-b border-b-gray-700'}>
                <h3 className={'text-center text-base leading-none font-bold'}>{data.name}</h3>

                <div className={'flex justify-center gap-2 mt-2'}>
                    <Resource icon={'/cargo_capacity.svg'}>1.5</Resource>
                    <Resource icon={'/mining_speed.svg'}>20</Resource>
                </div>
            </div>

            <div className={'flex gap-3 p-2.5'}>
                <Button textSize={'text-sm'} onClick={handleCallModal}>
                    Rent
                </Button>
                <div
                    className={classNames(
                        'flex items-center gap-1 font-bold text-base text-white',
                        'after:align-top after:w-3 after:h-4',
                        styles.gemAfter
                    )}
                >
                    {data.gems}
                </div>
            </div>
        </div>
    )
}

const Resource = ({ icon, children }) => {
    return (
        <div className={'text-center font-serif font-bold text-xl'}>
            <div className={classNames('w-7 h-7 p-1', styles.iconStroke)}>
                <img className={'w-full h-full object-cover'} src={icon} alt="" />
            </div>
            <p className={'font-serif font-bold text-[0.625rem] leading-none mt-1'}>{children}</p>
        </div>
    )
}
