import { Link, useLocation } from 'react-router'

import styles from '@/Core.module.scss'
import classNames from 'classnames'

import { Block } from '@/components/UI/Block'
import { Type } from '@/components/Type'

export const Mission = ({ data }) => {
    
    const location = useLocation()
    const locationData = location.state

    return (
        <Link to={'/play/selection'} state={{ ...locationData, mission: data }}>
            <Block className={'relative pt-6 pb-2.5 px-2'}>

                <div className={'w-full max-w-[8.75rem] mx-auto'}>
                    <div className={'relative w-full h-[4.68rem] bg-accent-900 rounded-lg overflow-hidden'}>
                        <img className={'w-full object-cover'} src={data.cover} alt="" />
                    </div>

                    <div className={'text-white leading-none text-center'}>
                        <h3 className={'text-xl mt-1'}>{data.title}</h3>
                        <p className={'text-[0.5rem] mt-1'}>
                            {data.description}
                        </p>
                        <div className={classNames('flex items-center justify-center mt-2.5 text-sm', 'before:w-4 before:h-5 before:align-middle before:mr-1', styles.gemBefore)}>
                            {data.gems}
                        </div>
                    </div>
                </div>

            </Block>
        </Link>
    )
}
