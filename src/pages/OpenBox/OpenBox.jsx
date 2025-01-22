import { useEffect, useState } from 'react'
import { Starship } from './components/Starship'

const photo = '/ship-ph.jpg'

const items = [
    { id: 1, name: 'Ship 1', photo },
    { id: 2, name: 'Ship 2', photo },
    { id: 3, name: 'Ship 3', photo },
    { id: 4, name: 'Ship 4', photo },
    { id: 5, name: 'Ship 5', photo },
]

export const OpenBox = () => {
    const [shuffledItems, setShuffledItems] = useState([])
    const [translateX, setTranslateX] = useState(0)
    const [startTranslateX, setStartTranslateX] = useState(0)
    const [endTranslateX, setEndTranslateX] = useState(0)
    const [animationName, setAnimationName] = useState('')

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

        setShuffledItems(extendedArray)

        const calcStart = -((blockWidth + gap) * startIndex)
        const calcEnd = -((blockWidth + gap) * (extendedArray.length - 2))

        setStartTranslateX(calcStart)
        setEndTranslateX(calcEnd)
        setTranslateX(calcStart)
    }

    const openCase = () => {
        setTranslateX(startTranslateX)
        setAnimationName('')

        setTimeout(() => {
            setAnimationName('spinBox')
            setKeyframes()
        }, 50)

        setTimeout(() => {
            setAnimationName('')
            setTranslateX(endTranslateX)
        }, animationDuration)
    }

    const setKeyframes = () => {
        const styleSheet = document.styleSheets[0]
        const keyframeName = 'spinBox'
        const existingKeyframes = Array.from(styleSheet.cssRules).some((rule) => rule.name === keyframeName)

        if (!existingKeyframes) {
            const keyframes = `
            @keyframes ${keyframeName} {
                from {
                    transform: translateX(${startTranslateX}px);
                }
                to {
                    transform: translateX(${endTranslateX}px);
                }
            }
            `
            styleSheet.insertRule(keyframes, styleSheet.cssRules.length)
        }
    }

    return (
        <div className="overflow-hidden">
            <div className="flex mt-7">
                <div
                    className="flex"
                    style={{
                        gap,
                        animation: animationName
                            ? `${animationName} ${animationDuration / 1000}s ease-out forwards 1s`
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

            <div className="flex items-center justify-center mt-8">
                <button onClick={openCase} className="px-3 py-1 bg-accent-700 text-white rounded-md mx-auto">
                    Open Case
                </button>
            </div>
        </div>
    )
}
