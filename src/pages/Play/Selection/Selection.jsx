import React, { useState } from 'react'
import styles from './Selection.module.scss'

import { Spaceships } from './Spaceships/Spaceships'

export const Selection = () => {

    return (
        <div>
            <div className="wrapper page__paddings-vertical">
                <h1>Choose starship</h1>

                <Spaceships />

            </div>
        </div>
    )
}
