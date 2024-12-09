import React from 'react'
import classNames from 'classnames'

import styles from './Button.module.scss'

export const Button = ({ className = [], children, ...props }) => {

    const { btn, outline, text } = styles

    return (
        <button
            className={classNames(btn, ...className)}
            {...props}
        >
            <span className={text}>
                {children}
            </span>
        </button>
    )
}
