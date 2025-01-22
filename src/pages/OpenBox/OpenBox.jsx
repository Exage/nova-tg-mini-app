import { useEffect, useState } from 'react'
import classNames from 'classnames'
import { Starship } from './components/Starship'

import { Button } from '@/components/UI/Buttons/Button'

const photo = '/ship-ph.jpg'

const items = [
    { id: 1, name: 'Ship 1', photo },
    { id: 2, name: 'Ship 2', photo },
    { id: 3, name: 'Ship 3', photo },
    { id: 4, name: 'Ship 4', photo },
    { id: 5, name: 'Ship 5', photo },
]

export const OpenBox = () => {
    const [selectedItem, setSelectedItem] = useState({})
    const [shuffledItems, setShuffledItems] = useState([])
    const [translateX, setTranslateX] = useState(0)
    const [startTranslateX, setStartTranslateX] = useState(0)
    const [endTranslateX, setEndTranslateX] = useState(0)
    const [animationName, setAnimationName] = useState('')

    const [availableOpens, setAvailableOpens] = useState(3)

    const blockWidth = 200
    const blockHeight = 145
    const gap = 20
    const windowWidth = window.innerWidth >= 520 ? 520 : window.innerWidth
    const animationDuration = 7000

    const startIndex = 2

    useEffect(() => {
        shuffleArray()
    }, [])

    const shuffleArray = () => {
        const duplicationCount = 6

        let extendedArray = []
        for (let i = 0; i < duplicationCount; i++) {
            extendedArray = extendedArray.concat(items)
        }

        for (let i = extendedArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1))
            const temp = extendedArray[i]
            extendedArray[i] = extendedArray[j]
            extendedArray[j] = temp
        }

        const randomItem = items[Math.floor(Math.random() * items.length)]
        setSelectedItem(randomItem)

        const indexToReplace = extendedArray.length - 3
        extendedArray[indexToReplace] = randomItem

        setShuffledItems(extendedArray)

        const calcStart = -((blockWidth + gap) * startIndex)
        const calcEnd = -((blockWidth + gap) * (extendedArray.length - 3))

        console.log(extendedArray)
        setTranslateX(calcStart)

        setStartTranslateX(calcStart)
        setEndTranslateX(calcEnd)
    }

    const openCase = () => {
        if (availableOpens > 0) {
            shuffleArray()
            setAvailableOpens((prev) => prev - 1)
            setAnimationName('spinBox')
            setKeyframes()

            setTimeout(() => {
                setAnimationName('')
                setTranslateX(endTranslateX)
                console.log(selectedItem)
            }, animationDuration)
        }
    }

    const setKeyframes = () => {
        const styleSheet = document.styleSheets[0]
        const keyframeName = 'spinBox'
        const existingKeyframes = Array.from(styleSheet.cssRules).some((rule) => rule.name === keyframeName)

        if (!existingKeyframes) {
            const keyframes = `
            @keyframes ${keyframeName} {
                0% {
                    transform: translateX(${startTranslateX}px);
                }
                100% {
                    transform: translateX(${endTranslateX}px);
                }
            }
            `
            styleSheet.insertRule(keyframes, styleSheet.cssRules.length)
        }
    }

    return (
        <div className={'py-7'}>
            <h3 className={'font-medium text-3xl text-center'}>Standart box</h3>
            <div className="overflow-hidden">
                <div className="flex mt-4">
                    <div
                        className="flex"
                        style={{
                            gap,
                            animation: animationName
                                ? `${animationName} ${animationDuration / 1000}s ease-out forwards`
                                : null,
                            transform: animationName ? null : `translateX(${translateX}px)`,
                            padding: `0 ${(windowWidth - blockWidth) / 2}px`,
                        }}
                    >
                        {shuffledItems.map((item, index) => (
                            <Starship key={index} data={item} width={blockWidth} height={blockHeight} />
                        ))}
                    </div>
                </div>
            </div>

            <div
                className={classNames(
                    'flex items-center justify-center mt-5 relative z-10 px-5',
                    'before:absolute before:bottom-full before:w-[31px] before:h-[33px] before:bg-[url(/boxes_pointer.svg)] before:bg-no-repeat before:bg-contain before:translate-y-2 before:-z-[1]'
                )}
            >
                <Button onClick={openCase} disabled={availableOpens === 0}>
                    {availableOpens > 0 ? `Open (x${availableOpens})` : 'No'}
                </Button>
            </div>
        </div>
    )
}
