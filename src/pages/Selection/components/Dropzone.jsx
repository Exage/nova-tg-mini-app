import React from 'react'
import classNames from 'classnames'
import { useDroppable } from '@dnd-kit/core'

import { BlockGradient } from '@/components/UI/BlockGradient'

export const Dropzone = ({ id, children, emtptyBlocksCount }) => {

    const { isOver, setNodeRef } = useDroppable({ id })

    return (
        <div ref={setNodeRef} className={'grid grid-cols-3 gap-2 min-h-28 mt-3'}>
            
            <BlockGradient contentPadding={'p-0'} className={'h-28'}>
                <div className={'h-full flex items-center justify-between flex-col p-2 text-center text-gray-500'}> 
                    <img src={'/comingsoon.svg'} className={'w-9 h-9'} alt="" />
                    <h3 className={'text-xs leading-none'}>Coming soon</h3>
                    <p className={'text-[0.625rem] leading-none'}>
                        We are working hard to get this up running
                    </p>
                </div>
            </BlockGradient>

            {children}

            {Array.from({ length: emtptyBlocksCount }, (_, i) => (
                <BlockGradient key={i} className={classNames('h-28', { 'bg-accent-600/30': i === 0 && isOver })}></BlockGradient>
            ))}

            <BlockGradient contentPadding={'p-0'} className={'h-28'}>
                <div className={'h-full flex items-center justify-between flex-col p-2 text-center text-gray-500'}> 
                    <img src={'/comingsoon.svg'} className={'w-9 h-9'} alt="" />
                    <h3 className={'text-xs leading-none'}>Coming soon</h3>
                    <p className={'text-[0.625rem] leading-none'}>
                        We are working hard to get this up running
                    </p>
                </div>
            </BlockGradient>

        </div>
    )
}
