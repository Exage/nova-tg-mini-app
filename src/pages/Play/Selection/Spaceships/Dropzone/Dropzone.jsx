import React from 'react'
import classNames from 'classnames'
import styles from './Dropzone.module.scss'
import { useDroppable } from '@dnd-kit/core'

export const Dropzone = ({ id, children }) => {

    const { dropzone, over } = styles

    const { isOver, setNodeRef } = useDroppable({ id })

    return (
        <div ref={setNodeRef} className={classNames(dropzone, { [over]: isOver })}>
            {children}
        </div>
    )
}
