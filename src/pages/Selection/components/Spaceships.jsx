import { useEffect, useState } from 'react'

import { DndContext, PointerSensor, useSensor, useSensors } from '@dnd-kit/core'

import { Spaceship } from './Spaceship'
import { Dropzone } from './Dropzone'

const spaceshipsList = [
    {
        id: 'q111',
        name: 'Starship 1',
        type: 'legendary',
        photo: '/ship-ph.jpg',
    },
    {
        id: 'b222',
        name: 'Starship 2',
        type: 'epic',
        photo: '/ship-ph.jpg',
    },
    {
        id: 'm333',
        name: 'Starship 3',
        type: 'common',
        photo: '/ship-ph.jpg',
    },
    {
        id: 'z222',
        name: 'Starship 4',
        type: 'premium',
        photo: '/ship-ph.jpg',
    },
    {
        id: 'b773',
        name: 'Starship 5',
        type: 'rare',
        photo: '/ship-ph.jpg',
    },
]

export const Spaceships = ({ chosenSpaceships, setChosenSpaceships }) => {

    const [spaceships, setSpaceships] = useState(null)

    const maxShips = 1

    const sensors = useSensors(
        useSensor(PointerSensor, {
            activationConstraint: {
                distance: 8,
            },
        })
    )

    useEffect(() => {
        const currentSpaceships = spaceshipsList.map((item) => ({
            spaceship: item,
            disabled: false,
        }))
        setSpaceships(currentSpaceships)
    }, [])

    const handleDragEnd = (event) => {
        const { active, over } = event

        if (over && over.id === 'dropzone' && chosenSpaceships.length < maxShips) {
            const draggedItem = spaceships.find((item) => item.spaceship.id === active.id)

            if (draggedItem) {
                setChosenSpaceships([...chosenSpaceships, draggedItem])
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
        if (!item.disabled && chosenSpaceships.length < maxShips) {
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
            <Dropzone id="dropzone" emtptyBlocksCount={maxShips - chosenSpaceships.length}>
                {chosenSpaceships.map((item) => (

                    <div key={`dropzone-spacechip-${item.spaceship.id}`} className={'relative'}>
                        <Spaceship
                            id={item.spaceship.id}
                            data={item.spaceship}
                            disabled={true}
                            isChosen={false}
                        />

                        <button
                            className={'absolute -top-2 -right-2 w-6 h-6 cursor-pointer z-[5] text-accent-600'}
                            onClick={() => handleRemoveFromChosen(item)}
                        >
                            <svg
                                width="21"
                                height="21"
                                viewBox="0 0 21 21"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M10.4999 20.9168C5.58945 20.9168 3.13422 20.9168 1.60874 19.3913C0.0832518 17.8659 0.083252 15.4106 0.083252 10.5002C0.083252 5.58969 0.0832518 3.13446 1.60874 1.60899C3.13422 0.083496 5.58945 0.0834961 10.4999 0.0834961C15.4103 0.0834961 17.8656 0.083496 19.3911 1.60899C20.9166 3.13446 20.9166 5.58969 20.9166 10.5002C20.9166 15.4106 20.9166 17.8659 19.3911 19.3913C17.8656 20.9168 15.4103 20.9168 10.4999 20.9168ZM7.3433 7.34357C7.6484 7.03848 8.14306 7.03848 8.44815 7.34357L10.4999 9.39537L12.5516 7.34359C12.8567 7.0385 13.3514 7.0385 13.6565 7.34359C13.9616 7.64868 13.9616 8.14335 13.6565 8.44839L11.6047 10.5002L13.6565 12.5519C13.9616 12.8569 13.9616 13.3516 13.6565 13.6567C13.3514 13.9618 12.8567 13.9618 12.5516 13.6567L10.4999 11.6051L8.44815 13.6567C8.14309 13.9618 7.64842 13.9618 7.34332 13.6567C7.03823 13.3516 7.03823 12.857 7.34332 12.5519L9.39502 10.5002L7.3433 8.44839C7.03821 8.14333 7.03821 7.64866 7.3433 7.34357Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </button>
                    </div>

                ))}
            </Dropzone>

            <div className={'grid grid-cols-3 gap-2 mt-2'}>
                {spaceships &&
                    spaceships.map((item) => {

                        const isChosen = chosenSpaceships.find(
                            (i) => i.spaceship.id === item.spaceship.id
                        )

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
        </DndContext>
    )
}
