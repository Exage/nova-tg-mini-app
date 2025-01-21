import styles from '@/Core.module.scss'
import classNames from 'classnames'

import { Button } from '@/components/UI/Buttons/Button'
import { Block } from '@/components/UI/Block'

export const Box = ({ title, price, img }) => {
    return (
        <Block>
            <div className={'relative flex justify-between items-center pr-4'}>
                <div className={'py-4 px-3 h-32'}>
                    <h3 className={'text-base font-bold leading-none'}>{title}</h3>
                    <p
                        className={classNames(
                            'mt-3',
                            'before:w-3 before:h-4 before:align-middle before:mr-1 before:-translate-y-[0.1rem]',
                            styles.gemBefore
                        )}
                    >
                        {price}
                    </p>
                    <div className={'w-28 mt-2.5'}>
                        <Button textSize={'text-sm'}>Buy</Button>
                    </div>
                </div>
                <div className={'w-[7.5rem] h-[7.5rem]'}>
                    <img className={'w-full h-full object-contain pointer-events-none'} src={`/boxes/${img}`} alt="" />
                </div>
            </div>
        </Block>
    )
}
