import React from 'react'
import classNames from 'classnames'

import './Button.scss'

export const Button = ({ disabled = false, className = [], children, ...props }) => {

    return (
        <button
            className={classNames('btn', ...className)}
            disabled={disabled}
            {...props}
        >
            <span className='btn__text'>
                {children}
            </span>
        </button>
    )
}
