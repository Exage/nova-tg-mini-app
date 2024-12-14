import React from 'react'
import styles from './Spaceship.module.scss'
import { useDraggable } from '@dnd-kit/core'
import { CSS } from '@dnd-kit/utilities'
import classNames from 'classnames'

export const Spaceship = ({ id, data, disabled, isChosen, onClick }) => {

    const { spaceship, photo, name, ['name__divider']: nameDivider, chosen, type } = styles

    const { attributes, listeners, setNodeRef, transform } = useDraggable({ id, disabled })

    const style = {
        transform: CSS.Translate.toString(transform),
        cursor: disabled ? "not-allowed" : "grab",
        opacity: isChosen ? 0.3 : 1,
        zIndex: transform ? 1000 : 1
    }

    return (
        <div
            ref={setNodeRef}
            className={classNames(spaceship, { [chosen]: isChosen })}
            style={style}
            {...(disabled ? {} : listeners)}
            {...attributes}
            onClick={onClick}
        >

            <div className={classNames(type, 'ship-type', `ship-type__${data.type}`)}>{data.type}</div>

            <img className={photo} src={data.photo} alt="" />

            <div className={nameDivider}></div>

            <div className={name}>
                {data.name}
            </div>

        </div>
    )
}
