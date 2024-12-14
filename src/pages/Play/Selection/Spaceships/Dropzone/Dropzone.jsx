import React from 'react'
import classNames from 'classnames'
import styles from './Dropzone.module.scss'
import { useDroppable } from '@dnd-kit/core'

import comingsoonIcon from '@/assets/images/play/comigsoon.svg'

export const Dropzone = ({ id, children, emtptyBlocksCount }) => {

    const {
        dropzone,
        empty,
        first,
        over,
        comingsoon,
        ['comingsoon__photo']: comingsoonPhoto,
        ['comingsoon__title']: comingsoonTitle,
        ['comingsoon__subtitle']: comingsoonSubtitle,
    } = styles

    const { isOver, setNodeRef } = useDroppable({ id })

    return (
        <div ref={setNodeRef} className={classNames(dropzone, { [over]: isOver })}>
            
            <div className={classNames(empty, comingsoon)}>
                <img src={comingsoonIcon} className={comingsoonPhoto} alt="" />
                <h3 className={comingsoonTitle}>Coming soon</h3>
                <p className={comingsoonSubtitle}>
                    We are working hard to get this up running
                </p>
            </div>

            {children}

            {Array.from({ length: emtptyBlocksCount }, (_, i) => (
                <div key={i} className={classNames(empty, { [first]: i === 0 })}></div>
            ))}

            <div className={classNames(empty, comingsoon)}>
                <img src={comingsoonIcon} className={comingsoonPhoto} alt="" />
                <h3 className={comingsoonTitle}>Coming soon</h3>
                <p className={comingsoonSubtitle}>
                    We are working hard to get this up running
                </p>
            </div>
        </div>
    )
}
