import React from 'react'
import styles from './Spaceship.module.scss'
import { useDraggable } from '@dnd-kit/core'
import { CSS } from '@dnd-kit/utilities'
import classNames from 'classnames'

export const Spaceship = ({ id, data, disabled, chosenSpaceships = [] }) => {

    const { spaceship, photo, name, ['name__divider']: nameDivider, chosen } = styles

    const { attributes, listeners, setNodeRef, transform } = useDraggable({ id, disabled })

    const isChosen = chosenSpaceships.find(item => item.spaceship.id === id)

    console.log(id, isChosen)
    console.log(chosenSpaceships)

    const style = {
        transform: transform
            ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
            : undefined,
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
        >
            
            <img className={photo} src={data.photo} alt="" />
            
            <div className={nameDivider}></div>

            <div className={name}>
                {data.name}
            </div>

        </div>
    )
}
