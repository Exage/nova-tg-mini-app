import React, { useEffect, useState } from 'react'
import styles from './Spaceships.module.scss'

import { ReactSVG } from 'react-svg'

import { DndContext } from '@dnd-kit/core'

import { Spaceship } from './Spaceship/Spaceship'
import { Dropzone } from './Dropzone/Dropzone'

import shipPh from '@/assets/images/ship-ph.jpg'
import removeIcon from '@/assets/images/play/close.svg'

const spaceshipsList = [
    {
        id: 'q111',
        name: 'Starship 1',
        photo: shipPh
    },
    {
        id: 'b222',
        name: 'Starship 2',
        photo: shipPh
    },
    {
        id: 'm333',
        name: 'Starship 3',
        photo: shipPh
    },
    {
        id: 'z222',
        name: 'Starship 4',
        photo: shipPh
    },
    {
        id: 'b773',
        name: 'Starship 5',
        photo: shipPh
    },
]

export const Spaceships = () => {

    const {
        chose,
        ['spaceships__wrapper']: spacechipsWrapper,
        ['dropzone__block']: dropzoneBlock,
        ['dropzone__block-close']: dropzoneClose
    } = styles

    const [spaceships, setSpaceships] = useState(null)

    useEffect(() => {
        const currentSpaceships = spaceshipsList.map(item => ({ spaceship: item, disabled: false }))
        setSpaceships(currentSpaceships)
    }, [])

    const [chosenSpaceships, setChosenSpaceships] = useState([])

    const maxShips = 3

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

    return (
        <DndContext onDragEnd={handleDragEnd}>
            <div className={chose}>

                <Dropzone id="dropzone">
                    {chosenSpaceships.map((item) => (
                        <div key={`dropzone-spacechip-${item.spaceship.id}`} className={dropzoneBlock}>
                            <Spaceship id={item.spaceship.id} data={item.spaceship} disabled={true} />
                            <button className={dropzoneClose} onClick={() => handleRemoveFromChosen(item)}>
                                <ReactSVG src={removeIcon} />
                            </button>
                        </div>
                    ))}
                </Dropzone>

                <div className={spacechipsWrapper}>
                    {spaceships && spaceships.map((item) => (
                        <Spaceship
                            key={`spaceship-${item.spaceship.id}-${item.disabled}`}
                            id={item.spaceship.id}
                            data={item.spaceship}
                            disabled={item.disabled}

                            chosenSpaceships={chosenSpaceships}
                        />
                    ))}
                </div>

            </div>
        </DndContext>
    )

}
