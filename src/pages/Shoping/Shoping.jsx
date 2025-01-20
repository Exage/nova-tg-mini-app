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
    const [translateX, setTranslateX] = useState(0)

    const blockWidth = 208
    const blockHeight = 64
    const gap = 20
    const windowWidth = window.innerWidth >= 520 ? 520 : window.innerWidth

    const items = [
        { id: 1, name: 'Ship 1' },
        { id: 2, name: 'Ship 2' },
        { id: 3, name: 'Ship 3' },
        { id: 4, name: 'Ship 4' },
        { id: 5, name: 'Ship 5' },
    ]

    const openCase = () => {
        const duplicationCount = 6

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

        const startIndex = 3
        const endIndex = shuffledArray.length - 3

        console.log(shuffledArray)

        const targetTranslateX = -((blockWidth + gap) * endIndex)
        setTranslateX(-((blockWidth + gap) * startIndex))
        setTimeout(() => setTranslateX(targetTranslateX), 10)
    }

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
                {shuffledItems.length !== 0 && (
                    <div
                        className="flex"
                        style={{
                            gap,
                            transform: `translateX(${translateX}px)`,
                            transition: 'transform 7s ease-out',
                            padding: `0 ${(windowWidth - blockWidth) / 2}px`,
                        }}
                    >
                        {shuffledItems.map((item, index) => (
                            <div
                                key={index}
                                className="w-52 h-16 flex items-center justify-center text-black-900 bg-white"
                            >
                                {item.name}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default CaseComponent
