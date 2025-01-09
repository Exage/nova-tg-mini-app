import { useState, useEffect } from 'react'

import { MainWrapper } from '@/components/MainWrapper'
import { Filter } from './components/Filter'

export const RentStarship = () => {
    const [selectedItems, setSelectedItems] = useState([])

    useEffect(() => {
        console.log(selectedItems)
    }, [selectedItems])

    return (
        <MainWrapper py="py-0">
            <div className={'mt-2.5 flex items-end justify-between'}>
                <h2 className={'font-medium text-white text-base leading-none'}>
                    Total starship: <span className={'font-bold text-accent-500'}>2000</span>
                </h2>

                <Filter selectedItems={selectedItems} setSelectedItems={setSelectedItems} />
            </div>
        </MainWrapper>
    )
}
