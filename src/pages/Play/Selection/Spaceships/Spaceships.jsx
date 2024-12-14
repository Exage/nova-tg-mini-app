import React, { useEffect, useState } from 'react'
import styles from './Spaceships.module.scss'

import { ReactSVG } from 'react-svg'

import { DndContext, PointerSensor, useSensor, useSensors } from '@dnd-kit/core'

import { Spaceship } from './Spaceship/Spaceship'
import { Dropzone } from './Dropzone/Dropzone'

import shipPh from '@/assets/images/ship-ph.jpg'
import removeIcon from '@/assets/images/play/close.svg'

const spaceshipsList = [
    {
        id: 'q111',
        name: 'Starship 1',
        type: 'legendary',
        photo: shipPh
    },
    {
        id: 'b222',
        name: 'Starship 2',
        type: 'epic',
        photo: shipPh
    },
    {
        id: 'm333',
        name: 'Starship 3',
        type: 'common',
        photo: shipPh
    },
    {
        id: 'z222',
        name: 'Starship 4',
        type: 'premium',
        photo: shipPh
    },
    {
        id: 'b773',
        name: 'Starship 5',
        type: 'rare',
        photo: shipPh
    },
]

export const Spaceships = ({ chosenSpaceships, setChosenSpaceships }) => {

    const {
        chose,
        ['spaceships__wrapper']: spacechipsWrapper,
        ['dropzone__block']: dropzoneBlock,
        ['dropzone__block-close']: dropzoneClose
    } = styles

    const sensors = useSensors(
        useSensor(PointerSensor, {
            activationConstraint: {
                distance: 8
            }
        })
    )

    const [spaceships, setSpaceships] = useState(null)

    useEffect(() => {
        const currentSpaceships = spaceshipsList.map(item => ({ spaceship: item, disabled: false }))
        setSpaceships(currentSpaceships)
    }, [])

    const maxShips = 1

    const handleDragEnd = (event) => {
        const { active, over } = event

        if (over && over.id === "dropzone" && chosenSpaceships.length < maxShips) {
            const draggedItem = spaceships.find((item) => item.spaceship.id === active.id)

            if (draggedItem) {
                setChosenSpaceships([...chosenSpaceships, draggedItem]);
                setSpaceships(
                    spaceships.map((item) =>
                        item.spaceship.id === active.id ? { ...item, disabled: true } : item
                    )
                )
            }
        }
    }

    const handleRemoveFromChosen = (item) => {
        setChosenSpaceships(chosenSpaceships.filter((i) => i.spaceship.id !== item.spaceship.id))
        setSpaceships(
            spaceships.map((i) =>
                i.spaceship.id === item.spaceship.id ? { ...i, disabled: false } : i
            )
        )
    }

    const handleClick = (item) => {
        if (!item.disabled && (chosenSpaceships.length < maxShips)) {
            setChosenSpaceships([...chosenSpaceships, item])
            setSpaceships(
                spaceships.map((i) =>
                    i.spaceship.id === item.spaceship.id ? { ...i, disabled: true } : i
                )
            )
        }
    }


    return (
        <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
            <div className={chose}>

                <Dropzone 
                    id="dropzone"
                    emtptyBlocksCount={maxShips - chosenSpaceships.length}
                >
                    {chosenSpaceships.map((item) => (
                        <div key={`dropzone-spacechip-${item.spaceship.id}`} className={dropzoneBlock}>
                            <Spaceship id={item.spaceship.id} data={item.spaceship} disabled={true} isChosen={false} />
                            <button className={dropzoneClose} onClick={() => handleRemoveFromChosen(item)}>
                                <ReactSVG src={removeIcon} />
                            </button>
                        </div>
                    ))}
                </Dropzone>

                <div className={spacechipsWrapper}>
                    {spaceships && spaceships.map((item) => {

                        const isChosen = chosenSpaceships.find(i => i.spaceship.id === item.spaceship.id)

                        return (
                            <Spaceship
                                key={`spaceship-${item.spaceship.id}-${item.disabled}`}
                                id={item.spaceship.id}
                                data={item.spaceship}
                                disabled={item.disabled}

                                onClick={() => handleClick(item)}

                                isChosen={isChosen}
                            />
                        )

                    })}
                </div>

            </div>
        </DndContext>
    )

}
