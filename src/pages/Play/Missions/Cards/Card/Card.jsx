import React from 'react'
import styles from './Card.module.scss'

import { Link } from 'react-router'

export const Card = ({ data }) => {

    const { path, card, photo, name, description, points } = styles

    return (
        <Link to={`/play/spaceships?missionId=${data.id}`} className={card}>
            <div className={photo}>
                <img src={data.thumbnail} alt={data.name} />
            </div>
            <h3 className={name}>
                {data.title}
            </h3>
            <p className={description}>
                {data.description}
            </p>
            <div className={points}>
                {data.points}
            </div>
        </Link>
    )
}
