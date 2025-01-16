import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export const Shoping = () => {
    return (
        <div className={'h-full'}>
            <h1 className={'text-center p-2 text-2xl font-bold'}>Shoping Page</h1>

            <CaseComponent />
        </div>
    )
}

const CaseComponent = () => {
    const [isOpen, setIsOpen] = useState(false)

    const [selectedItem, setSelectedItem] = useState(null)
    const [shuffledItems, setShuffledItems] = useState([])

    const items = [
        { id: 1, name: 'Ship 1' },
        { id: 2, name: 'Ship 2' },
        { id: 3, name: 'Ship 3' },
        { id: 4, name: 'Ship 4' },
        { id: 5, name: 'Ship 5' },
    ]

    const openCase = () => {
        const duplicationCount = 3

        let extendedArray = []
        for (let i = 0; i < duplicationCount; i++) {
            extendedArray = extendedArray.concat(items)
        }

        const shuffleArray = (array) => {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1))
                const temp = array[i]
                array[i] = array[j]
                array[j] = temp
            }

            return array
        }

        const shuffledArray = shuffleArray(extendedArray)
        setShuffledItems(shuffledArray)
    }

    console.log(shuffledItems)

    return (
        <div className="overflow-hidden">
            <div className="flex items-center justify-center mt-8">
                <button
                    onClick={openCase}
                    className="px-3 py-1 bg-accent-700 text-white rounded-md mx-auto"
                >
                    Open Case
                </button>
            </div>

            <div className="flex mt-7">
                <div className="flex gap-5">
                    {shuffledItems.map((item, index) => (
                        <div
                            key={index}
                            className="w-52 h-16 flex items-center justify-center text-black-900 bg-white"
                        >
                            {item.name}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CaseComponent
