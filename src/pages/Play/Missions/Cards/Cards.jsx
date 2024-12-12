import React from 'react'

import styles from './Cards.module.scss'
import { Card } from './Card/Card'

import thumbnail from '@/assets/images/play/mission-thumbnail.jpg'

const missionsList = [
    {
        id: '123',
        title: 'Terra Prime',
        thumbnail,
        description: 'A nearby planet with basic resources. Perfect for beginners.',
        points: 0.3
    },
    {
        id: '456',
        title: 'Luminara',
        thumbnail,
        description: 'Covered in shimmering crystals. Easy to mine.',
        points: 0.6
    },
    {
        id: '789',
        title: 'Nova Vortex',
        thumbnail,
        description: 'A zone of high activity. Great rewards await!',
        points: 1.2
    },
    {
        id: '101112',
        title: 'Ecliptica',
        thumbnail,
        description: 'A planet on the edge of the solar system. High-yield mining.',
        points: 2.5
    },
]

export const Cards = () => {
    
    const { cards } = styles
    
    return (
        <div className={cards}>
            {missionsList.map(item => <Card key={item.id} data={item} />)}
        </div>
    )
}
