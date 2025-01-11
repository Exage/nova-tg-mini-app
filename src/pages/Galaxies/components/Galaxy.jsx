import { Link } from 'react-router'

import styles from '@/Core.module.scss'
import classNames from 'classnames'

import { Block } from '@/components/UI/Block'
import { Type } from '@/components/Type'

export const Galaxy = ({ data }) => {
    return (
        <Link to={'/play/missions'} state={{ galaxy: data }}>
            <Block className={'relative pt-6 pb-2.5 px-2'}>

                <div className={'w-full absolute top-0 left-0 flex justify-center'}>
                    <span className={'font-bold text-[0.625rem] uppercase px-2.5 bg-accent-300 rounded-b-lg'}>
                        {data.distance} km
                    </span>
                </div>

                <div className={'w-full max-w-[8.75rem] mx-auto'}>
                    <div className={'relative w-full h-[4.68rem] bg-accent-900 rounded-lg overflow-hidden'}>
                        
                        <Type type={data.type} className={'absolute top-2 left-2'} />
                        
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
