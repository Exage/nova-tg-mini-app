import React from 'react'
import { Link } from 'react-router'
import classNames from 'classnames'

import './LinkButton.scss'

export const LinkButton = ({ disabled = false, className = [], to, children, ...props }) => {
    return (
        <Link
            className={classNames('link-btn', { ['link-btn__disabled']: disabled }, 'btn', ...className)}
            to={disabled ? '#' : to}
            tabIndex={disabled ? -1 : 0}
            aria-disabled={disabled}
            onClick={(e) => disabled && e.preventDefault()}
            {...props}
        >
            <span className='btn__text'>
                {children}
            </span>
        </Link>
    )
}
