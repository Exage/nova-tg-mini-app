import { useState, useEffect } from 'react'

import { MainWrapper } from '@/components/MainWrapper'
import { Filter } from './components/Filter'
import { Starship } from './components/Starship'

const shipPhoto = '/ship-ph.jpg'
const spaceships = [
    {
        id: '123',
        name: 'Nebula seeker 1',
        type: 'legendary',
        gems: 10,
        photo: shipPhoto,
    },
    {
        id: '623',
        name: 'Nebula seeker 2',
        type: 'rare',
        gems: 10,
        photo: shipPhoto,
    },
    {
        id: '999',
        name: 'Nebula seeker 3',
        type: 'common',
        gems: 10,
        photo: shipPhoto,
    },
    {
        id: '998',
        name: 'Nebula seeker 4',
        type: 'epic',
        gems: 10,
        photo: shipPhoto,
    },
    {
        id: '421',
        name: 'Nebula seeker 5',
        type: 'common',
        gems: 10,
        photo: shipPhoto,
    },
    {
        id: '126',
        name: 'Nebula seeker 6',
        type: 'common',
        gems: 10,
        photo: shipPhoto,
    },
    {
        id: '99',
        name: 'Nebula seeker 7',
        type: 'epic',
        gems: 10,
        photo: shipPhoto,
    },
]

export const RentStarship = () => {
    const [selectedItems, setSelectedItems] = useState([])

    const [displayedShips, setDisplayedShips] = useState([])

    useEffect(() => {
        setDisplayedShips(
            selectedItems.length === 0
                ? [...spaceships]
                : spaceships.filter((item) => selectedItems.includes(item.type))
        )
        // setDisplayedShips(spaceships.filter((item) => selectedItems.includes(item.type)))
    }, [selectedItems])

    return (
        <MainWrapper py="py-0">
            <div className={'mt-2.5 flex items-end justify-between'}>
                <h2 className={'font-medium text-white text-base leading-none'}>
                    Total starship: <span className={'font-bold text-accent-500'}>2000</span>
                </h2>

                <Filter selectedItems={selectedItems} setSelectedItems={setSelectedItems} />
            </div>

            <div className={'grid grid-cols-2 gap-2 mt-2'}>
                {displayedShips.map((item) => (
                    <Starship key={item.id} data={item} />
                ))}
            </div>
        </MainWrapper>
    )
}
