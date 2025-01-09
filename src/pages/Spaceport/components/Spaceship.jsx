import { Type } from '@/components/Type'
import styles from '@/Core.module.scss'
import classNames from 'classnames'

export const Spaceship = ({ data }) => {
    return (
        <div className={'relative max-w-[21.875rem] w-full h-[21.875rem] overflow-hidden bg-accent-900 border border-accent-300 mx-auto rounded-xl'}>

            <div className={'w-full h-full pb-28 relative'}>
                
                <Type 
                    type={data.type}
                    textSize={'text-[0.625rem]'}
                    className={'absolute top-4 left-3'}
                />
                
                <img className={'w-full h-full object-cover'} src={data.photo} alt="" />
            </div>

            <div className={'absolute left-0 bottom-0 w-full min-h-24 p-2.5 bg-accent-900/50 backdrop-blur-xl rounded-b-xl'}>
                
                <h3 className={'text-2xl font-bold text-center'}>{data.name}</h3>
                <h4 className={'text-xl font-bold text-center text-accent-400'}>{data.level} lvl</h4>

                <div className={'flex justify-center gap-12 mt-2'}>
                    
                    <div className={'text-center font-serif font-bold text-xl'}>
                        <div className={classNames('w-10 h-10 p-1', styles.iconStroke)}>
                            <img className={'w-full h-full object-cover'} src="/cargo_capacity.svg" alt="" />
                        </div>
                        <p className={'font-serif font-bold text-xl'}>3</p>
                    </div>

                    <div className={'text-center'}>
                        <div className={classNames('w-10 h-10 p-1', styles.iconStroke)}>
                            <img className={'w-full h-full object-cover'} src="/mining_speed.svg" alt="" />
                        </div>
                        <p className={'font-serif font-bold text-xl'}>20</p>
                    </div>

                </div>

            </div>

        </div>
    )
}
